type User = {
  name: string;
  id: number;
};

type Employee = User & {
  job: {
    position: string;
    company: string;
  };
};

const user: Employee = {
  name: "Dimar",
  id: 9,
  job: {
    position: "Lead FE",
    company: "UT",
  },
};
console.log(user);

export {};
