import React, { useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import userService from "../../service/user";

type Props = {};

export default function ChangePasswordForm({}: Props) {
  const [loading, setLoading] = useState(false);
  const initialForm = {
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  const [form, setForm] = useState(initialForm);
  const setField = (field: string, value: any) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const updatePassword = () => {
    if (!loading) {
      const { password, newPassword, confirmNewPassword } = form;
      setLoading(true);
      userService
        .updatePassword({ password, newPassword, confirmNewPassword })
        .then(() => {
          setForm(initialForm);
          alert("Thay doi mat khau thanh cong.");
        })
        .catch((err) => {
          alert(err?.response?.data?.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <div className="bg-white p-4 rounded-lg">
      <Input
        value={form.password}
        type="password"
        label="Mật khẩu cũ"
        placeholder="Nhập mật khẩu của bạn ..."
        onChange={(e: any) => {
          setField("password", e.target.value);
        }}
      />
      <Input
        value={form.newPassword}
        type="password"
        label="Mật khẩu mới"
        placeholder="Nhập mật khẩu của bạn ..."
        onChange={(e: any) => {
          setField("newPassword", e.target.value);
        }}
      />
      <Input
        value={form.confirmNewPassword}
        type="password"
        label="Xác mật khẩu mới"
        placeholder="Nhập mật khẩu của bạn ..."
        onChange={(e: any) => {
          setField("confirmNewPassword", e.target.value);
        }}
      />

      <div className="d-flex tcl-jc-between tcl-ais-center">
        <Button loading={loading} theme="primary" size="large" onClick={updatePassword}>
          Thay đổi mật khẩu
        </Button>
      </div>
    </div>
  );
}
