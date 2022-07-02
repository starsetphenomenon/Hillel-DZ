function Burger(size) {
    let price = 0,
        tug = 0,
        cal = 0;
    this.size = size;
    switch (this.size) {
        case 'small':
            price += 25;
            tug += 50;
            cal += 20;
            break;
        case 'medium':
            price += 35;
            tug += 75;
            cal += 30;
            break;
        case 'large':
            price += 45;
            tug += 100;
            cal += 40;
            break;
        default:
            console.log(`There is no such a burger as ${size}!`);
    }
    this.addTopping = function (val) {
        if (this.size === 'small' || this.size === 'medium' || this.size === 'large') {
            switch (val) {
                case 'chees':
                    price += 5;
                    tug += 10;
                    cal += 20;
                    break;
                case 'salad':
                    price += 5;
                    tug += 20;
                    cal += 5;
                    break;
                case 'potato':
                    price += 5;
                    tug += 15;
                    cal += 10;
                    break;
                default:
                    console.log(`There is no such a topping as ${val}!`);
            }
        }
    };
    this.getPrice = function () {
        return price + '$';
    };
    this.getCallories = function () {
        return cal;
    };
}

let burger = new Burger('small');

burger.addTopping('salad');
burger.addTopping('potato');

console.log("Price: " + burger.getPrice());
console.log("Callories: " + burger.getCallories());

/* Сеть фастфудов предлагает несколько видов гамбургеров:
маленький (50 тугриков, 20 калорий)
средний (75 тугриковб 30 каллорий)
большой (100 тугриков, 40 калорий)

Гамбургер может быть с одним из нескольких видов топпингов:
сыром (+ 10 тугриков, + 20 калорий)
салатом (+ 20 тугриков, + 5 калорий)
картофелем (+ 15 тугриков, + 10 калорий)

посыпать приправой (+ 15 тугриков, 0 калорий)
полить майонезом (+ 20 тугриков, + 5 калорий).
При этом начинок можно добавить несколько или не быть совсем
Напишите программу, расчитывающую стоимость и калорийность гамбургера. .
Пример работы кода: */

/* const hamburger = new Hamburger(SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);

console.log("Price with sauce: “ + hamburger.getPrice());
console.log("Callories with sauce: “ + hamburger.getCallories()); */