type ERROR_MESSAGE_TYPE = {
  [key: string]: string
}
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const ERROR_MESSAGE: ERROR_MESSAGE_TYPE = {
  rest_user_invalid_email: "Email không hợp lệ.",
  rest_user_invalid_username: "Username chỉ chứa A-Za-z0-9_.",
  rest_user_invalid_password: "Mật khẩu không hợp lệ.",
  existing_user_email: "Email đã tồn tại, vui lòng nhập email khác.",
  existing_user_login: "Username đã tồn tại, vui lòng nhập username khác.",
  "[jwt_auth] invalid_username": "Tài khoản hoặc mật khẩu không hợp lệ",
  "[jwt_auth] empty_username": "Vui lòng không bỏ trống username",
  "[jwt_auth] empty_password": "Vui lòng không bỏ trống password",
  "[jwt_auth] incorrect_password": "Password không đúng."

}