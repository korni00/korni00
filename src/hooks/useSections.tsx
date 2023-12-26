import { useState } from "react";

export const useSections = () => {
  const [activeSection, setActiveSection] = useState("projects");

  return {
    activeSection,
    setActiveSection,
  };
};
