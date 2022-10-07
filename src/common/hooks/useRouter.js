import { useRecoilState } from "recoil";
import { pathState } from "../library/state";

export const useRouter = () => {
  const [_, setPathState] = useRecoilState(pathState);

  function push(path) {
    setPathState(path);
    return window.history.pushState(null, "", path);
  }

  return { push };
};
