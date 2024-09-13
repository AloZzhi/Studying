function simpleDecorator(value: any, context: any) {
  console.log(`${context.kind},${context.name}`);
}


// @simpleDecorator
class A {
  #age = 18 //私有成员

  @simpleDecorator
  static run() {

  }
}

type Decorator = {
  value: any,
  context: {
    kind: string,
    name: string | symbol,
    addInitializer(initializer: () => void): void
    static?: boolean
    private?: boolean
    access: {
      get?(): unknown
      set?(val: unknown): void
    }
  }
}