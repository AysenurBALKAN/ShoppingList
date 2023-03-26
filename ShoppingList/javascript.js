

var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    }
    else {
        icon.src = "images/moon.png";
    }
}
var girilen, secilen;
var eklenen, btntamamla, btnsil, sonuc;
function liste_ekle() {
    girilen = document.getElementById("txtListe").value;
    if (girilen !="") {
        eklenen = document.createElement("li");
        document.getElementById("listeAlinacaklar").appendChild(eklenen);
        eklenen.innerHTML = girilen;
        btntamamla = document.createElement("img");
        eklenen.appendChild(btntamamla);
        btntamamla.setAttribute("src", "images/tamam.png");
        btntamamla.setAttribute("id", "imgtamamla");
        /* btntamamla.setAttribute("onclick", "tamamla()");*/
        btntamamla.addEventListener("click", tamamla);
        btnsil = document.createElement("img");
        eklenen.appendChild(btnsil);
        btnsil.setAttribute("src", "images/sil.png");
        btnsil.setAttribute("id", "imgsil");
        btnsil.addEventListener("click", sil);
    }
    else {
        alert("Lütfen Boş Bırakmayınız");
    }
}
function sil() {
    secilen = event.currentTarget.parentNode;
    secilen.remove();
    document.getElementById("sonuc").innerHTML = "Seçiminiz Silindi";
}

function tamamla() {
    eklenen = document.createElement("li");
    document.getElementById("listeTamamlananlar").appendChild(eklenen);
    secilen = event.currentTarget.parentNode;
    secilen.childNodes[1].style.display = "none";
    secilen.childNodes[2].setAttribute("onclick", "sil();");
    eklenen.innerHTML = secilen.innerHTML;

    sil();

}

