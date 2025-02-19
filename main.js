var imgf = new Image();
imgf.src = "000-15M_f.novo.png";

var imgb = new Image();
imgb.src = "000-15M_b.webp";


var imagem = document.getElementsByName("imagem1")[0];

function swap() {
    imagem.src = imgb.src;
}

function back() {
    imagem.src = imgf.src;
}

        