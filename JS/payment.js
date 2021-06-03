function basic() {
    var item = sessionStorage.getItem("totalPrice");
    document.getElementById("submit").value = "Zapłać " + item + " zł";
    document.getElementById("p1").checked = true;

    if (parseFloat(item) > 100) {
        document.getElementById("p2").disabled = true;
    }
}

function checkRadio() {
    if (document.getElementById("p2").checked) {
        document.getElementById("cardField").style.display = "none";
    }
    else {
        document.getElementById("cardField").style.display = "block";
    }
}

function check() {
    var ok = true;
    var nameReg = /^[A-Z-ŻŹĆĄŚĘŁÓŃ][a-z-żźćąśęłóń]{2,}$/;
    var streetReg = /^[A-Z-0-9-ŻŹĆĄĘŚŁÓŃ][a-z-0-9-żźćąęśłóń.]*\s?[A-Z-0-9-ŻŹĆĄĘŚŁÓŃ]?[a-z-0-9-żźćąęśłóń.]*\s?[A-Z-0-9-ŻŹĆĄĘŚŁÓŃ]?[a-z-0-9-żźćąęśłóń.]*\s?[A-Z-0-9-ŻŹĆĄĘŚŁÓŃ]?[a-z-0-9-żźćąęśłóń.]*/;
    var telReg = /[0-9]{3}-[0-9]{3}-[0-9]{3}/;
    var houseReg = /[0-9]{1,}[A-Z]*/;
    var visaReg = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var cvcReg = /^[0-9]{3,4}$/;
    var dateReg = /^[0-9]{2}$/;
    var check;

    if (document.getElementById("p1").checked) {
        check = 1;
    }
    else {
        check = 2;
    }

    if (!checkText("per1", nameReg)) {
        ok = false;
        document.getElementById("per1").style.border = "solid red 1px";
    }
    else {
        document.getElementById("per1").style.border = "none";
    }
    if (!checkText("per2", nameReg)) {
        ok = false;
        document.getElementById("per2").style.border = "solid red 1px";
    }
    else {
        document.getElementById("per2").style.border = "none";
    }
    if (!checkText("per4", streetReg)) {
        ok = false;
        document.getElementById("per4").style.border = "solid red 1px";
    }
    else {
        document.getElementById("per4").style.border = "none";
    }
    if (!checkText("per5", telReg)) {
        ok = false;
        document.getElementById("per5").style.border = "solid red 1px";
    }
    else {
        document.getElementById("per5").style.border = "none";
    }
    if (!checkText("per6", houseReg)) {
        ok = false;
        document.getElementById("per6").style.border = "solid red 1px";
    }
    else {
        document.getElementById("per6").style.border = "none";
    }

    if (check === 1) {
        if (!checkText("card1", visaReg)) {
            ok = false;
            document.getElementById("card1").style.border = "solid red 1px";
        }
        else {
            document.getElementById("card1").style.border = "none";
        }
        if (!checkText("card2", dateReg)) {
            ok = false;
            document.getElementById("card2").style.border = "solid red 1px";
        }
        else {
            document.getElementById("card2").style.border = "none";
        }
        if (!checkText("card3", dateReg)) {
            ok = false;
            document.getElementById("card3").style.border = "solid red 1px";
        }
        else {
            document.getElementById("card3").style.border = "none";
        }
        if (!checkText("card4", cvcReg)) {
            ok = false;
            document.getElementById("card4").style.border = "solid red 1px";
        }
        else {
            document.getElementById("card4").style.border = "initial";
        }
    }

    if (ok) {
        document.getElementById("paymentForm").innerHTML = "<h1>Dziękujemy za złożenie zamówienia</h1>";
        localStorage.removeItem("cart");
        sessionStorage.removeItem("totalPrice");
    }
}

function checkText(id, reg) {
    var text = document.getElementById(id);
    if (!reg.test(text.value)) {
        return false;
    }
    else {
        return true;
    }
}