import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Navbar />
      <section className="relative w-full py-4">
        <Home />
      </section>
    </main>
  );
}

export default App;
