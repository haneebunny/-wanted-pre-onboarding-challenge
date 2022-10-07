import { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "../common/hooks/useRouter";
import { pathState } from "../common/library/state";

export default function Route({ path, component, state }) {
  const [pathnameState, setPathState] = useRecoilState(pathState);
  const { push } = useRouter();

  useEffect(() => {
    push(path);
  }, [pathnameState]);

  return path === window.location.pathname ? component : "";
}

// pushState 화면전환 - (state, title, [,url]) 매개변수로 받는다.
// 사용자가 새로운 상태로 이동할 때마다 popstate 이벤트가 발생한다.
// title, 지금은 보통 ""로 지정한다. 상태에 대한 짧은 제목으로 정하기도 한다.
