export abstract class IHashing {
  abstract hash(text: string): Promise<string>;
  abstract compare(hashedValue: string, text: string): Promise<boolean>;
}
