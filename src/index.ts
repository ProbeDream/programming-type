let a = 1 + 2;
let b = a * 2;
let c = {
    apple: a,
    banana: b
}
let d = c.apple * 4;

const sum = (a: number, b: number): number => a + b
console.log(sum(2, 3));

let e: any = 666;
let f: any = ["danger"];
console.log(e + f);
