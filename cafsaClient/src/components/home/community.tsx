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
  // Solo necesitamos duplicarlo UNA vez para el truco del 50%
  const infiniteMembers = [...community, ...community];

  return (
    <div className="py-8 md:py-12 overflow-hidden bg-background">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 px-4 md:px-8 text-center md:text-left">
        Nuestra Comunidad
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Degradados laterales para suavizar la entrada/salida */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />{" "}
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />{" "}
        {/* CONTENEDOR DE LA ANIMACIÓN */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {" "}
          {infiniteMembers.map((member, index) => (
            <div key={index} className="px-2 md:px-3">
              {" "}
              {/* Padding para el espacio entre cards */}
              <Card className="w-64 md:w-75 shrink-0 group overflow-hidden border-none bg-card/50 backdrop-blur-sm shadow-lg">
                {" "}
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-4 md:p-5 space-y-2">
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg md:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors truncate">
                        {member.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="font-medium text-xs md:text-sm"
                      >
                        {member.ministerialPosition}
                      </Badge>
                    </div>
                    <div className="h-1 w-8 bg-primary rounded-full transform origin-left group-hover:w-full transition-all duration-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
