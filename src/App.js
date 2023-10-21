import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headers/headerName";
import MoviewCards from "./components/mainPage/movies";
function App() {
  return (
    <>
      <section>
        <Header />
        <MoviewCards />
      </section>
    </>
  );
}

export default App;
