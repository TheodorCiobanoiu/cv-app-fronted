import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Content from "./pages/content";
import AddRecommendation from "./pages/addRecommendation";
import AllRecommendation from "./pages/allRecommendations";
import AdminControl from "./pages/adminControl";
import StatusRecommendation from "./pages/statusRecommendations";
import AddAccount from "./pages/addAccount";
import DeleteAccount from "./pages/deleteAccount";
import Profile from "./pages/profile";
import Logout from "./pages/logout";
import Main from "./pages/main";
import AddQuestion from "./pages/addQuestion";
import AllUsers from "./pages/allUsers"
import YourRecommendations from "./pages/yourRecommendations";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route
          path="/completeRecommendation"
          element={<AddRecommendation />}
        ></Route>
        <Route
          path="/viewRecommendations"
          element={<AllRecommendation test="This is a test for props"/>}
        ></Route>
        <Route path="/admin" element={<AdminControl />}></Route>
        <Route
          path="/yourRecommendation"
          element={<YourRecommendations />}
        ></Route>
        <Route path="/addAccount" element={<AddAccount />}></Route>
        <Route path="/deleteAccount" element={<DeleteAccount />}></Route>
        <Route path="/myProfile" element={<Profile />}></Route>
        <Route path="/addQuestion" element={<AddQuestion />}></Route>
        <Route path="/allUsers" element={<AllUsers />}></Route>
        <Route path="/logout" element={<Logout />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
