function solve(name, population, treasury) {
    let town = {
        name: name,
        population: Number(population),
        treasury: Number(treasury),
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population *= (percentage / 100) + 1;
        },
        applyRecession(percentage) {
            this.treasury *= 1 - (percentage / 100);
        },
    }

    return town;
}

let city = solve('Tortuga',
    7000,
    15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(5);
console.log(city.population);