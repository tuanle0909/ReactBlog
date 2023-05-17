import React from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import Link from "next/link";
import styles from "./login.module.scss";
import { useRouter } from "next/router";
import { ERROR_MESSAGE } from "../../constants";
type Props = {};

export default function LoginForm({}: Props) {
  const router = useRouter();
  const handleSubmitForm = async (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();
    e.target.submit();
  };
  const errorLogin = router.query?.error as string;
  return (
    <div className="tcl-col-12 tcl-col-sm-6 block-center">
      <h1 className={styles["form-title"] + " text-center"}>Đăng nhập</h1>
      <div className={styles["form-login-register"]}>
        <p style={{ color: "#ee2c5a", fontSize: 14 }}>{errorLogin && ERROR_MESSAGE[errorLogin]}</p>
        <form autoComplete="off" action="/api/login" method="POST" onSubmit={handleSubmitForm}>
          <Input name="username" type="text" label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." />
          <Input name="password" type="password" label="Mật khẩu" placeholder="Nhập mật khẩu của bạn ..." />

          <div className="d-flex tcl-jc-between tcl-ais-center">
            <Button theme="primary" size="large">
              Đăng nhập
            </Button>
            <Link href="/register">Đăng ký</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
