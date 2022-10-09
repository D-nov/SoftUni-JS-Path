function solve(towns){
    let townsPopulation = {};

    towns.forEach(town => {
       let tp = town.split(' <-> ');
       let t = tp[0];
       let p = Number(tp[1]);

       if (!townsPopulation[t]){
           townsPopulation[t] = 0;
       }

       townsPopulation[t] += p;
    });

    for (const key in townsPopulation) {
        console.log(`${key} : ${townsPopulation[key]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);