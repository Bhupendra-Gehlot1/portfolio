import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Timeline } from "./components/Timeline";
import { UI } from "./constants/UI_CONTENT";
import { useEffect } from "react";
import { Footer } from "./components/Footer";

function App() {
  const { navbar } = UI;
  
  useEffect(() => {
    // Ensure scroll to top happens after DOM is ready and smooth scrolling is temporarily disabled
    const scrollToTop = () => {
      // Temporarily disable smooth scrolling
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      // Re-enable smooth scrolling after a short delay
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 100);
    };

    // Use requestAnimationFrame to ensure this runs after initial render
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop);
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar template={navbar} />
      <main>
        <Home />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
