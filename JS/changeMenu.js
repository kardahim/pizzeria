function changeID(id) {
    sessionStorage.setItem("menu_id", id);
    location.href = "menu.html";
}

function changeMenu() {
    var text = "";
    var id = parseInt(sessionStorage.getItem("menu_id"));
    switch (id) {
        case 1: {
            text += showSpecial();
            break;
        }
        default: {
            text += showClassic();
            break;
        }
    }

    document.getElementById("menuSPA").innerHTML = text;
}

function showClassic() {
    var text = "";
    text += '<h1>Menu klasyczne</h1>' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>WŁASNA</span>' +
        '<div class="price">' +
        '<span>20 cm&nbsp;&nbsp;</span>' +
        '<span>27 cm&nbsp;&nbsp;</span>' +
        '<span>40 cm&nbsp;&nbsp;</span>' +
        '<span>60 cm&nbsp;&nbsp;</span>' +
        '<button onclick="ownPizza()">Stwórz</button>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Do 5 składników</span>' +
        '</div>' +
        '</div >' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>1.VERONA</span>' +
        '<div class="price">' +
        '<span>9,50 zł</span>' +
        '<span>16,00 zł</span>' +
        '<span>25,90 zł</span>' +
        '<span>45,50 zł</span>' +
        '<div class="dropButton">' +
        '<button>Do koszyka</button>' +
        '<div>' +
        '<button onclick="add(1)">20 cm</button>' +
        '<button onclick="add(2)">27 cm</button>' +
        '<button onclick="add(3)">40 cm</button>' +
        '<button onclick="add(4)">60 cm</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Ser, Szynka</span>' +
        '</div>' +
        '</div>' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>2. OSTRA KURA&#128293;</span>' +
        '<div class="price">' +
        '<span>12,50 zł</span>' +
        '<span>20,90 zł</span>' +
        '<span>31,90 zł</span>' +
        '<span>62,00 zł</span>' +
        '<div class="dropButton">' +
        '<button>Do koszyka</button>' +
        '<div>' +
        '<button onclick="add(5)">20 cm</button>' +
        '<button onclick="add(6)">27 cm</button>' +
        '<button onclick="add(7)">40 cm</button>' +
        '<button onclick="add(8)">60 cm</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Kurczak, Cebula, Jalapeno, Ser, Boczek</span>' +
        '</div>' +
        '</div>' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>3.AMORE</span>' +
        '<div class="price">' +
        '<span>12,00 zł</span>' +
        '<span>18,00 zł</span>' +
        '<span>29,90 zł</span>' +
        '<span>59,80 zł</span>' +
        '<div class="dropButton">' +
        '<button>Do koszyka</button>' +
        '<div>' +
        '<button onclick="add(9)">20 cm</button>' +
        '<button onclick="add(10)">27 cm</button>' +
        '<button onclick="add(11)">40 cm</button>' +
        '<button onclick="add(12)">60 cm</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Ser, Kurczak z warzywami</span>' +
        '</div>' +
        '</div>' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>4.FETA&#127807;</span>' +
        '<div class="price">' +
        '<span>11,50 zł</span>' +
        '<span>18,10 zł</span>' +
        '<span>32,50 zł</span>' +
        '<span>62,40 zł</span>' +
        '<div class="dropButton">' +
        '<button>Do koszyka</button>' +
        '<div>' +
        '<button onclick="add(13)">20 cm</button>' +
        '<button onclick="add(14)">27 cm</button>' +
        '<button onclick="add(15)">40 cm</button>' +
        '<button onclick="add(16)">60 cm</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Cebula, Pomidor, Brokuły, Feta</span>' +
        '</div>' +
        '</div>' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>5.VENEZIA</span>' +
        '<div class="price">' +
        '<span>10,00 zł</span>' +
        '<span>17,50 zł</span>' +
        '<span>31,50 zł</span>' +
        '<span>57,50 zł</span>' +
        '<div class="dropButton">' +
        '<button>Do koszyka</button>' +
        '<div>' +
        '<button onclick="add(17)">20 cm</button>' +
        '<button onclick="add(18)">27 cm</button>' +
        '<button onclick="add(19)">40 cm</button>' +
        '<button onclick="add(20)">60 cm</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Ser, Salami</span>' +
        '</div>' +
        '</div>' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>6.CHORIZO&#128293;</span>' +
        '<div class="price">' +
        '<span>11,50 zł</span>' +
        '<span>18,70 zł</span>' +
        '<span>33,60 zł</span>' +
        '<span>59,50 zł</span>' +
        '<div class="dropButton">' +
        '<button>Do koszyka</button>' +
        '<div>' +
        '<button onclick="add(21)">20 cm</button>' +
        '<button onclick="add(22)">27 cm</button>' +
        '<button onclick="add(23)">40 cm</button>' +
        '<button onclick="add(24)">60 cm</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Chorizo, Oliwki czarne, Jalapeno, Ser</span>' +
        '</div>' +
        '</div>' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>7.HAWAJSKA</span>' +
        '<div class="price">' +
        '<span>9,50 zł</span>' +
        '<span>16,50 zł</span>' +
        '<span>29,10 zł</span>' +
        '<span>58,20 zł</span>' +
        '<div class="dropButton">' +
        '<button>Do koszyka</button>' +
        '<div>' +
        '<button onclick="add(25)">20 cm</button>' +
        '<button onclick="add(26)">27 cm</button>' +
        '<button onclick="add(27)">40 cm</button>' +
        '<button onclick="add(28)">60 cm</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Ser, Ananas, Kurczak</span>' +
        '</div>' +
        '</div>';

    return text;
}

