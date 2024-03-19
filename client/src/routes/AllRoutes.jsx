import { Route, Routes } from "react-router-dom";
import Cart from "../Cart";
import LandingPage from "../pages/monu/pages/LandingPage";
import OrderSuccessfull from "../pages/monu/pages/OrderSuccessfull";
import PaymentForm from "../pages/monu/pages/PaymentForm";
import Coach from "../pages/nayan/pages/Coach";
import ProductPage from "../pages/nayan/pages/Product Page";
import SingleProductPage from "../pages/nayan/pages/SingleProductPage";
import UserDashboard from "../pages/nayan/pages/UserDashboard";
import Login from "../pages/Shrikrishna/pages/Login";
import SignUp from "../pages/Shrikrishna/pages/SignUp";
import Plans from "../pages/sudarshan/pages/Plans";
import SinglePlanPage from "../pages/sudarshan/pages/SinglePlanPage";
import AboutUS from "../pages/monu/pages/About";
import AdminDashbord from "../pages/sufiyan/pages/AdminDashbord";
import AddProduct from "../pages/sufiyan/pages/nestedPages/AddProduct";
import AddPlan from "../pages/sufiyan/pages/nestedPages/AddPlan";
import AllUsers from "../pages/sufiyan/pages/nestedPages/AllUsers";
import Products from "../pages/sufiyan/pages/nestedPages/Products";
import Dashborad from "../pages/sufiyan/pages/nestedPages/Dashborad";
import AdminPrivateAuth from "./AdminPrivateRoute";
import PrivateRoute from "./PrivateRoute";
import AdminPlans from "../pages/sufiyan/pages/nestedPages/AdminPlans";
import Contect from "../pages/nayan/pages/Contect";
import ContactList from "../pages/sufiyan/pages/nestedPages/ContactList";
import AddTrainer from "../pages/sufiyan/pages/nestedPages/AddTrainer";
import TrainerList from "../pages/sufiyan/pages/nestedPages/TrainerList";
import Editplan from "../pages/sufiyan/pages/nestedPages/Editplan";
import Editproduct from "../pages/sufiyan/pages/nestedPages/Editproduct";
import Editcoach from "../pages/sufiyan/pages/nestedPages/Editcoach";
import Adminlogin from "../pages/Shrikrishna/pages/Adminlogin";
import OrderList from "../pages/sufiyan/pages/nestedPages/OrderList";
import TrainerEnroll from "../pages/nayan/pages/TrainerEnroll";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/coach" element={<Coach />} />

        <Route path="/plans" element={<Plans />} />
        <Route path="/plans/:plan" element={<SinglePlanPage />} />

        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />

        <Route
          path="/checkout/payment"
          element={
            <PrivateRoute>
              <PaymentForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/OrderSuccessfull"
          element={
            <PrivateRoute>
              <OrderSuccessfull />
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />




        <Route path="/user-profile" element={<UserDashboard />} />

        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/trainer-enroll" element={<TrainerEnroll />} />

        {/*////////////////////////////////////////////////////*/}

        <Route
            exact
            path="/admin"
            element={
                <Adminlogin />
            }
          />
        <Route path="/admins" element={<AdminDashbord />} >

          <Route
            index
            element={
              <AdminPrivateAuth>
                <Dashborad />{" "}
              </AdminPrivateAuth>
            }
          />
          <Route
            exact
            path="dashboard"
            element={
              <AdminPrivateAuth>
                <Dashborad />{" "}
              </AdminPrivateAuth>
            }
          />

          <Route
            exact
            path="add-product"
            element={
              <AdminPrivateAuth>
                <AddProduct />{" "}
              </AdminPrivateAuth>
            }
          />
          <Route
            exact
            path="add-plan"
            element={
              <AdminPrivateAuth>
                <AddPlan />{" "}
              </AdminPrivateAuth>
            }
          />
          {/* edit */}
          <Route
            exact
            path="edit-plan/:id"
            element={
              <AdminPrivateAuth>
                <Editplan />{" "}
              </AdminPrivateAuth> 
            }
          />
          <Route
            exact
            path="edit-product/:id"
            element={
              <AdminPrivateAuth>
                <Editproduct />{" "}
              </AdminPrivateAuth> 
            }
          />
          <Route
            exact
            path="edit-trainer/:id"
            element={
              <AdminPrivateAuth>
                <Editcoach />{" "}
              </AdminPrivateAuth> 
            }
          />

          <Route
            exact
            path="all-users"
            element={
              <AdminPrivateAuth>
                <AllUsers />{" "}
              </AdminPrivateAuth>
            }
          />
          <Route
            exact
            path="products"
            element={
              <AdminPrivateAuth>
                <Products />{" "}
              </AdminPrivateAuth>
            }
          />
          <Route
            exact
            path="contact"
            element={
              <AdminPrivateAuth>
                <ContactList />{" "}
              </AdminPrivateAuth>
            }
          />
          <Route
            exact
            path="order"
            element={
              <AdminPrivateAuth>
                <OrderList />{" "}
              </AdminPrivateAuth>
            }
          />
          <Route
            exact
            path="trainer"
            element={
              <AdminPrivateAuth>
                <TrainerList />{" "}
              </AdminPrivateAuth>
            }
          />
          <Route
            exact
            path="plans"
            element={
              <AdminPrivateAuth>
                <AdminPlans />{" "}
              </AdminPrivateAuth>
            }
          />

        </Route>

      </Routes>
    </div>
  );
};

export default AllRoutes;
