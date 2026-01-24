import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/Navbar";
import RightSidebar from "@/components/navigation/RightSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-1 items-start justify-between">
        <LeftSidebar />
        <section className="px-8 py-10">{children}</section>
        <RightSidebar />
      </div>
    </div>
  );
}
