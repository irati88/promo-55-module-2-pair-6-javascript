const currentYear = 2025;

const nextLeapYear = currentYear + (4 - (currentYear % 4));

console.log(nextLeapYear);

const module = currentYear % 4;

if (module === 3) {
    console.log(`El próximo año bisiesto, el ${currentYear +1 }`);
}