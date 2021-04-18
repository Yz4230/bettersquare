import { InjectorBase } from "./InjectorBase";

const LAST_INPUT_KEY = "SYL_INJ_LAST_INPUT";

const getLastInput = (): object =>
  JSON.parse(localStorage.getItem(LAST_INPUT_KEY) ?? "{}");

const saveToLocalStorage = (key: string, value: string) => {
  const lastInput = getLastInput();
  lastInput[key] = value;
  localStorage.setItem(LAST_INPUT_KEY, JSON.stringify(lastInput));
};

export class SyllabusInjector extends InjectorBase {
  match() {
    return (
      document
        .querySelector("body > table.title > tbody > tr > td")
        ?.textContent.trim() === "シラバス参照／条件入力"
    );
  }
  run() {
    const inputs = document.querySelectorAll("input, select");
    const lastInput = getLastInput();
    inputs.forEach((el: HTMLInputElement | HTMLSelectElement) => {
      if (el.name === "" || el.name.startsWith("_")) return;
      if (el.name in lastInput) el.value = lastInput[el.name];
      el.addEventListener("change", () =>
        saveToLocalStorage(el.name, el.value)
      );
    });

    const clearButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      'input[type="reset"]'
    );
    clearButtons.forEach((el) =>
      el.addEventListener("click", () => {
        localStorage.setItem(LAST_INPUT_KEY, "{}");
      })
    );
  }
}
