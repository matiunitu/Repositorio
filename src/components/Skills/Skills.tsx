import GitIcon from "../../assets/skills/git.svg?react";
import JavaScriptIcon from "../../assets/skills/javascript.svg?react";
import NextJsIcon from "../../assets/skills/nextjs.svg?react";
import ReactIcon from "../../assets/skills/react.svg?react";
import TypeScriptIcon from "../../assets/skills/typescript.svg?react";
import PythonIcon from "../../assets/skills/Python.svg?react";
import NodeIcon from "../../assets/skills/nodejs.svg?react";
import ExpressIcon from "../../assets/skills/express.svg?react";
import ApiIcon from "../../assets/skills/api.svg?react";
import FastApiIcon from "../../assets/skills/fastapi.svg?react";
import PrismaIcon from "../../assets/skills/prisma.svg?react";
import MongodbIcon from "../../assets/skills/mongodb.svg?react";
import PostgresqlIcon from "../../assets/skills/postgresql.svg?react";
import FirebaseIcon from "../../assets/skills/firebase.svg?react";
import RedisIcon from "../../assets/skills/redis.svg?react";
import AwsIcon from "../../assets/skills/aws.svg?react";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      className="bg-primary-white px-4 py-10 lg:pb-25 sm:px-6 md:px-20 lg:px-28 2xl:px-36"
      id="skills"
    >
      <h2 className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">My</span>
        <span className="font-extrabold">Skills</span>
      </h2>
      <ul className="grid grid-cols-2 justify-items-center gap-5 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-12 xl:grid-cols-5">
        <SkillCard title="JavaScript">
          <JavaScriptIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="TypeScript">
          <TypeScriptIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Python">
          <PythonIcon className="group-hover:fill-primary-white h-12 w-12" />
        </SkillCard>
        <SkillCard title="Node.js">
          <NodeIcon className="group-hover:fill-primary-white h-12 w-12" />
        </SkillCard>
        <SkillCard title="Express.js">
          <ExpressIcon className="group-hover:fill-primary-white h-12 w-12" />
        </SkillCard>
        <SkillCard title="APIs">
          <ApiIcon className="group-hover:fill-primary-white h-12 w-12" />
        </SkillCard>
        <SkillCard title="FastAPI">
          <FastApiIcon className="group-hover:fill-primary-white h-12 w-12 text-primary-black group-hover:text-primary-white" />
        </SkillCard>
        <SkillCard title="Prisma">
          <PrismaIcon className="group-hover:fill-primary-white h-12 w-12" />
        </SkillCard>
        <SkillCard title="MongoDB">
          <MongodbIcon className="group-hover:fill-primary-white h-12 w-12" />
        </SkillCard>
        <SkillCard title="PostgreSQL">
          <PostgresqlIcon className="group-hover:fill-primary-white h-12 w-12" />
        </SkillCard>
        <SkillCard title="SQL Server">
          <div className="text-4xl font-bold group-hover:text-primary-white">SQL</div>
        </SkillCard>
        <SkillCard title="FireBase">
          <FirebaseIcon className="group-hover:fill-primary-white h-12 w-12" />
        </SkillCard>
        <SkillCard title="SupaBase">
          <div className="text-4xl font-bold group-hover:text-primary-white">S</div>
        </SkillCard>
        <SkillCard title="Redis">
          <RedisIcon className="group-hover:fill-primary-white h-12 w-12" />
        </SkillCard>
        <SkillCard title="AWS">
          <AwsIcon className="group-hover:fill-primary-white h-12 w-12" />
        </SkillCard>
        <SkillCard title="JWT">
          <div className="text-4xl font-bold group-hover:text-primary-white">JWT</div>
        </SkillCard>
        <SkillCard title="OAuth2">
          <div className="text-4xl font-bold group-hover:text-primary-white">Auth</div>
        </SkillCard>
        <SkillCard title="React">
          <ReactIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Next JS">
          <NextJsIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="GIT">
          <GitIcon className="group-hover:fill-primary-white" />
        </SkillCard>
      </ul>
    </section>
  );
}
