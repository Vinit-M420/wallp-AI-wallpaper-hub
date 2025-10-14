import Navbar from "@/components/navbar";
import "./globals.css";
import  Hero  from "@/components/hero";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows items-center 
        justify-items-center min-h-screen ">
      <Navbar />
      {/* <Hero /> */}
    </div>
  );
}
