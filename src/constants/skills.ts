import aws from '@/assets/icons/aws.svg';
import cpp from '@/assets/icons/cpp.svg';
import css from '@/assets/icons/css.svg';
import django from '@/assets/icons/django.svg';
import docker from '@/assets/icons/docker.svg';
import express from '@/assets/icons/express.svg';
import fastapi from '@/assets/icons/fastapi.svg';
import flask from '@/assets/icons/flask.svg';
import github from '@/assets/icons/github.svg';
import gitlab from '@/assets/icons/gitlab.svg';
import gmail from '@/assets/icons/gmail.svg';
import golang from '@/assets/icons/golang.svg';
import googleCloud from '@/assets/icons/googleCloud.svg';
import graphql from '@/assets/icons/graphql.svg';
import html from '@/assets/icons/html.svg';
import java from '@/assets/icons/java.svg';
import javascript from '@/assets/icons/javascript.svg';
import kubernetes from '@/assets/icons/kubernetes.svg';
import meta from '@/assets/icons/meta.svg';
import mongodb from '@/assets/icons/mongodb.svg';
import nextjs from '@/assets/icons/nextjs.svg';
import nodeJS from '@/assets/icons/nodeJS.svg';
import pandas from '@/assets/icons/pandas.svg';
import postgresql from '@/assets/icons/postgresql.svg';
import prisma from '@/assets/icons/prisma.svg';
import python from '@/assets/icons/python.svg';
import rabbitmq from '@/assets/icons/rabbitmq.svg';
import react from '@/assets/icons/react.svg';
import sqlite from '@/assets/icons/sqlite.svg';
import tailwindCSS from '@/assets/icons/tailwindCSS.svg';
import tensorflow from '@/assets/icons/tensorflow.svg';
import typescript from '@/assets/icons/typescript.svg';

const skillIcons = {
  aws,
  cpp,
  css,
  django,
  docker,
  express,
  fastapi,
  flask,
  github,
  gitlab,
  gmail,
  golang,
  googleCloud,
  graphql,
  html,
  java,
  javascript,
  kubernetes,
  meta,
  mongodb,
  nextjs,
  nodeJS,
  pandas,
  postgresql,
  prisma,
  python,
  rabbitmq,
  react,
  sqlite,
  tailwindCSS,
  tensorflow,
  typescript,
};

export interface SkillType {
  name: string;
  image: string;
  link: string;
}

export const skills: Array<SkillType> = [
  {
    name: 'Python',
    image: skillIcons.python,
    link: 'https://www.python.org',
  },
  {
    name: 'Golang',
    image: skillIcons.golang,
    link: 'https://go.dev',
  },
  {
    name: 'C++',
    image: skillIcons.cpp,
    link: 'https://isocpp.org',
  },
  {
    name: 'Java',
    image: skillIcons.java,
    link: 'https://www.oracle.com/java',
  },
  {
    name: 'React',
    image: skillIcons.react,
    link: 'https://react.dev',
  },
  {
    name: 'Next.js',
    image: skillIcons.nextjs,
    link: 'https://nextjs.org',
  },
  {
    name: 'TypeScript',
    image: skillIcons.typescript,
    link: 'https://www.typescriptlang.org',
  },
  {
    name: 'JavaScript',
    image: skillIcons.javascript,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'HTML',
    image: skillIcons.html,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    image: skillIcons.css,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'Tailwind CSS',
    image: skillIcons.tailwindCSS,
    link: 'https://tailwindcss.com',
  },
  {
    name: 'Node.js',
    image: skillIcons.nodeJS,
    link: 'https://nodejs.org',
  },
  {
    name: 'Express',
    image: skillIcons.express,
    link: 'https://expressjs.com',
  },
  {
    name: 'FastAPI',
    image: skillIcons.fastapi,
    link: 'https://fastapi.tiangolo.com',
  },
  {
    name: 'Flask',
    image: skillIcons.flask,
    link: 'https://flask.palletsprojects.com',
  },
  {
    name: 'Django',
    image: skillIcons.django,
    link: 'https://www.djangoproject.com',
  },
  {
    name: 'PostgreSQL',
    image: skillIcons.postgresql,
    link: 'https://www.postgresql.org',
  },
  {
    name: 'MongoDB',
    image: skillIcons.mongodb,
    link: 'https://www.mongodb.com',
  },
  {
    name: 'Prisma',
    image: skillIcons.prisma,
    link: 'https://www.prisma.io',
  },
  {
    name: 'SQLite',
    image: skillIcons.sqlite,
    link: 'https://www.sqlite.org',
  },
  {
    name: 'GraphQL',
    image: skillIcons.graphql,
    link: 'https://graphql.org',
  },
  {
    name: 'Docker',
    image: skillIcons.docker,
    link: 'https://www.docker.com',
  },
  {
    name: 'Kubernetes',
    image: skillIcons.kubernetes,
    link: 'https://kubernetes.io',
  },
  {
    name: 'Google Cloud',
    image: skillIcons.googleCloud,
    link: 'https://cloud.google.com',
  },
  {
    name: 'AWS',
    image: skillIcons.aws,
    link: 'https://aws.amazon.com',
  },
  {
    name: 'GitHub',
    image: skillIcons.github,
    link: 'https://github.com',
  },
  {
    name: 'GitLab',
    image: skillIcons.gitlab,
    link: 'https://about.gitlab.com',
  },
  {
    name: 'RabbitMQ',
    image: skillIcons.rabbitmq,
    link: 'https://www.rabbitmq.com',
  },
  {
    name: 'Pandas',
    image: skillIcons.pandas,
    link: 'https://pandas.pydata.org',
  },
  {
    name: 'TensorFlow',
    image: skillIcons.tensorflow,
    link: 'https://www.tensorflow.org',
  },
  {
    name: 'Llama3',
    image: skillIcons.meta,
    link: 'https://ai.meta.com/llama/',
  },
  {
    name: 'GmailAPI',
    image: skillIcons.gmail,
    link: 'https://developers.google.com/gmail/api',
  },
];
