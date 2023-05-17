import axios from "axios";
import Api from "./api";
type LoginInput = {
  username: string,
  password: string
}
type UpdatePassword = {
  password: string,
  newPassword: string,
  confirmNewPassword: string
}
type UploadProfileInput = {
  description: string,
  mediaId: number
}
type RegisterInput = {
  email: string,
  username: string,
  password: string,
  nickname: string
}
const userService = {
  login({ username, password }: LoginInput) {
    return Api.call().post("jwt-auth/v1/token", {
      username,
      password,
    });
  },
  loginServerSide({ username, password }: LoginInput) {
    return axios.post("/api/login", { username, password })
  },
  updatePassword({ password, newPassword, confirmNewPassword }: UpdatePassword) {
    return Api.callWithToken().put("wp/v2/users/password", {
      password,
      new_password: newPassword,
      confirm_new_password: confirmNewPassword,
    });
  },
  uploadAvatar({ file }: { file: FormData }) {
    return Api.callWithToken().post("wp/v2/media", file);
  },
  uploadProfile({ description, mediaId }: UploadProfileInput) {
    return Api.callWithToken().put("wp/v2/users/me", {
      description,
      simple_local_avatar: {
        media_id: mediaId
      },
    });
  },
  register({ email, username, password, nickname }: RegisterInput) {
    return Api.call().post("wp/v2/users/register", {
      email,
      username,
      password,
      nickname,
    });
  },
  getMe({ token }: { token?: string }) {
    return Api.callWithToken(token).get("wp/v2/users/me", {});
  },
};
export default userService;
