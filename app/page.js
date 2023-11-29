import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Header -> Title, Sign up & Sign in btn for sm-screen and above */}
        <Navbar />
        {/* Header div ends */}
        {/* Hero section starts */}
        <Hero />
        {/* Footer starts here */}
        <Footer />
      </div>
    </>
  );
}
