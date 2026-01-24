import { ChevronRight } from "lucide-react";
import Link from "next/link";

const hotQuestions = [
  { id: 1, title: "How to use Router dom?" },
  { id: 2, title: "What to use Redux?" },
  { id: 3, title: "How to use useState?" },
  { id: 4, title: "How to handle useEffect?" },
  { id: 5, title: "How to use Rest API?" },
  { id: 6, title: "How to use useContext?" },
];

export default function RightSidebar() {
  return (
    <div className="py-10  px-6 bg-slate-900 min-h-screen">
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
  );
}
