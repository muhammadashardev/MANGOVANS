import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="site-loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Home />
    </>
  );
}

export default App;
