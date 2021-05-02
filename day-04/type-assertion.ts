//
type User = {
  name: string;
  id: number;
};

function foo(): string {
  return "bar";
}
const baz = (foo() as any) as User;
console.log(baz);
export {};
