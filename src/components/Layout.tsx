import Header from "./Header";
import Footer from "./Footer";
import PromoBanner from "./PromoBanner";
import EnrollmentButton from "./EnrollmentButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <EnrollmentButton />
    </div>
  );
};

export default Layout;