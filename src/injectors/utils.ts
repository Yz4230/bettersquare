import { ROOT_PATH_KEY } from "../constants";

export const getRootPath = (): string => localStorage.getItem(ROOT_PATH_KEY);
