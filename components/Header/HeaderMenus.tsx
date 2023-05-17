import Link from "next/link";
import styles from "./header.module.scss";
import { MenuType } from "../../helpers/formatApi";
import useGlobalState from "../../state";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function renderMultipleMenu(list: MenuType[]) {
  return (
    <ul className={styles["header-nav__lists"]}>
      {list.map((e) => {
        return (
          <li key={e.id}>
            <Link href={e.url}>{e.title}</Link>
            {e.child.length > 0 && renderMultipleMenu(e.child)}
          </li>
        );
      })}
    </ul>
  );
}

function HeaderMenus() {
  const router = useRouter();
  const [user, setUser] = useGlobalState("user");
  const [menu] = useGlobalState("menu");
  const handleLogout = () => {
    Cookies.set("token", "", { expires: 0 });
    setUser({
      id: 0,
      email: "",
      firstName: "",
      lastName: "",
      link: "",
      name: "",
      nickname: "",
      slug: "",
      avatarUrls: "",
      description: "",
      simpleLocalAvatar: {
        full: "",
        mediaId: 0,
      },
    });
  };
  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className={styles["header-nav"] + " tcl-jc-end"}>
        {renderMultipleMenu(menu)}
        <ul className={styles["header-nav__lists"]}>
          <li className={styles.user}>
            {!user?.id && (
              <Link href="/login">
                <i className={styles["icons"] + " ion-person"} /> Đăng nhập
              </Link>
            )}
            {user?.id > 0 && (
              <>
                <Link href="/">
                  <i className={styles["icons"] + " ion-person"} />
                  {user.name}
                </Link>
                <ul className={styles["header-nav__lists"]}>
                  <li>
                    <Link href="/user/profile">Thông tin</Link>
                  </li>
                  <li>
                    <Link href="/user/password">Thay đổi mật khẩu</Link>
                  </li>
                  <li>
                    <Link href="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
