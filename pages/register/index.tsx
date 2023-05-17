import React from "react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import Link from "next/link";
import RegisterForm from "../../components/RegisterForm";
import { NextSeo } from "next-seo";

export default function RegisterPage() {
  //onClick={(e) => handleSubmitForm(e)} loading={loading}
  return (
    <main className="login">
      <NextSeo title="Đăng ký"></NextSeo>
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <RegisterForm></RegisterForm>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}
