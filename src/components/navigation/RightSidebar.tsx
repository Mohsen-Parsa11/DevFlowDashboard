import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hotQuestions = [
  { id: 1, title: "How to use Router dom?" },
  { id: 2, title: "What to use Redux?" },
  { id: 3, title: "How to use useState?" },
  { id: 4, title: "How to handle useEffect?" },
  { id: 5, title: "How to use Rest API?" },
  { id: 6, title: "How to use useContext?" },
];

const popularTags = [
  {
    id: 1,
    tagName: "REACT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    showCount: 100,
  },
  {
    id: 2,
    tagName: "JAVASCRIPT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    showCount: 200,
  },
  {
    id: 3,
    tagName: "NEXT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    showCount: 300,
  },
  {
    id: 4,
    tagName: "TYPESCRIPT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    showCount: 400,
  },
  {
    id: 5,
    tagName: "REACT-QUERY",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
    showCount: 500,
  },
];
export default function RightSidebar() {
  return (
    <div className="py-10  px-6 bg-slate-900 min-h-screen">
      <div>
        <h2 className="font-medium text-xl">Top Questions</h2>
        <Link href="#" className="mt-6 flex flex-col gap-4">
          {hotQuestions.map((q) => (
            <div className="flex items-center justify-between" key={q.id}>
              <p className="text-sm">{q.title}</p>
              <ChevronRight />
            </div>
          ))}
        </Link>
      </div>

      <div className=" mt-14">
        <h2 className="font-medium text-xl">Popular Tags</h2>
        {popularTags.map(({ id, icon, tagName, showCount }) => (
          <div key={id} className="flex items-center justify-between mt-6">
            <div className="px-1.5 py-1 flex items-center gap-1 text-sm bg-slate-800 rounded-md">
              <Image
                src={icon}
                alt="icon"
                width={24}
                height={24}
                className=""
              />
              <span className="">{tagName}</span>
            </div>
            <p className="font-medium">{showCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
