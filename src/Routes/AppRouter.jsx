import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pathState } from "../common/library/state";
import AboutPage from "../pages/About";
import MainPage from "../pages/Main";
import Route from "./Route";
import Router from "./Router";

export default function AppRouters() {
  const { pathname } = location;

  const [pathnameState, setPathState] = useRecoilState(pathState);

  useEffect(() => {
    if ((pathname === pathState) === "/") {
      console.log("메인이어야합니다.");
    } else if ((pathname === pathState) === "/about") {
      console.log("about이어야합니다.");
    }
  }, [pathnameState]);

  return (
    <Router>
      {pathname === "/" && <Route path="/" component={<MainPage />} />}
      {pathname === "/about" && (
        <Route path="/about" component={<AboutPage />} />
      )}
    </Router>
  );
}
