import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authctx = useContext(AuthContext);
  return (
    <Layout>
      <>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          {!authctx.isLoggedIn && (
            <Route exact path="/auth" element={<AuthPage />}></Route>
          )}
          {authctx.isLoggedIn && (
            <Route exact path="/profile" element={<UserProfile />}></Route>
          )}
          {!authctx.isLoggedIn && (
            <Route exact path="/profile" element={<AuthPage />}></Route>
          )}
          <Route path="/*" element={<HomePage />}></Route>
        </Routes>
      </>
    </Layout>
  ); 
}

export default App;
