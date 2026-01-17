import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SocialAuthForm() {
  return (
    <div className="flex gap-2 items-center mt-10">
      <Button className="rounded flex-1 bg-slate-800 text-white cursor-pointer hover:bg-slate-800/80">
        <Image
          src="/icons/github.svg"
          alt="github icon"
          width={20}
          height={20}
          className="object-contain inverted-colors:bg-white"
        />
        <span>Sign in with GitHub</span>
      </Button>
      <Button className="rounded flex-1 bg-slate-800 text-white cursor-pointer hover:bg-slate-800/80">
        <Image
          src="/icons/google.svg"
          alt="github icon"
          width={20}
          height={20}
          className="object-contain inverted-colors:bg-white"
        />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
}
