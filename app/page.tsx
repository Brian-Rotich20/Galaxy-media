import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import Testimonials from "./components/sections/Testimonials";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Testimonials />
    </main>
  );
}
