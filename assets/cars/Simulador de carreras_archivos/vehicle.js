class Vehicle {
    constructor(id, brand, model, vel){
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.vel = vel;
    }

    race = (opp)=>{
        if(this.vel > opp.vel){
            // WINNER
            $('#auto1').css({'transform':'translate(1430px)', 'transition': 'all 3s'});
            $('#auto2').css({'transform':'translate(1430px)', 'transition': 'all 5s'});
            setTimeout(() => {
                $('#winner').prepend(`<p>${this.model} es el ganador</p>`);
            }, 5000);
        }else{
            //LOSER
            $('#auto1').css({'transform':'translate(1430px)', 'transition': 'all 5s'});
            $('#auto2').css({'transform':'translate(1430px)', 'transition': 'all 3s'});
            setTimeout(() => {
                $('#winner').prepend(`<p class="winnertxt">${opp.model} s el ganador</p>`);
            }, 5000);
        }
    }
}

reset = () =>{
    $('#auto1').removeClass();
    $('#auto2').removeClass();
    $('.selected1').empty();
    $('.selected2').empty();
    $('#winner').empty();
    $('#auto1').css({'transform':'', 'transition': ''});
    $('#auto2').css({'transform':'', 'transition': ''});
}
