import {
  REQUEST_RELOAD_EVENT,
  ROOT_PATH_KEY,
  SET_PATH_EVENT,
  SUB_PATH_QUERY_KEY,
} from "../constants";
import { InjectorBase } from "./InjectorBase";

const setRootPath = () => localStorage.setItem(ROOT_PATH_KEY, location.href);
const injectFrames = () => {
  const frames = document.querySelectorAll("frame");
  frames.forEach(({ contentWindow }) => {
    contentWindow.addEventListener(
      SET_PATH_EVENT,
      ({ detail }: CustomEvent<string>) => {
        const url = new URL(location.href);
        url.searchParams.set(SUB_PATH_QUERY_KEY, detail);
        history.pushState({}, "", url.toString());
      }
    );
    contentWindow.addEventListener(REQUEST_RELOAD_EVENT, () =>
      location.reload()
    );
  });
};

export class RootInjector extends InjectorBase {
  match(): boolean {
    return Boolean(document.querySelector("frameset > #idForChangeMenu"));
  }
  run(): void {
    setRootPath();
    injectFrames();
  }
}
