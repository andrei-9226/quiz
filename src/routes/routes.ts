import { PATH, Router } from "./types/types";

export const MainPage = document.createElement("h1");
MainPage.innerText = "Main page";
const ArtistsPage = document.createElement("h1");
ArtistsPage.innerText = "Artists page";
const PicturesPage = document.createElement("h1");
PicturesPage.innerText = "Pictures page";
const SettingsPage = document.createElement("h1");
SettingsPage.innerText = "Settings page";

export const ErrorPage = document.createElement("h1");
ErrorPage.innerText = "Page not found";

export const routes: Router = {
  [PATH.MAIN_PAGE]: {
    path: PATH.MAIN_PAGE,
    page: () => MainPage,
  },

  [PATH.ARTISTS]: {
    path: PATH.ARTISTS,
    page: () => ArtistsPage,
  },

  [PATH.PICTURES]: {
    path: PATH.PICTURES,
    page: () => PicturesPage,
  },

  [PATH.SETTINGS]: {
    path: PATH.SETTINGS,
    page: () => SettingsPage,
  },
};
