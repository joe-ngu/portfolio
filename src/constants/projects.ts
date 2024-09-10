import gogym from '@/assets/projects/gogym.png';
import ragmail from '@/assets/projects/ragmail.jpeg';
import translatocr from '@/assets/projects/translatocr.jpeg';
import evogym from '@/assets/projects/evogym.png';
import vacayHomes from '@/assets/projects/vacay-homes.png';
import irusu from '@/assets/projects/irusu.png';

export interface ProjectType {
  name: string;
  description: string;
  image: string;
  codeURL: string;
  demoURL: string;
}

export const projects: Array<ProjectType> = [
  {
    name: 'Gogym',
    description: 'A RESTful API for keeping track of workouts and exercises, built in Go',
    image: gogym,
    codeURL: 'https://github.com/joe-ngu/gogym',
    demoURL: '',
  },
  {
    name: 'Ragmail',
    description: 'An AI-powered RAG app for automating Gmail responses',
    image: ragmail,
    codeURL: 'https://github.com/joe-ngu/ragmail',
    demoURL: '',
  },
  {
    name: 'TranslatOCR',
    description: 'An OCR Translator to translate text detected from images',
    image: translatocr,
    codeURL: 'https://github.com/joe-ngu/translatocr',
    demoURL: '',
  },
  {
    name: 'Vacay Homes',
    description: 'A home rental platform for vacationers',
    image: vacayHomes,
    codeURL: 'https://github.com/joe-ngu/vacay-homes',
    demoURL: 'https://vacay-homes.vercel.app/',
  },
  {
    name: 'Evo-Gym',
    description: 'A gym landing page for an upcoming fitness brand',
    image: evogym,
    codeURL: 'https://github.com/joe-ngu/evo-gym',
    demoURL: 'https://evo-gym-6bz.pages.dev/',
  },
  {
    name: 'Irusu',
    description: 'A simple ecommerce platform for online shopping',
    image: irusu,
    codeURL: 'https://github.com/joe-ngu/irusu',
    demoURL: '',
  },
];
