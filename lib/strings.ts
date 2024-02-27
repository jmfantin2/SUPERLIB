'use client';
import { useLang } from '@/contexts/LangContext';
const _ = require('lodash');

export default function TXT(entry: string) {
  const { lang } = useLang();
  return _.get(records, `${entry}[${lang.n}]`);
}

const records = {
  EXEMPLO: ['UM BELO EXEMPLO', 'A GREAT EXAMPLE'],
};
