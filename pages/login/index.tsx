import LoginForm from "../../components/LoginForm";
import { NextSeo } from "next-seo";

function LoginPage() {
  return (
    <main>
      <NextSeo title="Đăng nhập" description="Đăng nhập vào ReactBlog để xem tin tức mới nhất. Tham gia cuộc trò chuyện, theo dõi các tài khoản, xem Dòng thời gian chính của bạn và cập nhật các bài viết từ những người bạn biết."></NextSeo>
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <LoginForm></LoginForm>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default LoginPage;
