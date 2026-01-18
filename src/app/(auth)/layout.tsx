import Image from "next/image";
import SocialAuthForm from "../components/form/SocialAuthForm";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-auth-dark dark:bg-auth-light bg-center bg-cover bg-no-repeat px-4 py-10">
      <section className="bg-slate-900 p-7 rounded-md space-y-4 min-w-full md:min-w-sm">
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold text-white">Join DevFlow</h1>
            <p className="text-gray-400 text-sm md:text-base">
              To get your questions answered
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            alt="DevFlow Logo"
            width={34}
            height={34}
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
}
