import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiAngular,
    SiPostgresql,
    SiGit,
    SiDocker
  } from 'react-icons/si';

  import {FaJava} from "react-icons/fa"
  
  import { IconType } from 'react-icons';
  
  export type SkillData = {
    name: string;
    Icon: IconType;
  };
  
  export const skills: SkillData[] = [
    { name: 'HMTL', Icon: SiHtml5 },
    { name: 'CSS', Icon: SiCss3 },
    { name: 'SCSS', Icon: SiSass },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'java', Icon: FaJava },
    { name: 'React', Icon: SiReact },
    { name: 'Angular', Icon: SiAngular },
    { name: 'SQL', Icon: SiPostgresql },
    { name: 'Git', Icon: SiGit },
    { name: 'Docker', Icon: SiDocker }
  ];
  