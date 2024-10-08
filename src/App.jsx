import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
   <div className="bg-[#242424] min-h-screen">
     <Router>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
     </Router>
   </div>
  );
}

export default App;
