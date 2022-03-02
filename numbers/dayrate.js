// Napište funkci pro výpočet denní sazby vzhledem k hodinové sazbě.
// Funkce bude přijímat hodinovou sazbu pracovníka a vrátí cenu pracovníka za den, když počítáme s 8hodinovou pracovní dobou.
// Vstup: 89, Výstup: 712


const vypocetMzdy = (hodinovaSazdba, pracovnaDoba) => {
    return hodinovaSazdba * pracovnaDoba
    
};
let vysledok = vypocetMzdy(89, 8);
console.log(vysledok);