function showSpecial() {
    var text = "";
    text += '<h1>Menu sezonowe</h1>' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>WŁASNA</span>' +
        '<div class="price">' +
        '<span>20 cm&nbsp;&nbsp;</span>' +
        '<span>27 cm&nbsp;&nbsp;</span>' +
        '<span>40 cm&nbsp;&nbsp;</span>' +
        '<span>60 cm&nbsp;&nbsp;</span>' +
        '<button onclick="ownPizza()">Stwórz</button>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Do 5 składników</span>' +
        '</div>' +
        '</div >' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>1.VEGE&#127807;</span>' +
        '<div class="price">' +
        '<span>11,50 zł</span>' +
        '<span>17,50 zł</span>' +
        '<span>30,20 zł</span>' +
        '<span>59,50 zł</span>' +
        '<div class="dropButton">' +
        '<button>Do koszyka</button>' +
        '<div>' +
        '<button onclick="add(29)">20 cm</button>' +
        '<button onclick="add(30)">27 cm</button>' +
        '<button onclick="add(31)">40 cm</button>' +
        '<button onclick="add(32)">60 cm</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Szpinak, Czosnek, Mozzarella, Lazur</span>' +
        '</div>' +
        '</div>' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>2. La BAMBA</span>' +
        '<div class="price">' +
        '<span>12,50 zł</span>' +
        '<span>20,90 zł</span>' +
        '<span>36,60 zł</span>' +
        '<span>69,90 zł</span>' +
        '<div class="dropButton">' +
        '<button>Do koszyka</button>' +
        '<div>' +
        '<button onclick="add(33)">20 cm</button>' +
        '<button onclick="add(34)">27 cm</button>' +
        '<button onclick="add(35)">40 cm</button>' +
        '<button onclick="add(36)">60 cm</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Krewetko koktajlowe, Ser, Czosnek, Szynka</span>' +
        '</div>' +
        '</div>' +
        '<div class="menuRow">' +
        '<div class="pizzaNameRow">' +
        '<span>4.MEXICANA&#128293;</span>' +
        '<div class="price">' +
        '<span>11,00 zł</span>' +
        '<span>17,00 zł</span>' +
        '<span>28,90 zł</span>' +
        '<span>55,80 zł</span>' +
        '<div class="dropButton">' +
        '<button>Do koszyka</button>' +
        '<div>' +
        '<button onclick="add(37)">20 cm</button>' +
        '<button onclick="add(38)">27 cm</button>' +
        '<button onclick="add(39)">40 cm</button>' +
        '<button onclick="add(40)">60 cm</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Chili, Ser, Mięso, Peperoni</span>' +
        '</div>' +
        '</div>';

    return text;
}

function ownPizza() {
    location.href = "ownpizza.html";
}