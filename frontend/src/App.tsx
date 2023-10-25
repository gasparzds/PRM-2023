import { Routes, Route } from "react-router-dom";
import TopicPage from "./pages/Topic";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import { useAuth } from "./hook/useAuth";

function App() {

  const {user} = useAuth();

  return (
    <div id="App">

      {user ? (
        <Routes>
          <Route path="/" element ={<TopicPage/>}/>
        </Routes>
      ): (
        <Route>
          <Route path="*" element={ <SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      )}

    </div>
  )
}

export default App;