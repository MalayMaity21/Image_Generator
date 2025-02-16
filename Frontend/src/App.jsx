import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <section className=" w-full">
        <Home />
      </section>
    </>
  );
}

export default App;
