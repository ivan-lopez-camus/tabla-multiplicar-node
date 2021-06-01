

const fs = require('fs');

const crearArchivo = async(a=5, listar=false, hasta) =>{

    try{
    
    let salida ='';
    for (let i=1;i<=hasta;i++){
        salida +=`${a} X ${i} = ${ a * i}\n`;
      
    }
    if(listar=true){
        console.log('Tabla creada')
        console.log(salida)
    }
    
    
    fs.writeFileSync(`./salida/tabla del ${a}.txt`,salida)
    return`tabla-de-${a}.txt`;

    }catch(err){
        throw err;
    }
    

}

module.exports={
    crearArchivo : crearArchivo,
}