import "./App.css";
import Header from "./components/Shared/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Addmobile from "./components/Main/Addmobile/Addmobile";
import Allmobile from "./components/Main/Allmobile/Allmobile";
import Singleinfo from "./components/Main/Singleinfo/Singleinfo";
import Update from "./components/Main/Update/Update";
import Home from "./components/Home/Home/Home";
import Register from "./components/Auth/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Login from "./components/Auth/Login/Login";
import PrivateRoute from "./components/Auth/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Mynav from "./components/Shared/Mynav/Mynav";
import Footer from "./components/Shared/Footer/Footer";
import Explore from "./components/Main/Explore/Explore";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
              <Footer />
            </Route>
            <Route exact path="/register">
              <Header />
              <Register />
            </Route>
            <Route exact path="/explore">
              <Header />
              <Explore></Explore>
              <Footer />
            </Route>
            <Route exact path="/login">
              <Header />
              <Login />
            </Route>
            <PrivateRoute exact path="/allMobile">
              <Header></Header>
              <Allmobile></Allmobile>
              <Footer />
            </PrivateRoute>
            <PrivateRoute exact path="/mobile/:id">
              <Header></Header>
              <Singleinfo></Singleinfo>
              <Footer />
            </PrivateRoute>
            <Route path="/dashboard">
              <Mynav></Mynav>
              <Dashboard></Dashboard>
              <Footer />
            </Route>
            <Route exact path="/mobile/update/:id">
              <Header></Header>
              <Update></Update>
              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
