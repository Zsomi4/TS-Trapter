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
    alert("asd");
    const aSide = document.querySelector('#aSide') as HTMLInputElement;
    const bSide = document.querySelector('#bSide') as HTMLInputElement;
    const cSide = document.querySelector('#cSide') as HTMLInputElement;
    const dSide = document.querySelector('#dSide') as HTMLInputElement;

    let aNum: number = Number(aSide.value);
    let bNum : number = Number(bSide.value);
    let cNum : number = Number(cSide.value);
    let dNum : number = Number(dSide.value);

    let area = calcArea(aNum, bNum, cNum, dNum);
    eredmeny.textContent = "Terület: " + String(area);
    aSide.value = "";
    bSide.value = "";
    cSide.value = "";
    dSide.value = "";
});

function calcArea(aSide: number, bSide: number, cSide: number, dSide: number):number {
    return (aSide + cSide / 4 * (aSide - cSide)) * Math.sqrt((aSide + bSide - cSide + dSide) * 
    (aSide - bSide - cSide + dSide) * (aSide + bSide - cSide - dSide) * (- aSide + bSide + cSide + dSide));
}