function changeMenu(id) {
    var text = "";

    switch (id) {
        case 1: {
            text += showSpecial();
            break;
        }
        case 2: {
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
        '<button>Stwórz</button>' +
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
        '<button>Do koszyka</button>' +
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
        '<button>Do koszyka</button>' +
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
        '<button>Do koszyka</button>' +
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
        '<button>Do koszyka</button>' +
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
        '<button>Do koszyka</button>' +
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
        '<button>Do koszyka</button>' +
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
        '<button>Do koszyka</button>' +
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
        '<button>Stwórz</button>' +
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
        '<button>Do koszyka</button>' +
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
        '<button>Do koszyka</button>' +
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
        '<button>Do koszyka</button>' +
        '</div>' +
        '</div>' +
        '<div class="ingredients">' +
        '<span>Chili, Ser, Mięso, Peperoni</span>' +
        '</div>' +
        '</div>';

    return text;
}