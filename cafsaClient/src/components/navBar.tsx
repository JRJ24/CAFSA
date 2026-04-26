import * as React from "react";
import { Box, LayoutDashboard, Moon, Package, Sun } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils"; // Utilidad estándar de shadcn

const menuItems = [
  { _id: "1", icon: LayoutDashboard, label: "Jóvenes", href: "/PalletOrSuitcases" },
  { _id: "2", icon: Package, label: "Domingos", href: "/administration" },
];

const ministerios = [
  { _id: "1", icon: LayoutDashboard, label: "Adoración", href: "/adoration" },
  { _id: "2", icon: Package, label: "Sonido y proyección", href: "/soundProyection" },
  { _id: "3", icon: Package, label: "Multimedia", href: "/multimedia" },
  { _id: "4", icon: Package, label: "Evangelización", href: "/evangelization" },
];

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Detectar el scroll para cambiar el estilo
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full flex justify-center p-0 transition-all duration-300">
      <header
        className={cn(
          "w-full transition-all duration-300 border-b border-transparent bg-background/0",
          isScrolled 
            ? "top-2 mt-2 max-w-[90%] md:max-w-[80%] rounded-full border border-border bg-background/80 backdrop-blur-md shadow-lg px-4" 
            : "max-w-full bg-background border-b px-8"
        )}
      >
        <div className={cn(
          "flex items-center mx-auto transition-all duration-300",
          isScrolled ? "h-12" : "h-16"
        )}>
          
          {/* IZQUIERDA: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg shrink-0 mr-4 hover:opacity-90 transition-opacity"
          >
            <div className={cn(
              "flex items-center justify-center rounded bg-blue-600 text-white shadow-sm transition-all",
              isScrolled ? "w-6 h-6" : "w-8 h-8"
            )}>
              <Box className={isScrolled ? "w-4 h-4" : "w-5 h-5"} />
            </div>
            <span className={cn(
                "tracking-tight hidden sm:inline-block transition-all",
                isScrolled ? "text-sm" : "text-base"
            )}>
                CAFSA
            </span>
          </Link>

          {/* CENTRO: Navegación */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-9 px-3 text-sm">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-80 gap-2 p-4 md:w-100 md:grid-cols-2">
                      {menuItems.map((item) => (
                        <ListItem
                          key={item._id}
                          title={item.label}
                          href={item.href}
                          icon={<item.icon className="h-4 w-4 text-blue-500" />}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent h-9 px-3 text-sm">
                    Ministerios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-80 gap-2 p-4 md:w-100 md:grid-cols-2">
                      {ministerios.map((item) => (
                        <ListItem
                          key={item._id}
                          title={item.label}
                          href={item.href}
                          icon={<item.icon className="h-4 w-4 text-blue-500" />}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden md:block">
                  <Link to="/eventos">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm")}>
                      Eventos
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* DERECHA: Acciones */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={cn("rounded-full transition-all", isScrolled ? "h-8 w-8" : "h-10 w-10")}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className={isScrolled ? "h-4 w-4" : "h-5 w-5"} />
              ) : (
                <Moon className={isScrolled ? "h-4 w-4" : "h-5 w-5"} />
              )}
              <span className="sr-only">Cambiar tema</span>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

const ListItem = ({ title, href, icon }: { title: string; href: string; icon: React.ReactNode }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        to={href}
        className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="flex items-center gap-2 text-sm font-medium">
          {icon}
          {title}
        </div>
      </Link>
    </NavigationMenuLink>
  </li>
);

export default NavBar;