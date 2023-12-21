import "./App.css";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Chats from "./pages/QuickChats";
import Login from "./components/Login";
import QuickChats from "./pages/QuickChats";
import FAQ from "./pages/FAQ";
// import Chat from "./components/Chat";
import { UserProvider, useUserContextModel } from "./contexts/user";
import firebaseApp from "./firebase";
import firebase from "firebase/compat/app";
import {
  auth,
  db,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import "react-toastify/dist/ReactToastify.css";
import Health_Tips from "./pages/Health_Tips";

const App = () => {
  const healthTips = [
    {
      title: "Morning Movement:",
      description:
        "Start your day with 10-15 minutes of light movement like yoga, stretching, or brisk walking.",
      more: " Explore the benefits of regular morning exercise for boosting energy, improving mood, and enhancing cognitive function. Discuss different types of movement suitable for various fitness levels and preferences.",
    },
    {
      title: "Mindful Snacking",
      description:
        "Choose whole, unprocessed snacks rich in nutrients and fiber, such as fruits, vegetables, nuts, and yogurt.",
      more: " Discuss the importance of mindful eating, emphasizing mindful snacking for better digestion, avoiding overeating, and maintaining healthy blood sugar levels. Share snack ideas and planning strategies for busy schedules.",
    },
    {
      title: "Digital Detox",
      description:
        "Schedule intentional breaks from screens and technology throughout the day, focusing on mindful activities like nature walks, journaling, or face-to-face interactions.",
      more: "Explore the negative effects of screen overuse on sleep, stress, and mental health. Discuss strategies for digital detox, including setting device limits, creating screen-free zones, and utilizing alternative activities for relaxation and de-stressing.",
    },

    // Add more health tips as needed
  ];

  return (
    <>
      <Navbar />
      <Home />
      {/* <Login /> */}
      <About />
      {/* <Health_Tips /> */}
      <Health_Tips healthTips={healthTips} />
      <QuickChats />
      <FAQ />
      <Contact />
      <Footer />
      {/* <ToastContainer /> */}
    </>
  );
};

const AppWithUserContext = () => {
  const contextData = useUserContextModel();
  return (
    <UserProvider value={contextData}>
      <App />
    </UserProvider>
  );
};

// export default App;
export default AppWithUserContext;
