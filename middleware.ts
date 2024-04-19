import { Middleware } from "next-connect";

export const middleware: Middleware = (req, res) => {
  console.log("This is a middleware function");
};
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
