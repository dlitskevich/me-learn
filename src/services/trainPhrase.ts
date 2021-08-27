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
  modalRequired?:boolean,
  verb:string,
  verbWithModal?:string
}

type PhraseInfo = {
  verb:EnVerb,
  struct:SentenceStructure,
  subj:string,
  obj:string

}

const subject = ['I', 'you', 'they'];
const subject3 = ['he', 'she'];
const emoji = {
  I: 'я',
  you: 'ты',
  they: 'они',
  he: 'он',
  she: 'она',
  him: '🙍‍♂️',
  her: '🙍‍♀️',
  them: '👬',
};

const times : TimeInfo[] = [
  { name: 'pr-s', modal: 'do', modal3: 'does', verb: 'verb' },
  { name: 'past-s', modal: 'did', verb: 'verb2', verbWithModal: 'verb' },
  { name: 'fut-s', modal: 'will', modalRequired: true, verb: 'verb' },
];

const objects = ['him', 'her', 'them'];

export const getTrainPhrase = (verb:EnVerb) => {
  const struct = getStructure();
  const subj = getSubject(struct);
  const obj = randElem(objects);
  const phraseInfo = { verb, struct, subj, obj };
  return {
    target: constructPhrase(phraseInfo),
    ru: '',
    emoji: constructPhraseEmoji(phraseInfo),
  };
};

const replacements = [{ from: ' willn\'t ', to: ' won\'t ' }];

const replace = (phrase:string) => replacements.reduce((acc, e) => acc.replaceAll(`${e.from}`, e.to), phrase);

const getStructure = () => ({
  third: Math.random() < 0.5,
  question: Math.random() > 0.66,
  negative: Math.random() > 0.5,
  time: randElem(times),
} as SentenceStructure);

const getSubject = (struct:SentenceStructure) => {
  const subjArr = struct.third ? subject3 : subject;
  return randElem(subjArr);
};

const constructPhraseEmoji = ({ verb, struct, subj, obj }:PhraseInfo) => {
  let phrase = '';

  phrase = `${emoji[subj]}${struct.negative && !struct.question ? ' не' : ''} ([${struct.time.modal}] ${verb.verb}) ${emoji[obj]}${struct.question ? '?' : '.'}`;

  return phrase[0].toUpperCase() + phrase.substr(1);
};

const constructPhrase = ({ verb, struct, subj, obj }:PhraseInfo) => {
  let phrase = '';

  if (struct.question) {
    phrase = `${getModal(struct, true)} ${subj} ${getVerb(verb, struct)} ${obj}?`;
  } else if (struct.negative) {
    phrase = `${subj} ${getModal(struct, true)}${Math.random() < 0.7 ? 'n\'t' : ' not'} ${getVerb(verb, struct)} ${obj}.`;
  } else {
    phrase = `${subj} ${getModal(struct)} ${getVerb(verb, struct)} ${obj}.`;
  }

  return replace(phrase[0].toUpperCase() + phrase.substr(1));
};

const getVerb = (verb:EnVerb, struct:SentenceStructure) => {
  if (struct.time.modalRequired || struct.question || struct.negative) {
    return struct.time.verbWithModal ? verb[struct.time.verbWithModal] : verb[struct.time.verb];
  }
  if (struct.third && !struct.question && verb['3rd']) {
    return verb['3rd'];
  }
  return verb[struct.time.verb];
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
