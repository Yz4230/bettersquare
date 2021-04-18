export abstract class InjectorBase {
  abstract match(): boolean;
  abstract run(): void;
}
