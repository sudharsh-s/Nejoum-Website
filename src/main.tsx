import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import App from "./App";
import "./index.css";
import "./i18n";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
  lerp: 0.06,        // smoother
  duration: 1.4,     // slower easing
  wheelMultiplier: 1,
});

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

createRoot(document.getElementById("root")!).render(
  <SmoothScroll>
    <App />
  </SmoothScroll>
);