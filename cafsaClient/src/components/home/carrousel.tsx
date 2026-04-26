import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const images = [
  {
    url: "https://i.pinimg.com/736x/78/5c/a3/785ca39a2a95c19e66b01b3e0615d32c.jpg",
    alt: "mama",
  },
  {
    url: "https://i.pinimg.com/1200x/a5/22/1e/a5221e19956a61eb38fda9c45657c3e6.jpg",
    alt: "Adios",
  },
  {
    url: "https://i.pinimg.com/1200x/ba/4b/96/ba4b9667901c892bcbf5e959a17e465b.jpg",
    alt: "Hola",
  },
];

const CarrouselItem = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  
  return (
    <div className="relative group w-full max-w-10xl mx-auto">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full overflow-hidden rounded-3xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {images.map((img, index) => (
            <CarouselItem key={index} className="pl-1">
              <Card className="border-none shadow-none bg-muted">
                <CardContent className="relative flex aspect-video items-center justify-center p-0 overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Botones de navegación con visibilidad condicional al hacer hover */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-white/80 backdrop-blur-sm hover:bg-white border-none shadow-lg" />
          <CarouselNext className="static translate-y-0 h-10 w-10 bg-white/80 backdrop-blur-sm hover:bg-white border-none shadow-lg" />
        </div>

        {/* Indicadores (Dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                current === i ? "bg-white w-6" : "bg-white/50"
              )}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
};
export default CarrouselItem;
