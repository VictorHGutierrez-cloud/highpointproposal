import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3 } from "lucide-react";
import SlideLayout from "./SlideLayout";
import { slides } from "./slides";
import { cn } from "@/lib/utils";

const bgClasses = {
  dark: "bg-primary text-primary-foreground",
  neutral: "bg-secondary text-secondary-foreground",
  light: "bg-background text-foreground",
};

const SlidePresenter = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  const goTo = useCallback((i: number) => {
    setCurrent(Math.max(0, Math.min(i, slides.length - 1)));
    setShowGrid(false);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && showGrid) { setShowGrid(false); }
      if (e.key === "g" || e.key === "G") { setShowGrid((v) => !v); }
      if (e.key === "f" || e.key === "F" || e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, showGrid, toggleFullscreen]);

  const slide = slides[current];

  // Grid View
  if (showGrid) {
    return (
      <div className="min-h-screen bg-primary text-primary-foreground p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-light">Todos os slides</h2>
          <button onClick={() => setShowGrid(false)} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
            Fechar (G)
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={cn(
                "relative aspect-video overflow-hidden border-2 transition-all hover:scale-[1.02]",
                i === current ? "border-white/60" : "border-white/10 hover:border-white/30"
              )}
            >
              <div className={cn("absolute inset-0 overflow-hidden", bgClasses[s.bg])}>
                <SlideLayout>{s.content}</SlideLayout>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-1.5 text-left">
                <span className="text-xs opacity-80">{i + 1}. {s.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-primary">
      {/* Main slide area */}
      <div className="flex-1 flex min-h-0">
        {/* Thumbnail sidebar */}
        <div className="hidden lg:flex flex-col w-48 border-r border-white/10 overflow-y-auto bg-primary py-2 px-2 gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={cn(
                "relative aspect-video w-full overflow-hidden border transition-all shrink-0",
                i === current ? "border-white/50 ring-1 ring-white/20" : "border-white/10 hover:border-white/25 opacity-60 hover:opacity-100"
              )}
            >
              <div className={cn("absolute inset-0 overflow-hidden", bgClasses[s.bg])}>
                <SlideLayout>{s.content}</SlideLayout>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-1.5 py-0.5">
                <span className="text-[10px] text-white/80">{i + 1}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Slide canvas */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className={cn("absolute inset-0 overflow-hidden", bgClasses[slide.bg])}
            >
              <SlideLayout>{slide.content}</SlideLayout>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-12 border-t border-white/10 bg-primary flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button onClick={() => setShowGrid(true)} className="p-1.5 opacity-50 hover:opacity-100 transition-opacity text-white" title="Grid (G)">
            <Grid3X3 size={18} />
          </button>
          <span className="text-xs text-white/40 ml-2">
            {current + 1} / {slides.length}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button onClick={prev} disabled={current === 0} className="p-2 text-white/60 hover:text-white disabled:opacity-20 transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} disabled={current === slides.length - 1} className="p-2 text-white/60 hover:text-white disabled:opacity-20 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>

        <button onClick={toggleFullscreen} className="p-1.5 opacity-50 hover:opacity-100 transition-opacity text-white" title="Fullscreen (F)">
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>
      </div>
    </div>
  );
};

export default SlidePresenter;
