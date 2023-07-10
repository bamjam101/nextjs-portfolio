import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  StarsCanvas,
  Tech,
  Works,
} from "@/components";

export default function Home() {
  return (
    <main className="h-full z-0 relative bg-primary">
      <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </header>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <footer className="relative z-0 bg-primary">
        <Contact />
        <StarsCanvas />
      </footer>
    </main>
  );
}
