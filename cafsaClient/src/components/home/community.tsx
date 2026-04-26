import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

const community = [
  {
    name: "Nizara Morine",
    ministerialPosition: "Pastora de CAFSA",
    imageUrl:
      "https://i.pinimg.com/736x/78/5c/a3/785ca39a2a95c19e66b01b3e0615d32c.jpg",
  },
  {
    name: "Ezequiel Lugo",
    ministerialPosition: "Pastor de CAFSA",
    imageUrl:
      "https://i.pinimg.com/1200x/a5/22/1e/a5221e19956a61eb38fda9c45657c3e6.jpg",
  },
  {
    name: "Shaquiel Lugo",
    ministerialPosition: "Pastor de Jovenes",
    imageUrl:
      "https://i.pinimg.com/1200x/ba/4b/96/ba4b9667901c892bcbf5e959a17e465b.jpg",
  },
  {
    name: "Diego Alexander",
    ministerialPosition: "Lider de Adoración",
    imageUrl:
      "https://i.pinimg.com/1200x/ba/4b/96/ba4b9667901c892bcbf5e959a17e465b.jpg",
  },
];

const Community = () => {
  const infiniteMembers = [...community, ...community];
  return (
    <div className="py-12 overflow-hidden bg-background">
      <h2 className="text-3xl font-bold mb-10 px-8">Nuestra Comunidad</h2>

      {/* 2. CONTENEDOR PRINCIPAL (La ventana por donde se ve pasar el engranaje) */}
      <div className="relative w-full">
        {/* Degradados laterales para que las tarjetas aparezcan/desaparezcan suavemente */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* 3. EL ENGRANAJE (Cinta que se mueve) */}
        {/* Añadimos la clase 'animate-marquee' que definimos en el CSS */}
        <div className="flex gap-6 animate-marquee">
          {infiniteMembers.map((member, index) => (
            /* 4. LA TARJETA (Le damos un ancho fijo para que no se deforme en la cinta) */
            <Card
              key={index}
              className="w-[300px] shrink-0 group overflow-hidden border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Contenedor de Imagen */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Información del Miembro */}
                <div className="p-5 space-y-2">
                  <div className="space-y-1">
                    <h3 className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors truncate">
                      {member.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground border-none font-medium"
                    >
                      {member.ministerialPosition}
                    </Badge>
                  </div>
                  {/* Línea decorativa */}
                  <div className="h-1 w-8 bg-primary rounded-full transform origin-left group-hover:w-full transition-all duration-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
