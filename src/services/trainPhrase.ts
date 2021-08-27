import { EnVerb } from '../types/EnVerb';

type SentenceStructure = {
  third:boolean,
  question:boolean,
  negative:boolean,
  time: TimeInfo
}

type TimeInfo = {
  name:string,
  modal:string,
  modal3?:string,
  modalRequired:boolean
}

const subject = ['I', 'you', 'they'];
const subject3 = ['he', 'she', 'it', 'Danila'];
const times = [
  { name: 'pr-s', modal: 'do', modal3: 'does' },
  { name: 'past-s', modal: 'did' },
];

const objects = ['it', 'him', 'her', 'them'];

export const getTrainPhrase = (verb:EnVerb) => constructPhrase(verb, getStructure());

const getStructure = () => ({
  third: Math.random() < 0.5,
  question: Math.random() > 0.6,
  negative: Math.random() > 0.3,
  time: randElem(times),
} as SentenceStructure);

const constructPhrase = (verb:EnVerb, struct: SentenceStructure) => {
  let phrase = '';
  const subjArr = struct.third ? subject3 : subject;
  const subj = randElem(subjArr);
  const obj = randElem(objects);

  if (struct.question) {
    phrase = `${getModal(struct, true)} ${subj} ${getVerb(verb)} ${obj}?`;
  } else if (struct.negative) {
    phrase = `${subj} ${getModal(struct, true)}${Math.random() < 0.7 ? 'n\'t' : ' not'} ${getVerb(verb)} ${obj}.`;
  } else {
    phrase = `${subj} ${getVerb(verb, struct.third)} ${obj}.`;
  }

  return phrase[0].toUpperCase() + phrase.substr(1);
};

const getVerb = (verb:EnVerb, require3rd = false) => {
  if (require3rd && verb['3rd']) {
    return verb['3rd'];
  }
  return verb.verb;
};

const getModal = (struct:SentenceStructure, require = false) => {
  if (struct.time.modalRequired || require) {
    if (struct.third && struct.time.modal3) {
      return struct.time.modal3;
    }
    return struct.time.modal;
  }
  return '';
};

const randElem = (arr:any[]) => arr[Math.floor(Math.random() * arr.length)];
