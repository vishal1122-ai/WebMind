import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/useTheme";
import Portfolio from "@/components/Portfolio";
import LoadingScreen from "@/components/LoadingScreen";
import { useCursor } from "@/hooks/useCursor";
import { useScrollProgress } from "@/hooks/useScrollProgress";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
    </Switch>
  );
}

function App() {
  useCursor();
  useScrollProgress();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <LoadingScreen />
          <div className="custom-cursor" id="cursor"></div>
          <div className="scroll-progress" id="scrollProgress"></div>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
