import { RiRecordCircleLine } from "react-icons/ri";

const items = [
  "Open to New Opportunities",
  "MERN Stack Developer",
  "Next · React · Node.js · MongoDB · Express",
  "Building Scalable Web Applications",
  "Available for Freelance Projects",
];

export function AnnouncementBar() {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="w-full bg-black dark:bg-white py-3 overflow-hidden">
      <div className="flex animate-marquee-left whitespace-nowrap">
        {repeated.map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-white dark:text-black text-sm font-medium mx-6"
          >
            <RiRecordCircleLine className="shrink-0 w-3.5 h-3.5 opacity-70" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
