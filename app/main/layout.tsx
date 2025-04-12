import { Toaster } from "react-hot-toast";
import NavBar from "../conponents/NavBar";
import Footer from "../conponents/footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
              <NavBar />
        <Toaster />
        {children}
        <Footer />

    </section>
  );
}