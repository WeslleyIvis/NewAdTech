export default class Cursos {
  constructor(elements, content) {
    this.cursos = document.querySelectorAll(elements);
    this.conteudo = document.querySelectorAll(content);
  }

  randleEvent(elements) {
    const events = ['click'];

    elements.forEach((curso, index) => {
      curso.addEventListener(events, () => {
        this.cleanClass(index);
      });
    });
  }

  cleanClass(index) {
    this.conteudo.forEach((curso) => {
      curso.classList.remove('active');
    });
    this.conteudo[index].classList.add('active');
  }

  init() {
    this.randleEvent(this.cursos);
  }
}
