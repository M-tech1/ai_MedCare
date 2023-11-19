import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chat from "./components/Chat";

const App = () => {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Contact />
      <Chat />
      <Footer />
    </>
  );
};

export default App;
