import { Box, LayoutDashboard, Package } from "lucide-react";
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

const menuItems = [
  {
    _id: "1",
    icon: LayoutDashboard,
    label: "Jóvenes",
    href: "/PalletOrSuitcases",
  },
  { _id: "2", icon: Package, label: "Domingos", href: "/administration" },
];

const ministerios = [
  {
    _id: "1",
    icon: LayoutDashboard,
    label: "Adoración",
    href: "/adoration",
  },
  { _id: "2", icon: Package, label: "Sonido y proyección", href: "/soundProyection" },
  { _id: "3", icon: Package, label: "Multimedia", href: "/multimedia" },
  { _id: "4", icon: Package, label: "Evangelización", href: "/evangelization" },
];

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-8">
        {/* LOGO - Alineado a la izquierda */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-lg mr-6 shrink-0"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded bg-blue-600 text-white shadow-sm">
            <Box className="w-5 h-5" />
          </div>
          <span className="tracking-tight">CAFSA</span>
        </Link>

        {/* NAVEGACIÓN - Crece para empujar otros elementos o se mantiene a la izquierda */}
        <NavigationMenu className="ml-2">
          <NavigationMenuList className="gap-1">

            {/* SERVICIOS - Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-62.5 gap-2 p-4 md:w-75">
                  {menuItems.map((item) => (
                    <li key={item._id}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className="flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <item.icon className="h-4 w-4 text-blue-500" />
                          <div>
                            <div className="text-sm font-medium leading-none">
                              {item.label}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Ministerios
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-62.5 gap-2 p-4 md:w-75">
                  {ministerios.map((item) => (
                    <li key={item._id}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className="flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <item.icon className="h-4 w-4 text-blue-500" />
                          <div>
                            <div className="text-sm font-medium leading-none">
                              {item.label}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/eventos">Eventos</Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Espacio para elementos a la derecha (opcional, como un botón de perfil) */}
        <div className="ml-auto flex items-center gap-4">
          {/* Aquí podrías poner un botón de Logout o Perfil */}
          <h1>Logout</h1>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
