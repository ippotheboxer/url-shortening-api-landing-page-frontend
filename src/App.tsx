import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import InputURL from "./components/URLsubmission/InputURL";
import Statistics from "./components/Statistics/Statistics";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer/Footer";

const App:React.FC = () => {
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 768);
      };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

  function updateMobileNavbar() {
    setMobileNavbar((prevState) => !prevState);
}

  return (
    <main>
      <Header mobileNavbar={mobileNavbar} updateMobileNavbar={updateMobileNavbar} isDesktop={isDesktop}/>
      <Hero mobileNavbar={mobileNavbar} isDesktop={isDesktop} />
      <div className='bg-gray/25 mt-20 pb-10'>
        <InputURL />
        <Statistics />
      </div>
      <BoostLinks />
      <Footer />
    </main>
  )
}

export default App;
