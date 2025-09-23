import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Timeline } from "./components/Timeline";
import { UI } from "./constants/UI_CONTENT";
import { useEffect } from "react";
import { Footer } from "./components/Footer";

function App() {
  const { navbar } = UI;
  
  useEffect(() => {
    window.scrollTo(0, 0);
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
