"use client";

import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { ContributionActivity } from "@/components/sections/Contributions";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Footer } from "@/components/sections/Footer";
import { About } from "@/components/sections/About";
import { useSections } from "@/hooks/useSections";
import { MoveLeft, MoveRight } from "lucide-react";

export default function HomePage() {
  const { activeSection, setActiveSection } = useSections();
  const sections = [
    {
      id: "projects",
      label: "Projects",
      component: (
        <div className="bxshadow min-h-[436px] w-full animate-text rounded-md bg-gradient-to-tr from-indigo-500 via-pink-500 to-blue-500">
          <Projects />
        </div>
      ),
    },
    {
      id: "skills",
      label: "Skills",
      component: (
        <div className="bxshadow flex min-h-[436px] min-w-full animate-text items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-pink-500 to-blue-500 pb-4 pt-4">
          <Skills />
        </div>
      ),
    },
    {
      id: "contributions",
      label: "Contributions",
      component: (
        <div className="bxshadow flex min-h-[436px] min-w-full animate-text items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-pink-500 to-blue-500 pb-4 pt-4">
          <ContributionActivity />
        </div>
      ),
    },
    {
      id: "contact",
      label: "Contact",
      component: (
        <div className="bxshadow flex min-h-[436px] w-full min-w-full animate-text items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-pink-500 to-blue-500 pb-4 pt-4">
          <Contact />
        </div>
      ),
    },
  ];

  const goToNextSection = () => {
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection,
    );
    const nextIndex = (currentIndex + 1) % sections.length;
    setActiveSection(sections[nextIndex]!.id);
  };

  const goToPreviousSection = () => {
    const currentIndex = sections.findIndex(
      (section) => section.id === activeSection,
    );
    const previousIndex =
      (currentIndex - 1 + sections.length) % sections.length;
    setActiveSection(sections[previousIndex]!.id);
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-7xl flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
      <nav className=" z-50 flex flex-col justify-between gap-2  bg-card px-4 sm:pt-[120px] md:pt-[120px] lg:pt-[120px] xl:pt-[120px] 2xl:pt-[120px] ">
        <div className="flex flex-col items-start justify-center gap-2">
          <About />
          <div className="flex max-w-full flex-row gap-[2.5px] overflow-auto sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col">
            {sections.map((section) => (
              <Button
                key={section.id}
                size="lg"
                className={`flex items-center justify-start gap-2 bg-background text-black hover:bg-card/50 dark:text-white ${
                  activeSection === section.id
                    ? " bg-card-foreground/50 text-white hover:bg-card-foreground/80 dark:bg-background/50 dark:hover:bg-background/80"
                    : " "
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <ThemeSwitch />
          <Footer />
        </div>
      </nav>
      <div className="z-0 flex w-full flex-col justify-center overflow-hidden bg-gradient-to-r from-card via-transparent to-transparent px-4 sm:min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen 2xl:min-h-screen">
        {sections.map(
          (section) =>
            activeSection === section.id && (
              <div
                key={section.id}
                className="relative flex min-w-full flex-col gap-2 bg-card"
              >
                <div className="absolute bottom-0 right-0 z-[9999] mb-2 mr-2 flex gap-2 rounded-md bg-card/80">
                  <MoveLeft
                    className="h-8 w-8 cursor-pointer rounded px-2 py-1 transition-colors  hover:bg-card-foreground hover:text-card"
                    onClick={goToPreviousSection}
                  />
                  <MoveRight
                    className="h-8 w-8 cursor-pointer rounded px-2 py-1 transition-colors  hover:bg-card-foreground hover:text-card"
                    onClick={goToNextSection}
                  />
                </div>
                {section.component}
              </div>
            ),
        )}
      </div>
    </div>
  );
}
