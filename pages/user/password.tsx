import React from "react";
import ChangePasswordForm from "../../components/ChangePasswordForm";
import { NextSeo } from "next-seo";

type Props = {};

export default function PasswordPage({}: Props) {
  return (
    <div className="tcl-container section">
      <NextSeo title="Thay đổi mật khẩu"></NextSeo>
      <ChangePasswordForm></ChangePasswordForm>
    </div>
  );
}
