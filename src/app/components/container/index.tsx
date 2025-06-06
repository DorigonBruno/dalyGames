import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-screen-xl m-auto px-2">{children}</div>;
}
