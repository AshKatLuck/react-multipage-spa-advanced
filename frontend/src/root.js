import { Outlet } from "react-router-dom";
import MainNavigation from "./pages/MainNavigation";
import classes from "./root.module.css";
const RootLayout = () => {
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
