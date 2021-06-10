async function loadJson() {
    const response = await fetch("data/pizzas.json");
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
    var confirm = document.getElementById("confirm");

    if (window.pageYOffset >= 60) {
        confirm.style.top = "0px";
    }
    else {
        confirm.style.top = "60px";
    }
    confirm.style.display = "block";

    setTimeout(function () { confirm.style.display = "none" }, 1000);
}

function showAll() {
    var text = "";
    var textS = "";
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) {
        document.getElementById('cartFlex').style.flexDirection = "column";
        document.getElementById('storage').style.width = "100%";
        document.getElementById('summary').style.width = "100%";
        document.getElementById('summary').style.marginLeft = "0px";
        document.getElementById('summary').style.padding = "15px";
        text += '<div style="text-align: center; font-size: 30px; font-weight: bold; margin-bottom: 15px; margin-top: 15px;">Twój koszyk jest pusty przejdź do menu!</div>'
        textS += '<div class="row">' +
            '<div class="menu" onclick="changeID(1)">' +
            '<img src="IMG/flavor.png" alt="orientalne">' +
            '<div class="text">SEZONOWE</div>' +
            '</div>' +
            '<div class="menu" onclick="changeID(2)">' +
            '<img src="IMG/breakfast.png" alt="śniadaniowe">' +
            '<div class="text">KLASYCZNE</div>' +
            '</div>' +
            '</div>';
    }
    else {
        text +=
            '<table id="products">' +
            "<thead>" +
            "<tr>" +
            "<th>Nazwa</th>" +
            "<th>Rozmiar</th>" +
            "<th>Cena</th>" +
            "<th>Ilość</th>" +
            "<th>Razem</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";
        var totalS = 0;
        var amountS = 0;
        for (var i = 0; i < cart.length; i++) {
            total = parseInt(cart[i].amount) * parseFloat(cart[i].price);
            total = Math.round(total * 100) / 100;
            totalS = total + totalS;
            amountS = parseInt(cart[i].amount) + amountS;
            var name;
            if (cart[i].name == "Własna")
                name = cart[i].name + ` (${cart[i].ingredients})`;
            else
                name = cart[i].name

            text +=
                "<tr>" +
                `<td>${name}</td>` +
                `<td>${cart[i].size}</td>` +
                `<td>${cart[i].price} zł</td>` +
                `<td><span class="increase" onclick="amountIncrease(this.id)" id="${i}">+</span><div class="amountMain"><i class="amount">${cart[i].amount}</i><i class="fa fa-trash remove" id="${i}" onclick="remove(this.id)"></i></div><span class="decrease" onclick="amountDecrease(this.id)" id="${i + cart.length}">-</span></td>` +
                `<td>${total} zł</td>` +
                "</tr>";
        }
        totalS = Math.round(totalS * 100) / 100;
        text +=
            "</tbody>" +
            "</table>";

        textS +=
            '<table id="summaryTable">' +
            '<tbody>' +
            '<tr">' +
            '<td>Całkowita cena:</td>' +
            `<td>${totalS} zł</td>` +
            '</tr>' +
            '<tr>' +
            '<td>Ilość produktów:</td>' +
            `<td>${amountS}</td>` +
            '</tr>' +
            '<tr>' +
            '<td colspan="2" id="buttonsRow">' +
            '<button onclick="removeAll()">Wyczyść koszyk</button>' +
            '<button onclick="goToPayment()">Zapłać</button>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    }
    document.getElementById("storage").innerHTML = text;
    document.getElementById("summary").innerHTML = textS;
    sessionStorage.setItem("totalPrice", totalS);
}

function removeAll() {

    if (window.confirm("Czy chcesz usunąć cały koszyk?"))
        localStorage.removeItem('cart');
    showAll();
}

function amountIncrease(id) {
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart[id].amount = parseInt(cart[id].amount) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    showAll();
}

function amountDecrease(id) {
    var cart = JSON.parse(localStorage.getItem('cart'));
    if (cart[id - cart.length].amount > 1)
        cart[id - cart.length].amount = parseInt(cart[id - cart.length].amount) - 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    showAll();
}

function remove(id) {
    var cart = JSON.parse(localStorage.getItem('cart'));

    if (window.confirm(`Czy chcesz usunąć produkt: ${cart[id].name} ${cart[id].size}`)) {
        if (cart.length == 1) {
            localStorage.removeItem('cart');
        }
        else {
            cart.splice(id, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        showAll();
    }
}

function goToPayment() {
    if (window.confirm("Chcesz przejść do płatności?")) {
        location.href = "payment.html";
    }
}