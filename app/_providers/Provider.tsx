"use client";

import { Provider } from "react-redux";
import { store } from "../_redux/store";

export function Providers({ children, locale, settings }: any) {
  return <Provider store={store}>{children}</Provider>;
}
