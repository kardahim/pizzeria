async function loadClassic() {
    const response = await fetch("data/menuClassic.txt");
    const data = await response.text();
    return data;
}


async function loadSpecial() {
    const response = await fetch("data/menuSpecial.txt");
    const data = await response.text();
    return data;
}

function changeID(id) {
    sessionStorage.setItem("menu_id", id);
    location.href = "menu.html";
}

function changeMenu() {
    var text;
    var id = parseInt(sessionStorage.getItem("menu_id"));
    switch (id) {
        case 1: {
            loadSpecial().then(data => {
                text = data;
                document.getElementById("menuSPA").innerHTML = text;
            })
            break;
        }
        default: {
            loadClassic().then(data => {
                text = data;
                document.getElementById("menuSPA").innerHTML = text;
            })
            break;
        }
    }
}

function ownPizza() {
    location.href = "ownpizza.html";
}