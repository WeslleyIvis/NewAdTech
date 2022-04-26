export default class Cursos {
  constructor(elements, content, section) {
    this.elements = document.querySelectorAll(elements); // Elemento que será clicado
    this.content = document.querySelectorAll(content); // Conteudo após ativação
    this.section = document.querySelector(section); // ClientTop
  }

  handleEvent(elements) {
    const events = ['click'];

    elements.forEach((object, index) => {
      object.addEventListener(events, () => {
        this.cleanBlock(object, index);
        this.windowScroll(index);
      });
    });
  }

  cleanBlock(element, index) {
    const none = 'none';
    const nameClass = element.className + ' ' + none;

    this.elements.forEach((curso) => {
      if (curso.classList.value === nameClass) {
        curso.classList.remove(none);
      } else {
        curso.classList.add(none);
      }
    });
    this.content[index].classList.toggle('active');
    this.elements[index].classList.remove(none);
  }

  windowScroll(index) {
    let valueLeft = this.elements[index].offsetLeft;
    if (window.innerWidth > 700) {
    } else {
      window.scrollBy({
        top: -window.scrollY + this.section.offsetTop,
        left: valueLeft,
        behavior: 'smooth',
      });
    }
  }

  init() {
    this.handleEvent(this.elements);
    return this;
  }
}
