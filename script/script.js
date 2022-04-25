import Accordion from './modules/accordion.js';
import Cursos from './modules/eventCursos.js';
import fetchComunnity from './modules/fetchComunity.js';

const curso = new Cursos('.block', '[data-conteudo="curso"]', '.cursos');
curso.init();

const community = new Cursos('.block-pessoa', '.block-pessoa span', '.comunity')
community.init();

const accordion = new Accordion('.perguntas div', '.perguntas p');
accordion.init()

fetchComunnity('./banco.json')