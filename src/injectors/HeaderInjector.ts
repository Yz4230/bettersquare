import { REQUEST_RELOAD_EVENT, SET_PATH_EVENT } from "../constants";
import { InjectorBase } from "./InjectorBase";
import { SUB_PATH_QUERY_KEY } from "../constants";
import { getRootPath } from "./utils";

export class HeaderInjector extends InjectorBase {
  match(): boolean {
    return Boolean(document.querySelector('body > form[name="TopForm"]'));
  }
  run(): void {
    const gotoTopButton: HTMLAnchorElement = document.querySelectorAll("a")[1];
    gotoTopButton.addEventListener("click", (ev) => {
      ev.preventDefault();
      const url = new URL(getRootPath());
      url.searchParams.delete(SUB_PATH_QUERY_KEY);
      window.dispatchEvent(
        new CustomEvent(SET_PATH_EVENT, { detail: url.toString() })
      );
      window.dispatchEvent(new Event(REQUEST_RELOAD_EVENT));
    });
  }
}
