let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40, 
    rareCars: 2
};

for(let values in statistics){
    if(values.startsWith('r') || statistics[values] % 2 !==0){
        console.log(statistics[values])
    }
    
}