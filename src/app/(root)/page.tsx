import { Button } from "@/components/ui/button";
import { signOut } from "../../../auth";
import ROUTES from "@/constants/route";

export default async function HomePage() {
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
