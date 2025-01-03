import { redirect } from "next/navigation";
import { type ReactNode } from "react";

const NotFound = (): ReactNode => {
    redirect("/");
};

export default NotFound;
