function add(a: number, b: number): number {
    return a + b;
}

function test(a: string): number {
    return 1; // "New which has been changed. This looks passable!";
}

let result : string = add(1, 2).toString();
console.log(result);