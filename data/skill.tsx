import {
  APIIcon,
  CSSIcon,
  DjangoIcon,
  DockerIcon,
  ExpressIcon,
  GitHubIcon,
  HTMLIcon,
  JavaScriptIcon,
  LaravelIcon,
  MongoDBIcon,
  MySQLIcon,
  NextJsIcon,
  NodeJSIcon,
  PostgresqlIcon,
  ReactJSIcon,
  RedisIcon,
  SpringBootIcon,
  SwaggerIcon,
  TypeScriptIcon,
  VagrantIcon,
} from "@/app/components/atoms/Icon";
import { SkillProps } from "@/types/skill";

export const languageSkills = [
  { name: "Python", percentage: 70 },
  { name: "Java", percentage: 50 },
];

export const frontSkill: SkillProps[] = [
  { name: "HTML", image: <HTMLIcon />, alt: "HTML" },
  { name: "CSS", image: <CSSIcon />, alt: "CSS" },
  { name: "JavaScript", image: <JavaScriptIcon />, alt: "JavaScript" },
  { name: "ReactJS", image: <ReactJSIcon />, alt: "ReactJS" },
  { name: "NextJS", image: <NextJsIcon />, alt: "NextJS" },
  { name: "TypeScript", image: <TypeScriptIcon />, alt: "TypeScript" },
];

export const backSkill: SkillProps[] = [
  { name: "NodeJS", image: <NodeJSIcon />, alt: "NodeJS" },
  { name: "ExpressJS", image: <ExpressIcon />, alt: "ExpressJS" },
  { name: "Django", image: <DjangoIcon />, alt: "Django" },
  { name: "Spring Boot", image: <SpringBootIcon />, alt: "Spring Boot" },
  { name: "Laravel", image: <LaravelIcon />, alt: "Laravel" },
  { name: "TypeScript", image: <TypeScriptIcon />, alt: "TypeScript" },
];

export const databaseSkills: SkillProps[] = [
  { name: "MySQL", image: <MySQLIcon />, alt: "MySQL" },
  { name: "Postgresql", image: <PostgresqlIcon />, alt: "Postgresql" },
  { name: "Redis", image: <RedisIcon />, alt: "Redis" },
  { name: "MongoDB", image: <MongoDBIcon />, alt: "MongoDB" },
];

export const apiTools: SkillProps[] = [
  { name: "TSOA", image: <MySQLIcon />, alt: "TSOA" },
  { name: "Swagger", image: <SwaggerIcon />, alt: "Swagger" },
  { name: "API", image: <APIIcon />, alt: "API" },
];

export const devopsSkill: SkillProps[] = [
  { name: "GitHub", image: <GitHubIcon />, alt: "GitHub" },
  { name: "Vagrant", image: <VagrantIcon />, alt: "Vagrant" },
  { name: "Docker", image: <DockerIcon />, alt: "Docker" },
];