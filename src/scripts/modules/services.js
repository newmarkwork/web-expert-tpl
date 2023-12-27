import { gsap } from "gsap";

const cards = document.querySelectorAll('.service-card');

if( cards ) {
  document.addEventListener("DOMContentLoaded", () => {
    const cardsArr = gsap.utils.toArray(cards);
    const services = document.querySelector('.services__content');
    const minContentWidth = 1720;

    const onMouseLeaveHandler = (evt) => {
      const current = evt.currentTarget;

      current.removeEventListener('mouseleave',onMouseLeaveHandler);
      current.addEventListener('mouseenter',onMouseEnterHandler);

      // cards.forEach( (card,index) => {
      //   card.style.zIndex = index * 10;
      // });
      // gsap.to('.service-card', {opacity: 1, duration: .1, ease: 'none'});
    }

    const onMouseEnterHandler = (evt) => {
      const current = evt.currentTarget;

      current.removeEventListener('mouseenter',onMouseEnterHandler);
      current.addEventListener('mouseleave',onMouseLeaveHandler);

      //---------------
      // let currentIndex = null;

      // cards.forEach( (card,index) => {
      //   if(card === current) {
      //     currentIndex = index;
      //   }
      // });

      // for (let i = 0; i < cards.length; i++) {
      //   if(i !== currentIndex) {
      //     cards[i].style.zIndex = (i + 1) * 10;
      //   }
      //   if(i === currentIndex) {
      //     cards[currentIndex].style.zIndex = cards.length * 100;
      //   }
      //   if(i > currentIndex) {
      //     cards[i].style.zIndex = (cards.length - i ) * 10;
      //   }
      // }
      //-----------

      let cardAnimation = gsap.timeline({paused: true, delay: .2});

      // cardAnimation.to(current, {duration: .05, scale: 0.99, ease: "none"});
      cardAnimation.to(current, {y: 5, duration: .05, scale: 0.99, ease: "none"});
      cardAnimation.to(current, {
        scale: 1.02,
        y: -10,
        duration: .2,
        zIndex: 100,
        ease: "none",
      });

      cardAnimation.play();

      const onLeaveHandler = () => {
        cardAnimation.reverse();
        current.removeEventListener('mouseleave', onLeaveHandler);
      }

      current.addEventListener('mouseleave', onLeaveHandler);
    }

    const init = () => {
      const contentWidth = services.getBoundingClientRect().width; // Ширина контентной области с карточками услуг

      if(contentWidth > minContentWidth) {
        const gap = 20; // Расстояние между карточками
        const cardWidth = contentWidth / cards.length; // Ширина карточки
        const offsetWidth = ( cards.length * gap ) / ( cards.length - 1 ); // Вычимсляем расстояние между карточками, для симметричного расположения

        cards.forEach( ( card, index ) => {
          card.style.width = ( cardWidth - offsetWidth ) + 'px';

          card.style.left = ( ( cardWidth * index ) + offsetWidth ) - ( offsetWidth / 2 ) + 'px';
        });

      } else {
          const initialCardWidth = contentWidth / cards.length;
          const offset = (initialCardWidth / 100) * ( 100 / cards.length );
          const cardWidth = initialCardWidth + offset;
          const translateValue = ( cardWidth / ( cards.length - 1 ) ) * 2;

          cards.forEach( ( card,index ) => {
            card.style.width = cardWidth + 'px';

            card.style.left = `${( translateValue * index ) + ( offset / 2 )}px`;
          });
        }

      setTimeout(() => {
        services.style.minHeight = `${ ( ( cards[cards.length - 1].getBoundingClientRect().height ) / 100 ) * 90 }px`;
      }, 0);
    }

    init();

    cards.forEach( (card,index) => {
      card.style.position = 'absolute';
      card.style.top = 0;
      card.addEventListener('mouseenter',onMouseEnterHandler);
    });

    window.addEventListener('resize', init);
  });
}
