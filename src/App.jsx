import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginCompanies from "./pages/Companies/LoginCompanies/LoginCompanies";
import SignupCompanies from "./pages/Companies/SignupCompanies/SignupCompanies";
import ForgetPassCompanies from './pages/Companies/ForgetPasswordCompanies/ForgetPassCompanies';
import UpdatePassCompanies from './pages/Companies/UpdatePasswordCompanies/UpdatePassCompanies';
import ForgetPassUser from "./pages/User/ForgetPasswordUser/ForgetPassUser";
import LoginUser from "./pages/User/LoginUser/LoginUser";
import SignupUser from "./pages/User/SignupUser/SignupUser";
import UpdatePassUser from "./pages/User/UpdatePasswordUser/UpdatePassUser";
import "@mantine/core/styles.css";
import Header from './pages/Home/components/Header/Header';
import { Footer } from './pages/Home/components/Footer/Footer';
import { errorPage } from './pages/ErrorPage/errorPage';

function App() {
  return (
    <>
      <Header />

      <Routes>
      
        
        <Route path="/" Component={Home} />
        <Route path="/jobs" Component={UpdatePassUser} />
        <Route path="/internships" Component={UpdatePassUser} />

        <Route  path="*" Component={errorPage} />


        <Route path="/SignupCompanies" Component={SignupCompanies} />
        <Route path="/LoginCompanies" Component={LoginCompanies} />
        <Route path="/ForgetPassCompanies" Component={ForgetPassCompanies} />
        <Route path="/UpdatePasswordCompanies" Component={UpdatePassCompanies} />

        <Route path="/SignupUser" Component={SignupUser} />
        <Route path="/LoginUser" Component={LoginUser} />
        <Route path="/ForgetPasswordUser" Component={ForgetPassUser} />
        <Route path="/UpdatePasswordUser" Component={UpdatePassUser} />
        
         

      </Routes>
      <Footer />

    </>
  );
}

export default App;
