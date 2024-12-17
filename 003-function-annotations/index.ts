function greet(name: string): string {
  return `hello ${name}`;
}

// void functions
function sauHi(): void {
  console.log("hi");
}

// optional parameters
function logX(x?: number): number {
  if (x) return x;
  return 0;
}

// default parameters
function logY(y: number = 0): void {
  console.log(y);
}

// complex type
function getUSerInfo(name: string, age: number): { name: string; age: number } {
  return { name, age };
}

// rest Parameters
function sumNumbers(...numbers): number {
  return numbers.reduce((total, current) => total + current, 0);
}

// pass function as variable
let multiply: (a: number, b: number) => {};

multiply = function (a: number, b: number): number {
  return a * b;
};
