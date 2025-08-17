import { useEffect, useRef } from 'react';

/
 * Custom hook to handle animations for luxury LRP cosmetics
 * @module useAnimation
 * @description This hook provides animation effects tailored for the luxury LRP cosmetics brand,
 *              enhancing the user experience with elegant transitions and 3D effects.
 */

/
 * Interface for AnimationOptions
 * @interface AnimationOptions
 * @property {string} animationType - Type of animation (e.g., fade, slide, bounce)
 * @property {number} duration - Duration of the animation in milliseconds
 * @property {boolean} isActive - Flag to trigger the animation
 */
interface AnimationOptions {
  animationType: 'fade' | 'slide' | 'bounce';
  duration: number;
  isActive: boolean;
}

/
 * Custom hook for handling animations
 * @param {AnimationOptions} options - Options for the animation
 * @returns {React.RefObject<HTMLDivElement>} ref - Ref to the component to animate
 */
const useAnimation = (options: AnimationOptions) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (options.isActive && ref.current) {
      const { animationType, duration } = options;

      // Apply animation classes based on the type
      ref.current.classList.add(animate-${animationType});

      // Set animation duration
      ref.current.style.transitionDuration = ${duration}ms;

      // Remove animation class after it finishes
      const handleAnimationEnd = () => {
        ref.current?.classList.remove(animate-${animationType});
      };

      ref.current.addEventListener('animationend', handleAnimationEnd);

      return () => {
        ref.current?.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [options]);

  return ref;
};

export default useAnimation;