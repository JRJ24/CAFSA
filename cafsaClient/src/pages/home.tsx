import CarrouselItem from "@/components/home/carrousel";
import Community from "@/components/home/community";
import Footer from "@/components/home/footer";
import Ministries from "@/components/home/ministries";
import Services from "@/components/home/services";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section id="carrousel" className="">
        <CarrouselItem />
      </section>
      <section id="community" className="">
        <Community /> 
      </section>
      <section id="services" className="relative overflow-hidden py-24">
        <Services />
      </section>
      <section id="ministries" className="">
        <Ministries />
      </section>

      <section id="footer" className="">
        <Footer />
      </section>
    </div>
  );
};

export default Home;