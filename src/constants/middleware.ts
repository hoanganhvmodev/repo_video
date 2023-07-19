import AuthenMiddleware from "@middleware/AuthenMiddleware"

interface MiddlewareListModel {
  [key: string]: any;
}

export const MIDDLEWARE_LIST:MiddlewareListModel = {
  AuthenMiddleware: AuthenMiddleware,
}