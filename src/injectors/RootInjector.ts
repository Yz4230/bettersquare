import { InjectorBase } from "./InjectorBase";

export const ROOT_PATH_KEY = "ROOT_INJ_ROOT_PATH";
export const SUB_PATH_QUERY_KEY = "_path";

const setRootPath = () => localStorage.setItem(ROOT_PATH_KEY, location.href);
const injectFrames = () => {
  const frames = document.querySelectorAll("frame");
  frames.forEach(({ contentWindow }) => {
    contentWindow.addEventListener(
      "setPath",
      ({ detail }: CustomEvent<string>) => {
        const url = new URL(location.href);
        url.searchParams.set(SUB_PATH_QUERY_KEY, detail);
        history.pushState({}, "", url.toString());
      }
    );
    contentWindow.addEventListener("requestReload", () => location.reload());
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
