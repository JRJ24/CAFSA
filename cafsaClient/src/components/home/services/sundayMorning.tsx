import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

const SundayMorning = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="overflow-hidden border-none bg-card/50 backdrop-blur-md shadow-2xl">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            
            {/* LADO IZQUIERDO: Imagen con Badge */}
            <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80" 
                alt="Servicio del Domingo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent md:bg-linear-to-r" />
            </div>

            {/* LADO DERECHO: Contenido */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Servicio del Domingo <span className="text-primary text-lg block md:inline font-medium">por la mañana</span>
                </h2>
                <div className="h-1 w-12 bg-primary rounded-full" />
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Únete a nosotros para un tiempo profundo de adoración y enseñanza. 
                Un espacio diseñado para fortalecer nuestra comunidad y crecer juntos en la fe. 
                ¡Te esperamos con los brazos abiertos!
              </p>

              {/* Detalles Rápidos */}
              <div className="grid grid-cols-1 gap-4 py-2">
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="p-2 rounded-full bg-secondary/50">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <span>Todos los Domingos — 10:00 AM</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="p-2 rounded-full bg-secondary/50">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span>Sede Principal CAFSA</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1 md:flex-none bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all">
                  Confirmar asistencia
                </Button>
                <Button variant="outline" className="flex-1 md:flex-none border-primary/20 hover:bg-secondary">
                  Más información
                </Button>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SundayMorning;
