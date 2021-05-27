async function loadJson() {
    const response = await fetch("pizzas.json");
    const data = await response.json();
    return data;
}

function add(id) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) {
        cart = [];
    }
    var item = {};

    loadJson().then(data => {
        for (var i = 0; i < data.length; i++) {
            if (id == data[i].id) {
                item.id = data[i].id
                item.name = data[i].name;
                item.size = data[i].size;
                item.price = data[i].price;
                item.amount = 1;
                for (var j = 0; j < cart.length; j++) {
                    if (cart[j].id == id) {
                        item.amount = parseInt(cart[j].amount) + 1;
                    }
                }
                if ((item.amount == 1) || cart.length == 0)
                    cart.push(item);
                else {
                    for (var j = 0; j < cart.length; j++) {
                        if (cart[j].id == id) {
                            cart[j].amount = item.amount;
                        }
                    }
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                break;
            }
        }
    });
}

function showAll() {
    var text = "";
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) {
        text += `<div style="font-weight: bold; font-size: 30px; text-align: center;">Koszyk jest pusty</div>`;
    }
    else {
        text +=
            '<table id="products">' +
            "<thead>" +
            "<tr>" +
            "<th>Nazwa</th>" +
            "<th>Rozmiar</th>" +
            "<th>Cena</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";
        for (var i = 0; i < cart.length; i++) {

            text +=
                "<tr>" +
                `<td>${cart[i].name}</td>` +
                `<td>${cart[i].size}</td>` +
                `<td>${cart[i].price}</td>` +
                "</tr>";
        }
        text +=
            "</tbody>" +
            "</table>";
    }
    document.getElementById("storage").innerHTML = text;
}