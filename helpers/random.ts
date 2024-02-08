export function randomElement<T>(arr: Array<T>) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function randomNumber(max = 100) {
    return Math.floor(Math.random() * max);
}