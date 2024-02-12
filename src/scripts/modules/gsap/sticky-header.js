import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(".main-header");

if (header) {
  console.log("header");

  ScrollTrigger.create({
    start: 'top -200',
    onUpdate: (self) => {
      if(self.progress > 0.10) {
        !isHeaderStickied ?
        gsap.set( header , {zIndex: 100, position: 'sticky', yPercent: -150})
        : null;
      } else {
        gsap.set( header , {zIndex: 0, position: 'relative', yPercent: 0})
      }       
    }
  });

  let isHeaderStickied = false;

  ScrollTrigger.create({
    start: 'top -400',
    onUpdate: (self) => {
      if(self.progress > 0.15 && !isHeaderStickied) {
        isHeaderStickied = true;
        gsap.to( header ,{
          yPercent: 0,
          duration: .3,
          opacity: 1,
          delay: .2,
          ease: 'linear',
        })
      }

      if(self.progress < 0.15 && isHeaderStickied) {
        gsap.to( header , {
          opacity: 0,
          yPercent: -150,
          duration: .3,
          ease: 'linear',
          onComplete: () => {
            gsap.set( header , {zIndex: 0, position: 'relative', yPercent: 0, opacity: 1});
            isHeaderStickied = false;
          }
        })
      }
    }
  });
}
