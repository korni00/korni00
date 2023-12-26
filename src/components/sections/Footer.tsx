import React from "react";

export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();
  const currentHour = date.getHours();
  const currentMinutes = date.getMinutes();

  return (
    <footer className="mx-auto flex h-16 max-w-5xl items-center justify-start px-4 lg:px-6">
      <span className="text-xs text-gray-500">
        © {currentDay}/{currentMonth}/{currentYear} | {currentHour}:
        {currentMinutes}
      </span>
    </footer>
  );
};
