import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer id="footer" className="bg-white">
      <div className="tcl-container">
        <div className={styles["footer"]}>
          <div className="tcl-row">
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className={styles["footer-logo"]}>
                <Image
                  width={128}
                  height={28}
                  src="/images/logo.png"
                  alt="NuxtBlog Logo"
                />
              </div>
              <p>© 2020, All Rights Reserved.</p>
              <p>
                Created by{" "}
                <Link href="/" target="_blank" rel="noreferrer">
                  ZENDVN
                </Link>
              </p>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
              <div className={styles["footer-title"]}>
                <p>Categories</p>
              </div>
              <ul className={styles["footer-content__list"]}>
                <li>
                  <Link href="/">ReactJs</Link>
                </li>
                <li>
                  <Link href="/">Javascript</Link>
                </li>
                <li>
                  <Link href="/">Angular</Link>
                </li>
                <li>
                  <Link href="/">HTML, HTML5</Link>
                </li>
              </ul>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className={styles["footer-title"]}>
                <p>Liên hệ</p>
              </div>
              <ul className={styles["footer-content__list"]}>
                <li>
                  Số 01, Khối A1, Toà nhà Đạt Gia, 43 Đường Cây Keo, Tam Phú,
                  Thủ Đức, Hồ Chí Minh
                </li>
                <li> 0383 308 983</li>
              </ul>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
              <div className={styles["footer-title"]}>
                <p>Fanpage</p>
              </div>
              <div className={styles["footer-facebook"]}>
                <div
                  className="fb-page"
                  data-href="/"
                  data-tabs
                  data-width
                  data-height
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote cite="/" className="fb-xfbml-parse-ignore">
                    <Link href="/">Học Lập Trình Web Thông Qua Projects Thực Tế</Link>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
