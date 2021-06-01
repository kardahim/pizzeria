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
            console.log(checkAmount);
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