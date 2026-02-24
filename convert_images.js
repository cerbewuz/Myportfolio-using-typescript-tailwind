import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directories = [
  'public/Certifications/Badges',
  'public/Certifications/Transcripts'
];

async function convertToWebp() {
  for (const dir of directories) {
    if (!fs.existsSync(dir)) {
      console.log(`Directory ${dir} not found. Skipping.`);
      continue;
    }

    const files = fs.readdirSync(dir);
    const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));

    for (const file of pngFiles) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace(/\.png$/i, '.webp'));

      try {
        await sharp(inputPath)
          .webp({ quality: 90 })
          .toFile(outputPath);
        
        console.log(`Converted: ${inputPath} -> ${outputPath}`);
        
        // Remove the original PNG file
        fs.unlinkSync(inputPath);
        console.log(`Deleted original: ${inputPath}`);
      } catch (err) {
        console.error(`Error converting ${inputPath}:`, err);
      }
    }
  }
}

convertToWebp();
