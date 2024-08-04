import "./App.css";
import {Alert, ChakraProvider} from "@chakra-ui/react";
import React from "react";
import {AlertProvider} from "./context/alertContext";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
      <ChakraProvider>
          <AlertProvider>
              <main>
                  <Header />
                  <LandingSection />
                  <ProjectsSection />
                  <ContactMeSection />
                  <Footer />
                  <Alert />
              </main>
          </AlertProvider>
      </ChakraProvider>
  );
}

export default App;
