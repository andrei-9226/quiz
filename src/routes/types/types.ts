export const enum PATH {
  MAIN_PAGE = "/",
  ARTISTS = "/artists",
  PICTURES = "/pictures",
  SETTINGS = "/settings",
}

export type Route = {
  path: PATH;
  page: () => HTMLElement;
};

export type Router = { [key: string]: Route };
