let title = document.querySelector(".title");
let list = document.querySelector(".list");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");

add.addEventListener("click", () => {
    let newItemList = document.createElement("li");
    list.appendChild(newItemList);
    newItemList.innerHTML = `item ${list.children.length}`;

    title.innerHTML = "Novo item adicionado"
    title.style.color = 'green'
});

remove.addEventListener("click", () => {
    list.removeChild(list.lastElementChild);
    title.innerHTML = "Item removido"
    title.style.color = 'red'
});
