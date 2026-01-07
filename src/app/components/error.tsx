"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  reset?: () => void;
  error?: Error;
};

export default function ErrorComponent({ reset, error }: Props) {
  console.log("🚀 ~ ErrorComponent ~ error:", error);
  const router = useRouter();
  const sharedClassNames =
    "px-4 py-2 rounded-md transition duration-200 cursor-pointer";

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-medium">Ooops, something went wrong</h1>
        <div className="mt-4 flex gap-4">
          <button
            onClick={() => {
              if (reset) reset();
              else router.refresh();
            }}
            className={`${sharedClassNames} bg-primary-500 hover:bg-primary-400 text-white`}
          >
            Try again
          </button>
          <Link
            href="/"
            className={`${sharedClassNames} border border-secondary-100`}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
