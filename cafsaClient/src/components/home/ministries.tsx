import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const ministries = [
  {
    name: "Ministerio de Adoración",
    description: "Líderes apasionados por guiar a la congregación en momentos de adoración profunda y significativa.",
    icon: "https://i.pinimg.com/736x/78/5c/a3/785ca39a2a95c19e66b01b3e0615d32c.jpg",
  },{
    name: "Ministerio de Multimedia",
    description: "Equipo creativo encargado de capturar y compartir los momentos más impactantes de nuestros servicios y eventos.",
    icon: "https://i.pinimg.com/1200x/a5/22/1e/a5221e19956a61eb38fda9c45657c3e6.jpg",
  },{
    name: "Ministerio de Sonido e Iluminación",
    description: "Líderes dedicados a inspirar y guiar a la próxima generación en su caminar con Dios.",
    icon: "https://i.pinimg.com/1200x/ba/4b/96/ba4b9667901c892bcbf5e959a17e465b.jpg",
  },
  {
    name: "Ministerio de Evangelismo",
    description: "Equipo apasionado por compartir el mensaje de esperanza y salvación a través de acciones concretas en nuestra comunidad.",
    icon: "https://i.pinimg.com/1200x/ba/4b/96/ba4b9667901c892bcbf5e959a17e465b.jpg",
  },
]

const Ministries = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {ministries.map((ministry, index) => (
        <Card 
          key={index} 
          className="group relative overflow-hidden border border-border/50 bg-card/40 backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
        >
          {/* Decoración de fondo al hacer hover */}
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/20" />

          <CardContent className="p-6 flex items-start gap-5">
            {/* Contenedor del Icono/Imagen */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-inner bg-secondary/30">
                <img
                  src={ministry.icon}
                  alt={ministry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Información */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {ministry.name}
                </h3>
                <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary" />
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground transition-colors">
                {ministry.description}
              </p>

              {/* Tag decorativo inferior */}
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary">
                  Explorar Ministerio
                </span>
              </div>
            </div>
          </CardContent>

          {/* Línea de progreso decorativa en la base */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-blue-500 transition-all duration-500 group-hover:w-full" />
        </Card>
      ))}
    </div>
  );
}

export default Ministries;