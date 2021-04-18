import { HeaderInjector } from "./injectors/HeaderInjector";
import { InjectorBase } from "./injectors/InjectorBase";
import { RootInjector } from "./injectors/RootInjector";
import { SideMenuInjector } from "./injectors/SideMenuInjector";
import { SyllabusInjector } from "./injectors/SyllabusInjector";
import { TopMenuInjector } from "./injectors/TopMenuInjector";

const injectors: InjectorBase[] = [
  new RootInjector(),
  new HeaderInjector(),
  new SideMenuInjector(),
  new TopMenuInjector(),
  new SyllabusInjector(),
];
injectors.forEach((injector) => injector.match() && injector.run());
