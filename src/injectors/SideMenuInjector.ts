import { InjectorBase } from "./InjectorBase";
import { SET_PATH_EVENT, SUB_PATH_QUERY_KEY } from "../constants";
import { getRootPath } from "./utils";

const overrideTitleBar = () => {
  const titleBar = document.querySelector(
    "body > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td"
  );
  titleBar.innerHTML = "";
  const additional = document.createElement("h1");
  additional.textContent = "Better Square";
  additional.style.textAlign = "center";
  additional.style.color = "blue";
  titleBar.appendChild(additional);
};

const getSubPath = (url: URL): string | null =>
  url.searchParams.get(SUB_PATH_QUERY_KEY);

const resolveSubPath = () => {
  const url = new URL(getRootPath());
  const subPath = getSubPath(url);
  if (subPath) {
    (document.querySelector(
      `span[title="${subPath}"]`
    ) as HTMLSpanElement | null)?.click();
  }
};

const injectButtons = () => {
  document.querySelectorAll('a[href="#"] .menufunc').forEach((el) => {
    const buttonName = el.getAttribute("title");
    el.addEventListener("click", () => {
      window.dispatchEvent(
        new CustomEvent(SET_PATH_EVENT, { detail: buttonName })
      );
    });
  });
};

export class SideMenuInjector extends InjectorBase {
  match(): boolean {
    return Boolean(document.querySelector("body > .menu-outer"));
  }
  run(): void {
    overrideTitleBar();
    resolveSubPath();
    injectButtons();
  }
}
