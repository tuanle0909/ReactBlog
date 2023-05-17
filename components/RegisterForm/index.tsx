import React from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import Link from "next/link";
import styles from "./login-form.module.scss";
import { useRouter } from "next/router";
import { ERROR_MESSAGE } from "../../constants";
type Props = {};

export default function RegisterForm({}: Props) {
  const router = useRouter();
  const handleSubmitForm = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();
    e.target.submit();
  };
  const errorRegister = router.query?.error as string;

  return (
    <div className="tcl-col-12 tcl-col-sm-6 block-center">
      <h1 className={`${styles["form-title"]} text-center`}>Đăng ký</h1>
      <div className={styles["form-login-register"]}>
        <p style={{ color: "#ee2c5a", fontSize: 14 }}>{errorRegister && ERROR_MESSAGE[errorRegister]}</p>
        <form autoComplete="off" action="/api/register" method="POST" onSubmit={handleSubmitForm}>
          <Input name="email" type="text" label="Email" placeholder="Nhập email ..." />
          <Input name="nickname" type="text" label="Nickname" placeholder="Nhập Nickname" />
          <Input name="username" type="text" label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." />
          <Input name="password" type="password" label="Mật khẩu" placeholder="Nhập mật khẩu của bạn ..." />

          <div className="d-flex tcl-jc-between tcl-ais-center">
            <Button theme="primary" size="large">
              Đăng ký
            </Button>
            <Link href="/login">Bạn đã có tài khoản?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
