import NavBar from "./components/NavBar/NavBar";
import LandingVid from "./components/LandingVid/LandingVid";
import Carousel from "./components/Carousel/Carousel";


export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <LandingVid />
        
        <h1 style={{ textAlign: "left", margin: "1rem 0" }}>Continue Watching</h1>
        <Carousel />
        <h1 style={{ textAlign: "left", margin: "1rem 0" }}>Subscriptions</h1>
        <Carousel />
        <h1 style={{ textAlign: "left", margin: "1rem 0" }}>New</h1>
        <Carousel />
      </main>
      
    </div>
     
  );
}
