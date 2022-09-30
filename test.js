
var arr = ["one", "two", "three"];
arr.splice(0, 0, "juan");
arr.splice(3, 0, "three");
console.log(arr);

function* idMaker() {
    let index = 0;
    while (index < 5)
        yield index++;
}
var gen = idMaker();
console.log(gen.next().value);
function estoesboca(a) {
    console.log(a); 
}
estoesboca(arr);