interface User {
  name: string;
  id: number;
}

interface Employee extends User {
  job: {
    position: string;
    company: string;
  };
}

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
