import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Skills from "./components/Skills";

function App() {
 return (
   <ChakraProvider>
     <AlertProvider>
       <main>
         <Header />
         <LandingSection />
         <ProjectsSection />
         <Skills />
         <ContactMeSection />
         <Footer />
         <Alert />
       </main>
     </AlertProvider>
   </ChakraProvider>
 );
}

export default App;