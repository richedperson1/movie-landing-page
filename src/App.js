import "./App.css";
import Header from "./components/headers/headerName";
import Trendingshows from "./components/mainPage/trendingloading";
import FooterSection from "./components/footer/footerApp";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function MainApp() {
  const location = useLocation();
  console.log("The location is : ", location);
  return (
    <>
      <section>
        <Header />
        <Trendingshows />
        <FooterSection />
      </section>
    </>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/movies" element={<MainApp />} />
          <Route path="/webSeries" element={<MainApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
