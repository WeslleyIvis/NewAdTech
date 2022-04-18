import Cursos from './modules/cursos.js';

const curso = new Cursos('.block', '[data-conteudo="curso"]');
curso.init();

console.log(curso);
