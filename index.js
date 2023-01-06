// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop("Ralph");
}

function destructivelyRemoveFirstCat() {
    cats.shift("Bob");
}

function appendCat(name) {
    const copyCats = cats.slice();
    copyCats.push(name);
    return copyCats;
}

function prependCat(name) {
    const copyCats = [...cats];
    copyCats.unshift(name);
    return copyCats;
}

function removeLastCat() {
    const copyOfCats = [...cats];
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = [...cats];
    copyOfCats.shift();
    return copyOfCats;
}