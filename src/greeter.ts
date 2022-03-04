export class Greeter {
  constructor(private name: string) {}

  getMessage() {
      return `Hello ${this.name}`;
  }
}
