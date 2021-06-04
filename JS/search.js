function search() {
    var name = document.getElementById("searchCity").value;
    var city;

    if (name == "Lublin" || name == "lublin") {
        city = 1;
    }
    else if (name == "Łęczna" || name == "łęczna") {
        city = 2;
    }
    else if (name == "Lubartów" || name == "lubartów") {
        city = 3;
    }
    else {
        city = 0;
    }

    if (city > 0) {
        sessionStorage.setItem("city", city);
        location.href = "search.html";
    }
    else {
        alert("W tym mieście nie mamy restauracji");
        document.getElementById("searchCity").value = "";
    }
}