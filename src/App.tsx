import { Routes, Route } from "react-router-dom";
import Home from "./app/home/Home";
import Services from "./app/services/Services";
import Layout from "./app/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
};

export default App;
