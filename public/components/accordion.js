const accordion = () => {
  const accordionItems = document.querySelectorAll('.accordion__item');
  const accordionContent = document.querySelectorAll('.accordion__wrapper');
  const accordionIconVisible = document.querySelectorAll('.visible')
  const accordionIconHidden = document.querySelectorAll('.hidden')
  const accordionTitle = document.querySelectorAll('.accordion__item_title');

  accordionItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open')
      accordionTitle[i].classList.toggle('open');
      accordionContent[i].classList.toggle('open');

      if (accordionIconVisible[i].classList.contains('visible')) {
          accordionIconVisible[i].classList.remove('visible');
          accordionIconVisible[i].classList.add('hidden');
          accordionIconHidden[i].classList.remove('hidden');
          accordionIconHidden[i].classList.add('visible');
      } else {
        accordionIconVisible[i].classList.add('visible');
        accordionIconVisible[i].classList.remove('hidden');
        accordionIconHidden[i].classList.add('hidden');
        accordionIconHidden[i].classList.remove('visible');
      }
        
    })
  })
}

export default accordion;