import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  language: string;
}

export const Projects = () => {
  const githubApiUrl = `https://api.github.com/users/korni00/repos`;

  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [creationDate, setCreationDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(githubApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching GitHub repositories:", error),
      );
    setCreationDate(formatDate("2023-10-09"));
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderSkeleton = () => {
    return Array.from(
      { length: projects.length > 0 ? projects.length : 4 },
      (_, index) => (
        <Card key={index} className="max-h-[134px] min-h-[134px] min-w-full">
          <CardHeader>
            <Skeleton className="mb-2 h-4 w-[300px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="mb-2 h-4 w-[450px]" />
            <Skeleton className="h-4 w-4/5" />
          </CardContent>
        </Card>
      ),
    );
  };

  return (
    <section
      className=" min-h-[436px] min-w-full max-w-5xl rounded-md bg-gradient-to-tl from-transparent to-indigo-500 py-5  "
      id="projects"
    >
      <div className="animate-start-bottom px-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          Projects
        </h1>
        <p className="mb-8 max-w-[700px] text-card-foreground/80 md:text-xl lg:text-base xl:text-xl ">
          Pinned from github
        </p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {loading
            ? renderSkeleton()
            : projects.map((project) => (
                <Link className=" p-0" key={project.id} href={project.html_url}>
                  <Card className="p-6">
                    <CardHeader className="p-0">
                      <h2 className="text-xl font-bold">{project.name}</h2>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start justify-end p-0">
                      <p className=" w-full overflow-hidden text-ellipsis whitespace-nowrap text-gray-500">
                        {project.description || "In progress..."}
                      </p>
                      <div className="flex w-full items-end justify-between">
                        <p className="mt-2 text-gray-400">
                          Created: {formatDate(project.created_at)}
                        </p>
                        <p>{project.language}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          <Link className=" p-0" href="https://www.agrogust.pl">
            <Card className="p-6">
              <CardHeader className="p-0">
                <h2 className="text-xl font-bold">Agrogust</h2>
              </CardHeader>
              <CardContent className="flex flex-col items-start justify-end p-0">
                <p className=" w-full overflow-hidden text-ellipsis whitespace-nowrap text-gray-500">
                  Showcase website for a construction company
                </p>
                <div className="flex w-full items-end justify-between">
                  <p className="mt-2 text-gray-400">Created: {creationDate}</p>

                  <p>Typescript + Next.js</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};
