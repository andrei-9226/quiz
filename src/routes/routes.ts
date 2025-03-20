import ArtistPage from "../pages/Artist";
import MainPage from "../pages/Main";
import PicturesPage from "../pages/Pictures";
import SettingsPage from "../pages/Settings";
import { PATH, Router } from "./types/types";

// export const ErrorPage = document.createElement("h1");
// ErrorPage.innerText = "Page not found";

export const routes: Router = {
  [PATH.MAIN_PAGE]: {
    path: PATH.MAIN_PAGE,
    page: new MainPage(),
  },

  [PATH.ARTISTS]: {
    path: PATH.ARTISTS,
    page: new ArtistPage(),
  },

  [PATH.PICTURES]: {
    path: PATH.PICTURES,
    page: new PicturesPage(),
  },

  [PATH.SETTINGS]: {
    path: PATH.SETTINGS,
    page: new SettingsPage(),
  },
};
