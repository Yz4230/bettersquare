import { SideMenuInjector } from "./injectors/SideMenuInjector";
import { SyllabusInjector } from "./injectors/SyllabusInjector";
import { TopMenuInjector } from "./injectors/TopMenuInjector";

const injectors = [
  new SideMenuInjector(),
  new TopMenuInjector(),
  new SyllabusInjector(),
];
injectors.forEach((injector) => injector.match() && injector.run());
