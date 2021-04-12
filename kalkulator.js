function insertAngka(number){
    document.formKalkulator.viewAngka.value = document.formKalkulator.viewAngka.value+number;
}
function clearAll(){
    document.formKalkulator.viewAngka.value = "";
}
function bcksp(){
    var tampilan = document.formKalkulator.viewAngka
    tampilan.value = tampilan.value.substr(0,tampilan.value.length-1)
}
function equal(){
    document.formKalkulator.viewAngka.value = eval(document.formKalkulator.viewAngka.value)
}