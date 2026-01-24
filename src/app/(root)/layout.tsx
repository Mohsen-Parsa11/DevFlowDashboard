import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-1">
        <LeftSidebar />
        <section className="px-8 py-10">{children}</section>
      </div>
    </div>
  );
}
