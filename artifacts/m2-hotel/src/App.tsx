import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/Home";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route
        path="/home"
        component={() => <Navigate replace to="/" />}
      />
      <Route path="/" component={Home} />
      <Route path="/blog/:slug" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Navigate({ to, replace }: any) {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation(to, replace ?? false);
  }, [to, replace, setLocation]);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <WhatsAppButton />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
