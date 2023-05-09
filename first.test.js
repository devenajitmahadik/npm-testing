let myValue = 1;
let numbers = [1, 2, 3];
let complexNumbers = [
    [1, 2, 3],
    [2, 2, 4],
    [4, 5, 9]
];

let myName = "Deven";
let animals = ["lion", "zebra", "snake"];

let p = null;
let q;

function add(x, y) {
    return x + y;
}

beforeEach(() => {
    console.log("Before each test...");
    myValue = 1;
});

afterEach(() => {
    console.log("After each test...");
});

beforeAll(() => {
    console.log("Before all test...");
});

afterAll(() => {
    console.log("After all test...");
});

describe("Our First Tests", () => {
    test("First", () => {
        expect(myValue).toBe(1);
        expect(add(1,2)).toBe(3);
        expect(add(4,5)).toBe(9);
        myValue++;
        console.log("Inside First test");
    });

    test.each(numbers)("Add 2 to %i", myNum => {
        expect(add(2, myNum)).toBe(myNum + 2);
    });

    test.each(complexNumbers)("Add %i to %i", (a, b, total) => {
        expect(add(a, b)).toBe(total);
    });
});

describe("Our Second Tests", () => {
    test("Second", () => {
        expect(myValue).toBe(1);
        expect(add(1,2)).toBe(3);
        expect(add(4,5)).toBe(9);
        console.log("Inside Second test");
    });
});

describe("Our Third Tests", () => {
    test("Third", () => {
        expect(myValue).toBe(1);
        expect(myValue).toEqual(1);

        expect(myValue).toBeGreaterThan(0);
        expect(myValue).toBeLessThan(10);

        expect(myValue).toBeGreaterThanOrEqual(1);
        expect(myValue).toBeLessThanOrEqual(1);

        expect(myName).toMatch(/Dev/);
        expect(myName).toMatch(/dev/i);

        expect(animals).toContain("zebra");

        console.log("Inside Third test");
    });
});

describe("Our Fourth Tests", () => {
    test("Fourth", () => {
        expect(p).toBeNull();
        expect(p).toBeDefined();
        expect(p).not.toBeUndefined();
        expect(p).toBeFalsy();
        expect(p).not.toBeTruthy();

        expect(q).toBeUndefined();
    })
});

function check() {
    throw new Error("Error occured !");
}

describe("Our Fifth Tests", ()=> {
    test("Fourth", () =>{
        expect(check).toThrow();
        expect(check).toThrow(Error);
        expect(check).toThrow("Error occured !");
        expect(check).toThrow(/Error/i);
    });
});