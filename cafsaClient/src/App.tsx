import "./App.css";
import { RouterProvider } from "react-router";
import router from "@/router";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./context/themeProvider";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
