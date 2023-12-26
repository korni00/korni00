import { Mail, TwitterIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
  return (
    <>
      <section className="w-full max-w-5xl animate-start-left">
        <div className="container mx-auto flex px-4 md:px-6 lg:text-left xl:max-w-6xl">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3">
              <h2 className="text-start text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let's Contact
              </h2>
              <p className="max-w-[700px] text-start text-card-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                I'm always open for collaborations and interesting projects.
                Let's get in touch on any of these platforms.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2 sm:flex-row md:flex-row lg:flex-row lg:justify-start xl:flex-row 2xl:flex-row">
              <Link
                className="inline-flex h-9 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="https://twitter.com/korni_es"
              >
                <TwitterIcon className="mr-2 h-4 w-4" />
                Twitter / X
              </Link>
              <a
                href="mailto:kornelussegg12@gmail.com"
                className="inline-flex h-9 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Gmail
              </a>
              <Link
                className="inline-flex h-9 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="https://github.com/korni00"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
