function display() {
    var city = parseInt(sessionStorage.getItem("city"));
    var text;
    var desc;
    var coords;

    switch (city) {
        case 1:
            text = "Restauracja w Lublinie";
            desc =
                "<span>Powstanie</span>" +
                "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem" +
                "laboriosam, omnis porro aperiam" +
                "quam laborum sapiente ipsa mollitia architecto autem sit alias eaque quasi excepturi magnam" +
                "ipsum eum, incidunt corrupti.</p>";
            coords = new google.maps.LatLng(51.24787, 22.56181);
            break;
        case 2:
            text = "Restauracja w Łęcznej";
            desc =
                "<span>Powstanie</span>" +
                "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem" +
                "laboriosam, omnis porro aperiam" +
                "quam laborum sapiente ipsa mollitia architecto autem sit alias eaque quasi excepturi magnam" +
                "ipsum eum, incidunt corrupti.</p>";
            coords = new google.maps.LatLng(51.29546, 22.87856);
            break;
        case 3:
            text = "Restauracja w Lubartowie";
            desc =
                "<span>Powstanie</span>" +
                "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem" +
                "laboriosam, omnis porro aperiam" +
                "quam laborum sapiente ipsa mollitia architecto autem sit alias eaque quasi excepturi magnam" +
                "ipsum eum, incidunt corrupti.</p>";
            coords = new google.maps.LatLng(51.46168, 22.61183);
            break;
    }

    var options = {
        zoom: 15,
        center: coords,
    };

    document.getElementById("restaurantName").innerText = text;
    document.getElementById("desc").innerHTML = desc;
    var map = new google.maps.Map(document.getElementById("map"), options);

    var sign = {
        position: coords,
        map: map,
        title: "Pizza u Romana",
    };

    const marker = new google.maps.Marker(sign);
}