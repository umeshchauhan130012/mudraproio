import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop"; 
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./usersAuth/login";
import KeepMeLogin from "./usersAuth/keep-me-login";
import AllTermsCondition from "./usersAuth/accept-terms-conditions";
import ForgotPassword from "./usersAuth/forgot-password";
import Signup from "./usersAuth/signup";
import PasswordRecovery from "./usersAuth/password-recovery";
import PassworReset from "./usersAuth/successfully-reset-password";
import RegisterSUccess from "./usersAuth/registration-successfully";
import Footer from "./components/footer";
import UserPageRoutes from "./dashboard/userPageRoutes";
import { Provider } from "react-redux";
import store from "./redux/store";
import OtpVerify from "./usersAuth/otp-verify";
import ContextState from "./context/ContextState";
import { PrivateRoute } from "./components/privateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Page404 from "./pages/page404";
import TearmsConditons from "./pages/terms-conditions";
import AuthenticationPage from "./usersAuth/authentication-page";
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Provider store={store}>
        <ContextState>
          <Suspense fallback={null}>
            <Router history={HashRouter}>
              <Header />
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/authentication-page" element={<AuthenticationPage />}></Route>
                <Route exact path="/keep-me-login" element={<KeepMeLogin />}></Route>
                <Route exact path="/terms-conditions" element={<TearmsConditons />}></Route>
                <Route exact path="/accept-terms-conditions" element={<AllTermsCondition />}></Route>
                <Route exact path="/sign-up" element={<Signup />}></Route>
                <Route exact path="/forgot-password" element={<ForgotPassword />}></Route>
                <Route exact path="/otp-verify" element={<OtpVerify />}></Route>
                <Route exact path="/password-recovery" element={<PasswordRecovery />}></Route>
                <Route exact path="/successfully-reset-password" element={<PassworReset />}></Route>
                <Route exact path="/registration-successfully" element={<RegisterSUccess />} ></Route>
                <Route exact path="/user/*" element={<PrivateRoute><UserPageRoutes /></PrivateRoute> }></Route>
                <Route path="/*" element={<Page404 />}></Route>
              </Routes>
              <Footer />
            </Router>
          </Suspense>
        </ContextState>
      </Provider>
    </div>
  );
}

export default App;
