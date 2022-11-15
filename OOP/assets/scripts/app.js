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

class ShoppingCart {
    items = [];

    addProduct(product) {
        this.items.push(product);
        this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
    }

    render() {
        const cartElement = document.createElement('section');
        cartElement.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        cartElement.className = 'cart';
        this.totalOutput = cartElement.querySelector('h2');
        return cartElement;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const productElement = document.createElement('li');
        productElement.className = 'product-item';
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
        addCartButton.addEventListener('click', this.addToCart.bind(this));

        return productElement;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');

        this.cart = new ShoppingCart();
        const renderCart = this.cart.render();
        const renderProductList = new ProductList().render();

        renderHook.append(renderCart);
        renderHook.append(renderProductList);
    }
}

class ProductList {
    products = [
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

    render() {        
        const productList = document.createElement('ul');
        productList.className = 'product-list';
        for (const product of this.products) {
            const productItem = new ProductItem(product);
            productList.append(productItem.render());
        }
        return productList;
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        // Needs to be rendered first or it will generate an error.
        shop.render();
        this.cart = shop.cart;        
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();