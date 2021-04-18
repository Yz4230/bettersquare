import { InjectorBase } from "./InjectorBase";

export class TopMenuInjector extends InjectorBase {
  match() {
    return Boolean(document.querySelector("body > .WordSection1"));
  }
  run() {
    document.querySelectorAll("a").forEach((a) => {
      a.target = "_blank";
      a.rel = "noopener";
    });
  }
}
