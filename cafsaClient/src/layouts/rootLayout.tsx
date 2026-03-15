import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
// import { AppSidebar } from "@/components/sideBar";
import NavBar from "@/components/navBar";
// import { SidebarProvider } from "@/components/ui/sidebar";

const RootLayout = () => {
  const location = useLocation();

  return (
      <div className="min-h-screen w-full bg-background flex">
        <div className="flex flex-1 flex-col overflow-hidden">
          <NavBar />
          <main className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Outlet />{" "}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
  );
};

export default RootLayout;