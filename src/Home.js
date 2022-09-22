import TopHeader from "./Header/Header";
import BodyMenu from "./BodyMenu/BodyMenu";
import ContactUs from "./ContactUs/ContactUs";
import { Outlet } from "react-router-dom";
import { useRef, useEffect } from "react";
const Home = () => {
  const bodyMenuChildRef = useRef(null);

  useEffect(() => {
    console.log(bodyMenuChildRef.current);
  }, []);

  return (
    <>
      <BodyMenu forwardRef={bodyMenuChildRef} />
      <ContactUs />
      <Outlet />
    </>
  );
};

export default Home;
