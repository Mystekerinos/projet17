import Accueil from "./pages/Accueil";
// import ItemCity from "./pages/ItemCity";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      //for routing applicatio
      <Routes>
        <Route exact path="/" element={<Navigate to="/Accueil" />} />
        <Route exact path="/Accueil" element={<Accueil />} />
        <Route path="*" element={<Navigate to="/" />} />
        // pass input value from the search bar to another component
        {/* <Route exact path="/ItemCity/:enteredSearch" element={<ItemMovie/>} />   */}
      </Routes>
    </div>
  );
}

export default App;
