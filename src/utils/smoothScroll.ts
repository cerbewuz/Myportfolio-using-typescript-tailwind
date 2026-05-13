import { animate } from "framer-motion"

let currentAnimation: { stop: () => void } | null = null;
let lastExpectedY = 0;
let animationStartTime = 0;
let touchStartY = 0;

const stopAnimation = (e?: Event) => {
  // Smart Interruption:
  // 1. If it's a touchstart, ignore it for the first 100ms
  if (e?.type === "touchstart") {
    touchStartY = (e as TouchEvent).touches[0].clientY;
    if (Date.now() - animationStartTime < 100) return;
  }

  // 2. If it's a touchmove, only stop if the movement is significant (>5px)
  if (e?.type === "touchmove") {
    const touchY = (e as TouchEvent).touches[0].clientY;
    if (Math.abs(touchY - touchStartY) < 5) return;
  }

  if (currentAnimation) {
    currentAnimation.stop();
    currentAnimation = null;
  }
};

// Stop animation on user interaction
if (typeof window !== "undefined") {
  const interruptEvents = ["wheel", "touchstart", "touchmove", "mousedown", "keydown"];
  interruptEvents.forEach(event => {
    window.addEventListener(event, stopAnimation, { passive: true });
  });
}

export const smoothScrollTo = (targetY: number) => {
  stopAnimation();

  const startY = window.scrollY;
  lastExpectedY = startY;
  
  currentAnimation = animate(startY, targetY, {
    type: "spring",
    stiffness: 100, // Slightly reduced for smoother glide
    damping: 40,   // Increased to prevent bounce and feel more premium
    mass: 1,
    onUpdate: (latest) => {
      // If the user has scrolled away from our last expected position, stop the animation
      // Relaxed threshold to 15px to prevent accidental micro-interruptions
      if (Math.abs(window.scrollY - lastExpectedY) > 15) {
        stopAnimation();
        return;
      }
      
      window.scrollTo(0, latest);
      lastExpectedY = latest;
    },
    onComplete: () => {
      currentAnimation = null;
    }
  });
};
