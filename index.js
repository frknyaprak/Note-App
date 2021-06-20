const yeniGorev = document.querySelector('.input-gorev');
const btnYeniGorevEkle = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

const gorevItemOlustur = gorev => {
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add("gorev-item");

    //li olustur
    const gorevLi = document.createElement('li');
    gorevLi.classList.add("gorev-tanim");
    gorevLi.innerText = gorev;
    // li'yi div'e ekledik
    gorevDiv.appendChild(gorevLi);

    //div'i ul'ye ekledik
    gorevListesi.appendChild(gorevDiv);

    //Tamamlandı butonu olustur

    const gorevTamamlandiBtn = document.createElement("button");
    gorevTamamlandiBtn.classList.add("gorev-btn");
    gorevTamamlandiBtn.classList.add("gorev-tamamlandi");

    //Butonun içindeki elementi olusturuldu.
    gorevTamamlandiBtn.innerHTML = `<i class="fa fa-check-square" aria-hidden="true"></i>`;
    //olusturulan div'in içerisine gorevTamamlandiBtn atıldı.
    gorevDiv.appendChild(gorevTamamlandiBtn);

    //Görev Sil butonu
    const gorevSilBtn = document.createElement("button");
    //Görev sil butonu için classlar eklendi.
    gorevSilBtn.classList.add("gorev-btn");
    gorevSilBtn.classList.add("gorev-btn-sil");

    //Görev sil butonu için i elemanı eklendi.
    gorevSilBtn.innerHTML = `<i class="fa fa-trash-alt" aria-hidden="true"></i>`;

    //Olusturulan div'in içerisine görevsilBtn atıldı.
    gorevDiv.appendChild(gorevSilBtn);

    //div'i ul'ye ekledik
    gorevListesi.appendChild(gorevDiv);

    yeniGorev.value = '';
}

const gorevEkle = e => {
    gorevItemOlustur(yeniGorev.value);
    e.preventDefault();
}

const gorevSilTamamla = e => {
    const tiklanilanEleman = e.target;
    if (tiklanilanEleman.classList.contains("gorev-tamamlandi")) {
        tiklanilanEleman.parentElement.classList.toggle("gorev-tamamlandi");
    }

    if (tiklanilanEleman.classList.contains("gorev-btn-sil")) {
        tiklanilanEleman.parentElement.classList.toggle("yavasca-kaybol");

        tiklanilanEleman.parentElement.addEventListener("transitionend", () => {
            tiklanilanEleman.parentElement.remove();
        })
    }

}

gorevListesi.addEventListener("click", gorevSilTamamla);

btnYeniGorevEkle.addEventListener("click", gorevEkle);