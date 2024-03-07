function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Menampilkan semua bilangan prima dari 1 hingga 1000
console.log("Bilangan prima dari 1 hingga 1000:");
for (let number = 1; number <= 1000; number++) {
    if (isPrime(number)) {
        process.stdout.write(number + " ");
    }
}