function helloWorld(num: number): string {
  return "Hello World " + num;
}

const hello1: string = helloWorld(1);
const hello2: string = helloWorld(2);

console.log({ hello1, hello2 });
export {};
