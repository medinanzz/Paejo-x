function alert1() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ah alguma coisa de errado com este botão, click em outro :)!",
      });
}

function alert2() {
    Swal.fire({
        title: "Acho que sua internet não está favorável!",
        icon: "warning"
 });        
}

function alert3() {
    Swal.fire({
        title: "Agora sim :)" ,
        text: "Este site foi feito para trabalho escolar, não para vender!" ,
        icon: "success" ,
    })
}