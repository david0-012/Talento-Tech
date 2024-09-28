function añoBis(){
    let año = parseInt(prompt("Ingrese un año:"));
    if (año % 4 == 0 && año %100 !=0 ){
        alert(`${año} es bisiesto`);
    }else if (año % 100 == 0 && año %400 ==0 ){
        alert(`${año} es bisiesto`);
    }else{
        alert(`${año} no es bisiesto`);
    }
}
añoBis();