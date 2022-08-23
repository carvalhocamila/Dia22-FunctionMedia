function calculaMedia(a, b, c){
    let resultado = (a, b, c)/3;
    return resultado;
}

function calculaExame(nota){
    let resultado = 10 - nota;
    return resultado;
}


$('#btAqui').click(
    function(){

    calculo =
        {
         'a' :document.getElementById('inputA').value,
         'b' :document.getElementById('inputB').value,
         'c': document.getElementById('inputC').value
        }

        let media = calculaMedia(
        parseInt(calculo.a),
        parseInt(calculo.b),
        parseInt(calculo.c)
        );

        let exame = calculaExame( media)


        //  let media = (parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) /3;
        //  let exame = (10-media);

         if (media >= 7) {
             alert('aprovado')
         } else{
             alert('a nota que vc precisa tirar é:' +exame);
        }
  

    }
)