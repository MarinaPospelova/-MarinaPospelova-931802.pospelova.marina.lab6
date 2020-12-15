function showCat(){
    let cat = document.querySelector("main > div:first-child");
    let dog = document.querySelector("main > div:last-child");
    cat.classList.remove("hidden-animal");
    dog.classList.add("hidden-animal");
}

function showDog(){
    let cat = document.querySelector("main > div:first-child");
    let dog = document.querySelector("main > div:last-child");
    cat.classList.add("hidden-animal");
    dog.classList.remove("hidden-animal");
}
function showCatDog(){
    let cat = document.querySelector("main > div:first-child");
    let dog = document.querySelector("main > div:last-child");
    cat.classList.remove("hidden-animal");
    dog.classList.remove("hidden-animal");
}
