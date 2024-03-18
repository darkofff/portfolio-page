import { GeneralProvider } from "./context/GeneralContext";
import Frame from "./components/Frame";

function App() {
  return (
    <GeneralProvider>
      <div className="relative h-screen overflow-hidden bg-zinc-900  text-zinc-300">
        <Frame />
      </div>
    </GeneralProvider>
  );
}

export default App;
