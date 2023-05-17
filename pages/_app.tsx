import type { AppContext, AppProps } from "next/app";
import { useEffect, useMemo } from "react";
import "../assets/css/bootstrap-tcl.css";
import "../assets/css/main.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAuthenticated from "../customHook/useIsAuthenticated";
import { CategoryType, formatCategory, formatMenu, formatUserInfo } from "../helpers/formatApi";
import menuService from "../service/menu";
import userService from "../service/user";
import useGlobalState from "../state";
import categoryService from "../service/category";

function MyApp({ Component, pageProps, router }: AppProps) {
  const setMenu = useGlobalState("menu")[1];
  const setCategories = useGlobalState("categories")[1];

  const { user, menuList, categoryList } = pageProps;
  useAuthenticated(user);
  useEffect(() => {
    setMenu(menuList);
    //optimize category
    const optimizedCategories: { [key: string]: CategoryType } = {};
    let i = 0;
    const count = categoryList.length;
    for (i = 0; i < count; i++) {
      const category = categoryList[i];
      optimizedCategories[category.id] = category;
    }
    setCategories(optimizedCategories);
  }, []);

  const hiddenFooter = useMemo(() => {
    const excluded = ["/login", "/register"];
    const pathname = router.pathname;
    return excluded.indexOf(pathname) > -1;
  }, [router.pathname]);

  const hiddenHeader = useMemo(() => {
    const excluded: string[] = [];
    const pathname = router.pathname;
    return excluded.indexOf(pathname) > -1;
  }, [router.pathname]);

  return (
    <>
      {!hiddenHeader && <Header></Header>}
      <Component {...pageProps} />
      {!hiddenFooter && <Footer></Footer>}
    </>
  );
}
MyApp.getInitialProps = async (appContext: AppContext) => {
  const token = appContext.ctx.req?.headers.cookie || "";
  const tokenParse = token?.replace("token=", "");
  let userData = {};
  const menuList = [];
  const categoryList = [];
  if (typeof window === "undefined") {
    const userPromise = userService.getMe({ token: tokenParse });
    const menuPromise = menuService.getCategories();
    const categoryPromise = categoryService.getCategories();
    const [userResponse, menuResponse, categoryResponse] = await Promise.all([userPromise, menuPromise, categoryPromise].map((p) => p.catch((e) => e)));
    userData = formatUserInfo(userResponse.data);
    menuList.push(...formatMenu(menuResponse.data.items));
    categoryList.push(...categoryResponse.data.map((e: any) => formatCategory(e)));
  }
  return {
    pageProps: {
      user: userData,
      menuList,
      categoryList,
    },
  };
};
export default MyApp;
