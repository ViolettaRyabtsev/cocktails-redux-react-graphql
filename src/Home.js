import TopHeader from "./Header/Header";
import BodyMenu from "./BodyMenu/BodyMenu";
import ContactUs from "./ContactUs/ContactUs";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <BodyMenu />
      <ContactUs />
      <Outlet />
    </>
  );
};

export default Home;
