import { matchRoutes, useLocation } from "react-router-dom";
import {
  UseState,
  UseEffect,
  Examples,
  UseRef,
  UseLayoutEffect,
  Memo,
} from "@/pages";
import { HomeworkMemo } from "@/pages/HomeworkMemo";

export const Routes: {
  [key: string]: {
    path: string;
    element: JSX.Element;
    label: string;
  };
} = {
  USE_STATE: {
    path: "/useState",
    element: <UseState />,
    label: "Use State",
  },
  USE_EFFECT: {
    path: "/useEffect",
    element: <UseEffect />,
    label: "Use Effect",
  },
  EXAMPLES: {
    path: "/examples",
    element: <Examples />,
    label: "Examples",
  },
  USE_REF: {
    path: "/useRef",
    element: <UseRef />,
    label: "Use Ref",
  },
  USE_LAYOUT_EFFECT: {
    path: "/useLayoutEffect",
    element: <UseLayoutEffect />,
    label: "Use Layout Effect",
  },
  MEMO: {
    path: "/memo",
    element: <Memo />,
    label: "Memo",
  },
  HomeworkMemo: {
    path: "/homework-memo",
    element: <HomeworkMemo />,
    label: "Homework Memo",
  },
} as const;

export type Route = {
  [key in keyof typeof Routes]: (typeof Routes)[key]["path"];
}[keyof typeof Routes];

const routes = Object.values(Routes).map(({ path }) => ({
  path,
}));

export const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location) || [
    {
      route: { path: Routes.USE_STATE.path },
    },
  ];

  return route.path;
};
