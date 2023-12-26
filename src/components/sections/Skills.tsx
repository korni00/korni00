import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

type Skill = {
  name: string;
  level: number;
  color: string;
  link: string;
};

const skillsList: Skill[] = [
  {
    name: "HTML",
    level: 5,
    color: "bg-red-400",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    level: 5,
    color: "bg-blue-400",
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "Tailwind",
    level: 5,
    color: "bg-indigo-400",
    link: "https://tailwindcss.com",
  },
  {
    name: "Javascript",
    level: 4,
    color: "bg-yellow-400 text-black",
    link: "https://www.w3schools.com/js/",
  },
  {
    name: "React",
    level: 3,
    color: "bg-cyan-400 text-black",
    link: "https://legacy.reactjs.org/docs/getting-started.html",
  },
  {
    name: "Next.JS",
    level: 3,
    color: "bg-emerald-400 text-black",
    link: "https://nextjs.org/docs",
  },
  {
    name: "Typescript",
    level: 3,
    color: "bg-blue-400",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Ubuntu",
    level: 2,
    color: "bg-orange-400",
    link: "https://help.ubuntu.com",
  },
  {
    name: "Github",
    level: 3,
    color: "bg-slate-900",
    link: "https://github.com/korni00",
  },
];

export const Skills = () => {
  return (
    <section className="w-full animate-start-bottom " id="skills">
      <div className=" px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          Skills
        </h1>
        <p className="mb-[22px] max-w-[700px] text-card-foreground/80 md:text-xl lg:text-base xl:text-xl">
          Subjectively assessed
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
          {skillsList.map((skill, index) => (
            <Link href={skill.link}>
              <Card
                key={index}
                className="flex flex-col items-center p-4 transition-all hover:scale-100 lg:scale-105 xl:scale-105 2xl:scale-105"
              >
                <Badge
                  variant="outline"
                  className={`flex min-w-[80px] max-w-[80px] items-center justify-center px-2 py-1 ${skill.color}`}
                >
                  {skill.name}
                </Badge>
                <div className="ml-2 flex items-center">
                  {[...Array(5)].map((i: number) => (
                    <span
                      key={i}
                      style={{
                        textShadow:
                          i < skill.level ? "#FDE456 0px 0px 4px" : "",
                      }}
                      className={`text-${
                        i < skill.level ? "yellow-500" : "gray-500"
                      } `}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
