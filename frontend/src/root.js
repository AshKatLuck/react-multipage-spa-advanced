import { Outlet } from "react-router-dom";
import MainNavigation from "./pages/MainNavigation";
import classes from "./root.module.css";
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
