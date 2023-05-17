import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../store";
// import { actAsyncGetMenu } from "../../store/menuSlice";
import styles from "./header.module.scss";
import HeaderLogo from "./HeaderLogo";
import HeaderMenus from "./HeaderMenus";
import HeaderSearch from "./HeaderSearch";

function Header() {
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(actAsyncGetMenu());
  // }, []);
  return (
    <header className={styles["header-box"]}>
      <div className="tcl-container">
        <div className={"tcl-row tcl-no-gutters " + styles["header"]}>
          <HeaderLogo />
          <HeaderSearch />
          <HeaderMenus />
        </div>
      </div>
    </header>
  );
}

export default Header;
