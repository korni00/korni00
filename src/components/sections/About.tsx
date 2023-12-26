import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface UserData {
  avatar_url: string;
  login: string;
  created_at: string;
}

export const About = () => {
  const githubApiUrl = `https://api.github.com/users/korni00`;

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserData>({
    avatar_url: "",
    login: "",
    created_at: "",
  });

  useEffect(() => {
    fetch(githubApiUrl)
      .then((response) => response.json())
      .then((data: UserData) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching GitHub user data:", error),
      );
  }, []);

  return (
    <section id="about">
      <div className="relative rounded pt-6 sm:py-8 md:py-8 lg:py-8 xl:py-8 2xl:py-8">
        {!loading ? (
          <div className="z-50 mx-auto max-w-5xl space-y-2  ">
            <div className="flex flex-col items-center">
              <Avatar
                style={{
                  boxShadow: "white 0px 0px 8px",
                }}
                className={`h-24 w-24 animate-start-avatar border-2 border-card-foreground transition-all`}
              >
                <AvatarImage src={userData.avatar_url} />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start justify-end">
                <Link
                  href={`https://github.com/${userData.login}`}
                  className="animate-light-text bg-clip-text text-5xl font-bold tracking-tighter text-card-foreground  transition-all hover:text-card-foreground/80"
                >
                  {userData.login}
                </Link>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="cursor-default">
                      <p
                        style={{
                          textShadow: "white 0px 0px 2px",
                        }}
                        className={`flex items-end gap-1 text-xs text-card-foreground hover:text-card-foreground/80 `}
                      >
                        {new Date(userData.created_at).toLocaleDateString()}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Joined in github</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="flex items-center ">
              <Skeleton className="h-24 w-24 rounded-full bg-card-foreground/80" />
            </div>
            <Skeleton className=" mt-1 h-[40px] w-[160px] rounded-none bg-card-foreground/80" />
            <div className="w-full justify-start">
              <Skeleton className=" ml-[7px] mt-1 h-[14px] w-[60px] rounded-none bg-card-foreground/80" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
