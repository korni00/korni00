import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface ContributionEvent {
  id: string;
  type: string;
  created_at: string;
}

export const ContributionActivity = () => {
  const [contributions, setContributions] = useState<ContributionEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [skeletonHeights] = useState<number[]>(
    Array.from({ length: 6 }, () => Math.random() * 100),
  );

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/korni00/events?per_page=100",
          {
            method: "GET",
          },
        );

        const result = await response.json();
        setContributions(result);
      } catch (error) {
        console.error("Error fetching contribution data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  let contributionCounts: { [date: string]: number } = {};

  contributions.forEach((event) => {
    const date = new Date(event.created_at).toLocaleDateString();
    if (!contributionCounts[date]) {
      contributionCounts[date] = 1;
    } else {
      contributionCounts[date]++;
    }
  });

  contributionCounts = Object.entries(contributionCounts)
    .sort(
      ([dateA], [dateB]) =>
        new Date(dateB).getTime() - new Date(dateA).getTime(),
    )
    .slice(0, 6)
    .reduce((obj, [date, count]) => ({ ...obj, [date]: count }), {});

  const dates = Object.keys(contributionCounts);
  const counts = Object.values(contributionCounts);
  const maxCount = Math.max(...counts);

  return (
    <section className=" w-full animate-start-left" id="contribution-activity">
      <div className="flex w-full flex-col px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3rem]">
          Contribution Activity
        </h1>
        <p className=" mb-8 max-w-[700px] text-card-foreground/80 md:text-xl lg:text-base xl:text-xl ">
          Last 5 active days
        </p>
        <div className="flex gap-2">
          <div className="flex w-full flex-wrap gap-4">
            {loading ? (
              <Card className="flex w-full flex-wrap items-end justify-center p-2 py-6">
                {skeletonHeights.map((height, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-end gap-2"
                  >
                    <Skeleton
                      className="rounded-none bg-gray-300"
                      style={{
                        height: `${height}px`,
                        width: "20px",
                      }}
                    />
                    <Skeleton className="mb-1 mr-4 h-2 w-14 rounded-none bg-gray-300" />
                  </div>
                ))}
              </Card>
            ) : (
              <Card className="flex w-full flex-wrap items-end justify-center p-2 py-6">
                {dates.map((date, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-end gap-2"
                  >
                    <div
                      className="bg-purple-500"
                      style={{
                        height: `${(counts[index]! / maxCount) * 100}px`,
                        width: "20px",
                      }}
                    />
                    <div className="mr-4 text-[12px]">{date}</div>
                  </div>
                ))}
              </Card>
            )}
          </div>
          <Card className="ml-2 mt-16 w-full max-w-[465px] -rotate-6 p-6 font-mono ">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2 text-red-500">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <p className="text-sm">zsh</p>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-1 text-green-400">
                $ npm install <p className="text-yellow-500">next</p>
              </div>
              <p className="text-black dark:text-white">+ next@14.2.3</p>
              <p className="text-black dark:text-white">
                added 1 package, and audited 2 packages in 3s
              </p>
              <p className="text-green-400">$</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
