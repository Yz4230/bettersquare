import { InjectorBase } from "./InjectorBase";

export class SideMenuInjector extends InjectorBase {
  match(): boolean {
    return Boolean(document.querySelector("body > .menu-outer"));
  }
  run(): void {
    const titleBar = document.querySelector(
      "body > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td"
    );
    titleBar.innerHTML = "";
    const additional = document.createElement("h1");
    additional.textContent = "Better Square";
    additional.style.textAlign = "center";
    additional.style.color = "blue";
    titleBar.appendChild(additional);
  }
}
