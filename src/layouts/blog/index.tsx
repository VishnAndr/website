import React from "react";
import { DefaultLayout } from "../default";

export const BlogLayout: React.FunctionComponent<any> = ({
  children,
  ...pageContext
}) => <DefaultLayout {...pageContext}>{children}</DefaultLayout>;
