import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Content from "./pages/content";
import AddRecommendation from "./pages/addRecommendation";
import AllRecommendation from "./pages/allRecommendations";
import AdminControl from "./pages/adminControl";
import StatusRecommendation from "./pages/statusRecommendations";
import AddAccount from "./pages/addAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route
          path="/completeRecommendation"
          element={<AddRecommendation />}
        ></Route>
        <Route
          path="/viewRecommendations"
          element={<AllRecommendation />}
        ></Route>
        <Route path="/admin" element={<AdminControl />}></Route>
        <Route
          path="/yourRecommendation"
          element={<StatusRecommendation />}
        ></Route>
        <Route path="/addAccount" element={<AddAccount />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
