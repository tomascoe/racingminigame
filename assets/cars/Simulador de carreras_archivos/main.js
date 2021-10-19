// ASIGNACION DE DATOS PARA CARDS
$(window).scroll(()=>{
    window.scrollTo(0,0);
});

$(() => {
    $.get('data.json', (respuesta, estado) =>{
        if (estado === "success"){
            let autos = respuesta; 
            for (auto of autos) {
               asignarVehiculo(auto);
            }
        }
    })
});

asignarVehiculo = (dato) =>{
    if(dato.brand === "volkswagen"){
        $('#vwCard').prepend(dato.img);
        $('#vwBrand').append(dato.brand);
        $('#vwModel').append(dato.model);
        $('#vwVel').append(dato.vel);
    }
    if(dato.brand === "lamborghini"){
        $('#lamboCard').prepend(dato.img);
        $('#lamboBrand').append(dato.brand);
        $('#lamboModel').append(dato.model);
        $('#lamboVel').append(dato.vel);
    }
    if(dato.brand === "mclaren"){
        $('#mclarenCard').prepend(dato.img);
        $('#mclarenBrand').append(dato.brand);
        $('#mclarenModel').append(dato.model);
        $('#mclarenVel').append(dato.vel);
    }
    if(dato.brand === "porsche"){
        $('#porscheCard').prepend(dato.img);
        $('#porscheBrand').append(dato.brand);
        $('#porscheModel').append(dato.model);
        $('#porscheVel').append(dato.vel);
    }
    if(dato.brand === "ferrari"){
        $('#ferrariCard').prepend(dato.img);
        $('#ferrariBrand').append(dato.brand);
        $('#ferrariModel').append(dato.model);
        $('#ferrariVel').append(dato.vel);
    }
    if(dato.brand === "bugatti"){
        $('#bugattiCard').prepend(dato.img);
        $('#bugattiBrand').append(dato.brand);
        $('#bugattiModel').append(dato.model);
        $('#bugattiVel').append(dato.vel);
    }
}

//SELECCION 

$(() => {
    $.get('data.json', (respuesta, estado) =>{
        if (estado === "success"){
            let autos = respuesta; 
            for (auto of autos) {
               seleccionVehiculo(auto);
            }
        }
    })
});

seleccionVehiculo = (data) =>{
    $('#vwBtn').click(()=>{
        if($('#auto1').hasClass('lamborghini') || $('#auto1').hasClass('mclaren') || $('#auto1').hasClass('porsche') || $('#auto1').hasClass('ferrari') || $('#auto1').hasClass('bugatti')){
            if(data.brand === 'volkswagen'){
                $('#auto2').toggleClass(data.brand);
                $('.selected2').empty().prepend(data.img);
            }
        }else{
            if(data.brand === 'volkswagen'){
                $('#auto1').toggleClass(data.brand);
                $('.selected1').empty().prepend(data.img);
            }
        }
    });

    $('#lamboBtn').click(()=>{
        if($('#auto1').hasClass('volkswagen') || $('#auto1').hasClass('mclaren') || $('#auto1').hasClass('porsche') || $('#auto1').hasClass('ferrari') || $('#auto1').hasClass('bugatti')){
            if(data.brand === 'lamborghini'){
                $('#auto2').toggleClass(data.brand);
                $('.selected2').empty().prepend(data.img);
            }
        }else{
            if(data.brand === 'lamborghini'){
                $('#auto1').toggleClass(data.brand);
                $('.selected1').empty().prepend(data.img);
            }
        }
    });

    $('#mclarenBtn').click(()=>{
        if($('#auto1').hasClass('volkswagen') || $('#auto1').hasClass('lamborghini') || $('#auto1').hasClass('porsche') || $('#auto1').hasClass('ferrari') || $('#auto1').hasClass('bugatti')){
            if(data.brand === 'mclaren'){
                $('#auto2').toggleClass(data.brand);
                $('.selected2').empty().prepend(data.img);
            }
        }else{
            if(data.brand === 'mclaren'){
                $('#auto1').toggleClass(data.brand);
                $('.selected1').empty().prepend(data.img);
            }
        }
    });

    $('#porscheBtn').click(()=>{
        if($('#auto1').hasClass('volkswagen') || $('#auto1').hasClass('lamborghini') || $('#auto1').hasClass('mclaren') || $('#auto1').hasClass('ferrari') || $('#auto1').hasClass('bugatti')){
            if(data.brand === 'porsche'){
                $('#auto2').toggleClass(data.brand);
                $('.selected2').empty().prepend(data.img);
            }
        }else{
            if(data.brand === 'porsche'){
                $('#auto1').toggleClass(data.brand);
                $('.selected1').empty().prepend(data.img);
            }
        }
    });

    $('#ferrariBtn').click(()=>{
        if($('#auto1').hasClass('volkswagen') || $('#auto1').hasClass('lamborghini') || $('#auto1').hasClass('mclaren') || $('#auto1').hasClass('porsche') || $('#auto1').hasClass('bugatti')){
            if(data.brand === 'ferrari'){
                $('#auto2').toggleClass(data.brand);
                $('.selected2').empty().prepend(data.img);
            }
        }else{
            if(data.brand === 'ferrari'){
                $('#auto1').toggleClass(data.brand);
                $('.selected1').empty().prepend(data.img);
            }
        }
    });

    $('#bugattiBtn').click(()=>{
        if($('#auto1').hasClass('volkswagen') || $('#auto1').hasClass('lamborghini') || $('#auto1').hasClass('mclaren') || $('#auto1').hasClass('porsche') || $('#auto1').hasClass('ferrari')){
            if(data.brand === 'bugatti'){
                $('#auto2').toggleClass(data.brand);
                $('.selected2').empty().prepend(data.img);
            }
        }else{
            if(data.brand === 'bugatti'){
                $('#auto1').toggleClass(data.brand);
                $('.selected1').empty().prepend(data.img);
            }
        }
    });
}

$('#restablecer').click(()=>{
    reset();
});

//CARRERA
$('#startBtn').click(()=>{
    var auto1sel = $('#auto1').attr('class');
    var auto2sel = $('#auto2').attr('class');
    console.log(`Auto 1: ${auto1sel}`);
    console.log(`Auto 2: ${auto2sel}`);
    $(() => {
        $.get('data.json', (respuesta, estado) =>{
            if (estado === "success"){
                let autos = respuesta; 
                for (auto of autos) {
                    if(auto.brand == auto1sel){
                        var participante1 = new Vehicle(auto.id, auto.brand, auto.model, auto.vel);
                    }
                    if(auto.brand == auto2sel){
                        var participante2 = new Vehicle(auto.id, auto.brand, auto.model, auto.vel);
                    }
                }
                participante1.race(participante2);
            }
        })
    });
});

$('#restartBtn').click(()=>{
    reset();
});

