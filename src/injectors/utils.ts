import { ROOT_PATH_KEY } from "./RootInjector";

export const getRootPath = (): string => localStorage.getItem(ROOT_PATH_KEY);
