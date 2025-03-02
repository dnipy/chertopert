const randomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const numberByRange = (from: number, to: number) => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

function randomNumberString(length: number): string {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
}

export { numberByRange, randomItem, randomNumberString };
