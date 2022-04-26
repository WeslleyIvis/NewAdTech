import Accordion from './modules/accordion.js';
import Cursos from './modules/eventCursos.js';
import fetchComunnity from './modules/fetchComunity.js';

const community = new Cursos('.block-pessoa', '.block-pessoa div', '.comunity');
community.init();

const accordion = new Accordion('.perguntas div', '.perguntas p');
accordion.init();

fetchComunnity('./banco.json');
