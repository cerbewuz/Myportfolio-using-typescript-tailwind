import { animate } from "framer-motion"

let currentAnimation: { stop: () => void } | null = null;
let lastExpectedY = 0;

const stopAnimation = () => {
  if (currentAnimation) {
    currentAnimation.stop();
    currentAnimation = null;
  }
};

// Stop animation on user interaction (focused on desktop)
if (typeof window !== "undefined") {
  const interruptEvents = ["wheel", "mousedown", "keydown"];
  interruptEvents.forEach(event => {
    window.addEventListener(event, stopAnimation, { passive: true });
  });
}

export const smoothScrollTo = (targetY: number) => {
  if (currentAnimation) {
    currentAnimation.stop();
  }

  const startY = window.scrollY;
  lastExpectedY = startY;
  
  currentAnimation = animate(startY, targetY, {
    type: "spring",
    stiffness: 120,
    damping: 45,
    mass: 1,
    onUpdate: (latest) => {
      // If the user has scrolled away from our last expected position, stop the animation
      if (Math.abs(window.scrollY - lastExpectedY) > 15) {
        if (currentAnimation) {
          currentAnimation.stop();
          currentAnimation = null;
        }
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
