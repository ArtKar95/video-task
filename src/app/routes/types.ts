import type { JSX } from "react";

export interface IRoute {
  path: string;
  label: string;
  icon?: string;
  element: JSX.Element;
  forSidebar?: boolean;
}
