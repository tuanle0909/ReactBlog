import Link from "next/link";
import styles from "./header.module.scss";

function HeaderLogo() {
  return (
    <div className="tcl-col-2">
      {/* Logo */}
      <div className={styles["header-logo"]}>
        <Link href="/">
          <img src="/images/logo.png" alt="Go to homepage" />
        </Link>
      </div>
    </div>
  );
}

export default HeaderLogo;
