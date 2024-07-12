export enum SelectedPage {
  Home = 'home',
  Projects = 'projects',
  Contact = 'contact',
  Footer = 'footer',
}

export interface ProjectType {
  name: string;
  description: string;
  image: string;
  codeURL: string;
  demoURL: string;
}
