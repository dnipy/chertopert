export const randomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export function randomNumberString(length: number): string {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
}