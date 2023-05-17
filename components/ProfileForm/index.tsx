import React, { useEffect, useState } from "react";
import Button from "../shared/Button";
import ImageCustom from "../shared/ImageCustom";
import Input from "../shared/Input";
import useGlobalState from "../../state";
import userService from "../../service/user";
import { formatUserInfo } from "../../helpers/formatApi";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function ProfileForm({}: Props) {
  const [user, setUser] = useGlobalState("user");
  const initialForm = {
    file: "",
    desc: "",
  };
  const [preview, setPreview] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialForm);
  const userInfo = useGlobalState("user")[0];
  const setField = (field: string, value: any) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const updateProfile = async () => {
    if (!loading) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", form.file);
      const avatar = await userService.uploadAvatar({ file: formData });
      userService
        .uploadProfile({
          description: form.desc,
          mediaId: avatar?.data?.id,
        })
        .then(() => {
          setForm(initialForm);
          userService.getMe({}).then((res) => {
            setUser(formatUserInfo(res.data));
          });
          alert("Cap nhat thanh cong");
        })
        .catch(() => {
          alert("Cap nhat that bai");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl: any = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="tcl-row tcl-jc-center">
        <div className="article-item__author-image">
          <Link aria-label="John Doe" href="/" className="tcl-row tcl-jc-center">
            <ImageCustom src={userInfo.simpleLocalAvatar.full} height={100} width={100}></ImageCustom>
          </Link>
          <p className="text-center">{userInfo.description}</p>
        </div>
      </div>
      <Input
        type="file"
        label="Chọn avatar mới"
        placeholder="Nhập tên đăng nhập ..."
        autoComplete="off"
        onChange={(e: any) => {
          setField("file", e.target.files[0]);
          setSelectedFile(e.target.files[0]);
        }}
      />
      <Image src={preview || "/"} height={100} width={100} alt="Preview IMG"></Image>
      <Input
        value={form?.desc}
        type="text"
        label="Mô tả ngắn"
        placeholder="Nhập mật mô tả của bạn ..."
        onChange={(e: any) => {
          setField("desc", e.target.value);
        }}
      />
      <div className="d-flex tcl-jc-between tcl-ais-center">
        <Button loading={loading} theme="primary" size="large" onClick={updateProfile}>
          Cập nhật thông tin
        </Button>
      </div>
    </div>
  );
}
