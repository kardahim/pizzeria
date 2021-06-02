function check() {
    var ok = true;

    if (!checkRadio("pizzaSize")) {
        ok = false;
        document.getElementById('size').style.borderColor = "red";
        document.getElementById('sizeLegend').style.color = "red";
    }
    else {
        document.getElementById('size').style.borderColor = "white";
        document.getElementById('sizeLegend').style.color = "white";
    }

    if (!checkCheckbox("ingredients")) {
        ok = false;
        document.getElementById('ingre').style.borderColor = "red";
        document.getElementById('ingreLegend').style.color = "red";
    }
    else {
        document.getElementById('ingre').style.borderColor = "white";
        document.getElementById('ingreLegend').style.color = "white";
    }

    if (!checkAmount("numberOwn")) {
        ok = false;
        document.getElementById('number').style.borderColor = "red";
        document.getElementById('numberLegend').style.color = "red";
    }
    else {
        document.getElementById('number').style.borderColor = "white";
        document.getElementById('numberLegend').style.color = "white";
    }

    if (ok)
        create();
}

function checkRadio(name) {
    var radio = document.getElementsByName(name);

    for (var i = 0; i < radio.length; i++) {
        var checked = radio[i].checked;
        if (checked) {
            return true;
        }
    }
    return false;
}

function checkCheckbox(name) {
    var checkBox = document.getElementsByName(name);
    var checkAmount = 0;

    for (var i = 0; i < checkBox.length; i++) {
        var checked = checkBox[i].checked;
        if (checked) {
            checkAmount++;
        }
    }

    if (checkAmount > 0) {
        return true;
    }
    return false;
}


function checkAmount(id) {
    var number = document.getElementById(id).value;
    if (number > 0 && number % 1 === 0) {
        return true;
    }
    return false;
}

function disable(name) {
    var checkBox = document.getElementsByName(name);

    for (var i = 0; i < checkBox.length; i++) {
        var checked = checkBox[i].checked;
        if (!checked)
            checkBox[i].disabled = true;
    }
}

function enable(name) {
    var checkBox = document.getElementsByName(name);

    for (var i = 0; i < checkBox.length; i++) {
        var checked = checkBox[i].checked;
        if (!checked)
            checkBox[i].disabled = false;
    }
}

function switchDisable(name) {
    var checkBox = document.getElementsByName(name);
    var checkAmount = 0;

    for (var i = 0; i < checkBox.length; i++) {
        var checked = checkBox[i].checked;
        if (checked) {
            checkAmount++;
        }

        if (checkAmount == 5)
            disable(name);
        else
            enable(name);
    }
}

function returnMenu() {
    if (window.confirm("Czy chcesz powrócić do menu? Twoja pizza nie zostanie dodana do koszyka!")) {
        location.href = "menu.html";
    }
}

function display() {
    var radio = document.getElementsByName("pizzaSize");
    var number = document.getElementById("numberOwn").value;
    var checkBox = document.getElementsByName("ingredients");
    var size = "";
    var ingredients = "";
    var ingredientsAmount = 0;
    var sizeChecked = -1;
    var price = 0;
    var priceBase = 6;
    var priceMultiplier;
    var ok = true;

    for (var i = 0; i < radio.length; i++) {
        var checked = radio[i].checked;
        if (checked) {
            sizeChecked = i;
            size += radio[i].value;
            break;
        }
    }

    for (var i = 0; i < checkBox.length; i++) {
        var checked = checkBox[i].checked;
        if (checked) {
            ingredientsAmount++;
            ingredients += checkBox[i].value + ", ";
        }
        if (ingredientsAmount == 5)
            break;
    }
    ingredients = ingredients.slice(0, -2);

    switch (sizeChecked) {
        case 0: priceMultiplier = 2 / 5; break;
        case 1: priceMultiplier = 2 / 3; break;
        case 2: priceMultiplier = 1; break;
        case 3: priceMultiplier = 2; break;
    }
    price = priceBase * priceMultiplier * ingredientsAmount;
    price = Math.round(price * 100) / 100;

    document.getElementById("displaySize").innerHTML = size;
    document.getElementById("displayIngredients").innerHTML = ingredients;
    if (number > 0 && number % 1 === 0)
        document.getElementById("displayAmount").innerHTML = number;
    else {
        document.getElementById("displayAmount").innerHTML = "";
        ok = false;
    }
    if (sizeChecked == -1 || ingredientsAmount == 0) {
        document.getElementById("displayPrice").innerHTML = "";
        ok = false
    }
    else
        document.getElementById("displayPrice").innerHTML = price + " zł";
    if (ok)
        document.getElementById("displayTotal").innerHTML = Math.round((price * number) * 100) / 100 + " zł";
    else
        document.getElementById("displayTotal").innerHTML = "";

}

function create() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var item = {};
    var price = document.getElementById("displayPrice").innerText;
    if (cart === null) {
        cart = [];
    }

    item.name = "Własna";
    item.size = document.getElementById("displaySize").innerText;
    item.price = price.slice(0, -3);
    item.amount = document.getElementById("displayAmount").innerText;
    item.ingredients = document.getElementById("displayIngredients").innerText;

    for (var j = 0; j < cart.length; j++) {
        if (cart[j].size == item.size && cart[j].ingredients == item.ingredients) {
            item.amount = parseInt(cart[j].amount) + parseInt(item.amount);
        }
    }
    if ((item.amount == 1) || cart.length == 0)
        cart.push(item);
    else {
        for (var j = 0; j < cart.length; j++) {
            if (cart[j].size == item.size && cart[j].ingredients == item.ingredients) {
                cart[j].amount = item.amount;
            }
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}