import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UserInfoType } from '../helpers/formatApi';
import useGlobalState from '../state';

function useAuthenticated(userData?: UserInfoType) {

  const router = useRouter();
  const [user, setUser] = useGlobalState("user");
  const [isSetUserData, setIsSetUserData] = useState(false);

  useEffect(() => {
    setUser(userData as UserInfoType);
    setIsSetUserData(true);
  }, [])

  const isLogin = user?.id > 0;
  const pathname = router.pathname;
  const excludedLogin = ["/login", "/register"];
  const excludedLogout = ["/user/profile", "/user/password"];


  useEffect(() => {
    if (isSetUserData) {
      if (isLogin) {
        if (excludedLogin.indexOf(pathname) !== -1) {
          router.push("/");
        }
      }
      if (!isLogin) {
        if (excludedLogout.indexOf(pathname) !== -1) {
          router.push("/");
        }
      }
    }
  }, [user, router, isSetUserData])

}
export default useAuthenticated;
