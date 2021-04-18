import { SideMenuInjector } from "./injectors/SideMenuInjector";
import { TopMenuInjector } from "./injectors/TopMenuInjector";

const injectors = [new SideMenuInjector(), new TopMenuInjector()];
injectors.forEach((injector) => injector.match() && injector.run());
