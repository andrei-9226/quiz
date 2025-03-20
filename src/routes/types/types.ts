import Page from "../../core/template/Page";

export const enum PATH {
  MAIN_PAGE = "/",
  ARTISTS = "/artists",
  PICTURES = "/pictures",
  SETTINGS = "/settings",
}

export type Route = {
  path: PATH;
  page: Page;
};

export type Router = { [key: string]: Route };
