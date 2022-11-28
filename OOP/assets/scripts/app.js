class Product {
    // Fields are not required if you are initializing them in the constructor.
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    // To pass values to the class, simply create a constructor.
    // This will allow you to call the class as if it were a function.
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

class Components {
    constructor(renderHookId, shouldRender = true) {
        this.hookId = renderHookId;
        if (shouldRender) {
            this.render();
        }
    }

    render() { }

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);

        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }

        document.getElementById(this.hookId).append(rootElement);

        return rootElement;
    }
}

class ElementAttributes {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

class ShoppingCart extends Components {
    #items = [];

    // Getters/Setters
    get #totalAmount() {
        const sum = this.#items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
        return sum;
    }

    set #cartItems(value) {
        this.#items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.#totalAmount.toFixed(2)}</h2>`;
    }

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        //this.items.push(product);
        const updatedItems = [...this.#items];
        updatedItems.push(product);
        this.#cartItems = updatedItems;
    }

    #orderProducts = () => {
        console.log('Ordering...');
        console.log(this.#items);
    }

    render() {
        const cartElement = this.createRootElement('section', 'cart');
        // const cartElement = document.createElement('section');
        cartElement.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        const orderButton = cartElement.querySelector('button');
        orderButton.addEventListener('click', () => this.#orderProducts());

        // cartElement.className = 'cart';
        this.totalOutput = cartElement.querySelector('h2');
        // return cartElement;
    }
}

class ProductItem extends Components {
    constructor(product, renderHookId) {
        super(renderHookId, false);
        this.product = product;
        this.render();
    }

    render() {
        const productElement = this.createRootElement('li', 'product-item');
        // const productElement = document.createElement('li');
        // productElement.className = 'product-item';
        productElement.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;

        // This gives you access to the button above.
        const addCartButton = productElement.querySelector('button');

        // Remember to bind the addToCart method to the event listener.
        addCartButton.addEventListener('click', this.#addToCart.bind(this));

        //return productElement;
    }

    #addToCart() {
        App.addProductToCart(this.product);
    }
}

class Shop {
    constructor() {
        // super();
        this.render();
    }

    render() {
        // const renderHook = document.getElementById('app');

        this.cart = new ShoppingCart('app');
        new ProductList('app');

        //const renderCart = this.cart.render();
        //this.cart.render();
        // const renderProductList = new ProductList('app').render();
        // const renderProductList = new ProductList('app');
        //renderProductList.render();
        //renderHook.append(renderCart);

        // This works with or without this line of code.
        // renderHook.append(renderProductList);
    }
}

class ProductList extends Components {
    #products = [];
    #cssClass = 'product-list';

    constructor(renderHookId) {
        super(renderHookId);
        this.#fetchProducts();
    }

    #fetchProducts() {
        this.#products = [
            new Product(
                'A Pillow',
                'https://www.dialabed.co.za/pub/media/catalog/product/cache/76de18cd004ad7313ccb973208c09700/p/i/pillow_beautyrest_01_med_1.jpg',
                'A soft pillow!',
                19.99
            ),
            new Product(
                'A Carpet',
                'https://flooringdepot.co.za/web/image/5322-007d2f8b/Kingston%20Room%20View%201024px.jpg',
                'A carpet which you might like - or not.',
                89.99
            ),
        ];
        this.#renderProducts(this.#cssClass);
    }

    #renderProducts(renderHookId) {
        for (const product of this.#products) {
            new ProductItem(product, renderHookId);
            // const productItem = new ProductItem(product, productList.id);
            // productList.append(productItem.render());
            // productItem.render();
        }
    }

    render() {
        // const productList = document.createElement('ul');
        const productList = this.createRootElement('ul', 'product-list', [new ElementAttributes('id', 'product-list')]);
        // productList.id = "product-list";
        // productList.className = 'product-list';
        if (this.products && this.products.length > 0) {
            this.#renderProducts(this.#cssClass);
        }
        return productList;
    }
}

class App {
    static #cart;

    static init() {
        const shop = new Shop();
        // Needs to be rendered first or it will generate an error.
        // shop.render();
        this.#cart = shop.cart;
    }

    static addProductToCart(product) {
        this.#cart.addProduct(product);
    }
}

App.init();

// class NewPerson {
//     name = 'Ed';
// }

// const p = new NewPerson();

// // instanceof = The instanceof operator in JavaScript is used to check the type of an object at run time.
// if (p instanceof NewPerson) {
//     console.log(p instanceof NewPerson);
// }


// function isEven(n) {
//     if(n % 2 === 0) return true;
//     return false;
// }

// console.log(isEven(6));

// function maxSum(num) {
//     let sum = 0;
//     for(let i = 1; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(maxSum(5));

// function startsWith(string) {
//     if (string.startsWith('a')) return true;
//     return false;
// }

// console.log(startsWith('Apple'));

// function endsWith(string) {
//     if (string.endsWith('a')) return true;
//     return false;
// }

// console.log(endsWith('Apple'));

// function splitAtX(string) {
//     const positionOfX = string.indexOf('x');
//     const firstHalf = string.slice(0, positionOfX);
//     const secondHalf = string.slice(positionOfX + 1);

//     if (firstHalf.length > secondHalf.length) return firstHalf;
//     return secondHalf;
// }

// console.log(splitAtX('before the x is shorter than after'));

// function hasOne(array) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element === 1) return true;
//     }
//     return false;
// }

// console.log(hasOne([1, 6,7,8,9,10,11]));

// function sumEven(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element % 2 === 0) sum += element;
//     }
//     return sum;
// }

// console.log(sumEven([1, 2, 3, 4, 5]));

// function unique(array) {
//     const uniqueArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (!uniqueArray.includes(element)) uniqueArray.push(element);
//     }
//     return uniqueArray;
// }

// console.log(unique([1, 1, 1, 1, 1, 1, 1]));

// function addOne(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i] + 1;
//         console.log(array[i]);
//     }
// }
// addOne([1]);

function removeOccurrences(array, num) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i] == num) {
            array.splice(i, 1);
            i--;
        }        
    }
    console.log(array);

    // for (let i = array.length - 1; i >= 0; i--) {
    //     if (array[i] == num) array.splice(i, 1);
    // }
    // console.log(array);
}
removeOccurrences([1, 2, 2, 3, 4, 3], 2);

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 },
]
function numberOfPizzas(orders) {
    let result = 0;
    orders.forEach(pizza => {
        result += pizza.pizzas;
    });
    return result;
}

numberOfPizzas(orders);