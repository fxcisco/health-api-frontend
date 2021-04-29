import { useEffect, useState } from 'react';

let startPos = 0;
let currentIndex = 0;
let isDragging = false;
let currentTranslate = 0;
let previousTranslate = 0;
let animationID = 0;

const getPosX = (event: any) => {
  if (event.type?.includes('mouse')) {
    event = event as MouseEvent;
    return event.pageX;
  } else {
    event = event as TouchEvent;
    return event.touches.item(0)?.clientX;
  }
};

export const useTouchSlider = (slide: string) => {
  const [slider, setSliderRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!slider) return;
    const slides = Array.from(
      slider.querySelectorAll(`.slide`)
    );
    

    slides.forEach((sl, index) => {
      const slideImage = sl.querySelector('img');
      slideImage?.addEventListener('dragstart', preventDefault);
      // Touch events
      sl.addEventListener('touchstart', touchStart(index));
      sl.addEventListener('touchend', touchEnd);
      sl.addEventListener('touchmove', touchMove);

      // Mouse events
      sl.addEventListener('mousedown', touchStart(index));
      sl.addEventListener('mouseup', touchEnd);
      sl.addEventListener('mouseleave', touchEnd);
      sl.addEventListener('mousemove', touchMove);
    });

    function preventDefault(e: any){
      e.preventDefault();
    }

    function touchStart(index: number) {
      return function (e: any) {
        isDragging = true;
        currentIndex = index;
        animationID = requestAnimationFrame(animation);

        const position = getPosX(e);
        if (position) startPos = position;
        slider?.classList.add('grabbing');
      };
    }
    
    function touchMove(event: any) {
      if (isDragging) {
        const currentPosition = getPosX(event);
        if (typeof currentPosition !== 'undefined') {
          currentTranslate = previousTranslate + currentPosition - startPos;
        }
      }
    }

    function touchEnd() {
      if (isDragging) {
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - previousTranslate;
        if (movedBy < -100 && currentIndex < slides.length - 1) {
          currentIndex += 1;
        }
        if (movedBy > 100 && currentIndex > 0) {
          currentIndex -= 1;
        }
        setPositionByIndex();
        slider?.classList.remove('grabbing');
      }
    }

    function setPositionByIndex() {
      const width = slides[currentIndex].clientWidth;
      // currentTranslate = currentIndex * -window.innerWidth
      currentTranslate = currentIndex * -width;
      previousTranslate = currentTranslate;
      setSliderPos();
    }

    function animation() {
      if (slider) {
        setSliderPos();

        if (isDragging) requestAnimationFrame(animation);
      }
    }

    function setSliderPos() {
      if (slider) {
        slider.style.transform = `translateX(${currentTranslate}px)`;
      }
    }

    // disable context menu
    window.oncontextmenu = function (event: any) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    };

    return () => {
      slides?.forEach((sl, index) => {
        const slideImage = sl.querySelector('img');
        slideImage?.removeEventListener('dragstart', preventDefault);

        // Touch events
        sl.removeEventListener('touchstart', touchStart(index));
        sl.removeEventListener('touchend', touchEnd);
        sl.removeEventListener('touchmove', touchMove);
  
        // Mouse events
        sl.removeEventListener('mousedown', touchStart(index));
        sl.removeEventListener('mouseup', touchEnd);
        sl.removeEventListener('mouseleave', touchEnd);
        sl.removeEventListener('mousemove', touchMove);
      });
    }
  }, [slider]);

  return { setSliderRef: (val:any) => { if(val) setSliderRef(val) }};
};
