/*
File: app.ts
Author: Gubis Zsombor Dániel
Copyright: 2022, Gubis Zsombor Dániel
Group: Szoft_II_N
Date: 2022-10-22
Github: https://github.com/Zsomi4
Licenc: GNU GPL
*/
const calcButton = document.querySelector('#calcButton');
const eredmeny = document.querySelector('#eredmeny');
calcButton.addEventListener('click', () => {
    const aSide = document.querySelector('#aSide');
    const bSide = document.querySelector('#bSide');
    const cSide = document.querySelector('#cSide');
    const dSide = document.querySelector('#dSide');
    let aNum = Number(aSide.value);
    let bNum = Number(bSide.value);
    let cNum = Number(cSide.value);
    let dNum = Number(dSide.value);
    let area = calcArea(aNum, bNum, cNum, dNum);
    eredmeny.textContent = "Terület: " + String(area);
    aSide.value = "";
    bSide.value = "";
    cSide.value = "";
    dSide.value = "";
});
function calcArea(aSide, bSide, cSide, dSide) {
    return (aSide + cSide / 4 * (aSide - cSide)) * Math.sqrt((aSide + bSide - cSide + dSide) *
        (aSide - bSide - cSide + dSide) * (aSide + bSide - cSide - dSide) * (-aSide + bSide + cSide + dSide));
}
