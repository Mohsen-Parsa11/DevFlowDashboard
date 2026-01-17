import { Button } from "@/components/ui/button";
import { auth, signOut } from "../../../auth";
import ROUTES from "@/constants/route";

export default async function HomePage() {
  const session = await auth();
  console.log("🚀 ~ HomePage ~ session:", session);
  return (
    <div>
      <h2>Hello, Welcome to the Next js world!</h2>
      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit" className="bg-white mt-8">
          Log Out
        </Button>
      </form>
    </div>
  );
}
