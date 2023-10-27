import "./App.css";
import Header from "./components/headers/headerName";
import Trendingshows, {
  Movieshows,
  WebSeries,
} from "./components/mainPage/showloadingPage";
import FooterSection from "./components/footer/footerApp";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function TrendingApp() {
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

const MoviesShow = () => {
  return (
    <>
      <section>
        <Header />
        <Movieshows />
        <FooterSection />
      </section>
    </>
  );
};
const WebSerieShow = () => {
  return (
    <>
      <section>
        <Header />
        <WebSeries />
        <FooterSection />
      </section>
    </>
  );
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrendingApp />} />
          <Route path="/movies" element={<MoviesShow />} />
          <Route path="/webSeries" element={<WebSerieShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
