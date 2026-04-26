import { Box, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router"; // O 'next/link' si usas Next.js
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border bg-background/50 backdrop-blur-xl">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* LADO IZQUIERDO: Branding y Social */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                <Box className="w-6 h-6" />
              </div>
              <span>CAFSA</span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              Edificando una comunidad de fe, esperanza y amor. Un lugar para crecer, servir y conectar con el propósito de Dios.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram />} href="#" />
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Youtube />} />
            </div>
          </div>

          {/* CENTRO/DERECHA: Enlaces rápidos */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Ministerios</h3>
                <ul className="mt-6 space-y-4">
                  <FooterLink label="Adoración" href="/adoration" />
                  <FooterLink label="Jóvenes" href="/youth" />
                  <FooterLink label="Multimedia" href="/multimedia" />
                  <FooterLink label="Niños" href="/kids" />
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Recursos</h3>
                <ul className="mt-6 space-y-4">
                  <FooterLink label="Eventos" href="/events" />
                  <FooterLink label="En vivo" href="/live" />
                  <FooterLink label="Donaciones" href="/giving" />
                </ul>
              </div>
            </div>

            {/* CONTACTO DIRECTO */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Contacto</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span>  C. José Francisco Castellano 53, Santo Domingo Este 11512<br /> República Dominicana</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <span>+1 (809) 000-0000</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <span>contacto@cafsa.org</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="mt-16 border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {currentYear} CAFSA Church. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacidad</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-componentes para limpieza de código
const FooterLink = ({ label, href }: { label: string; href: string }) => (
  <li>
    <Link to={href} className="text-sm leading-6 text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
      {label}
    </Link>
  </li>
);

const SocialIcon = ({ icon, href = "#" }: { icon: React.ReactNode; href?: string }) => (
  <a 
    href={href} 
    className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-110 shadow-sm"
  >
    {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
  </a>
);

export default Footer;