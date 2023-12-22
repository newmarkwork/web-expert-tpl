const cards = document.querySelectorAll('.service-card');

if( cards ) {
  const services = document.querySelector('.services__content');

  const fillCards = (width, translateValue) => {
    cards.forEach( (card,index) => {
      card.style.width = width + 'px';
      card.style.transform = `translateX(${translateValue*index}px)`;
    });

    services.style.minHeight = `${ ( (cards[cards.length - 1].getBoundingClientRect().height) / 100 ) * 90 }px`;
  }

  const calculateCardSize = () => {
    const sectionWidth = services.getBoundingClientRect().width;

    const initial = sectionWidth / cards.length;
    const offset = (initial / 100) * (100/3);
    const result = initial + offset;
    const translateValue = (result / 3) * 2;

    fillCards(result, translateValue)
  }

  calculateCardSize();

  const onMouseLeaveHandler = (evt) => {
    const current = evt.currentTarget;

    current.removeEventListener('mouseleave',onMouseLeaveHandler);
    current.addEventListener('mouseenter',onMouseEnterHandler);

    cards.forEach( (card,index) => {
      card.style.zIndex = index * 10;
    });
  }

  const onMouseEnterHandler = (evt) => {
    const current = evt.currentTarget;

    current.removeEventListener('mouseenter',onMouseEnterHandler);
    current.addEventListener('mouseleave',onMouseLeaveHandler);

    let currentIndex = null;

    cards.forEach( (card,index) => {
      if(card === current) {
        currentIndex = index;
      }
    });

    for (let i = 0; i < cards.length; i++) {
      if(i !== currentIndex) {
        cards[i].style.zIndex = (i + 1) * 10;
      }
      if(i === currentIndex) {
        cards[currentIndex].style.zIndex = cards.length * 10;
      }
      if(i > currentIndex) {
        cards[i].style.zIndex = (cards.length - i ) * 10;
      }
    }
  }

  cards.forEach( (card,index) => {
    card.addEventListener('mouseenter',onMouseEnterHandler);
  });

  window.addEventListener('resize', calculateCardSize);
}
