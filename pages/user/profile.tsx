import ProfileForm from "../../components/ProfileForm";
import { NextSeo } from "next-seo";
type Props = {};

export default function ProfilePage({}: Props) {
  return (
    <div className="tcl-container section">
      <NextSeo title="Thông tin cá nhân"></NextSeo>
      <ProfileForm></ProfileForm>
    </div>
  );
}
