import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-full h-screen flex flex-col dark:bg-gray-950">
      <Header />
      <div className="flex-grow">
        <Home />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
