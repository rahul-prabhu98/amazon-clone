class Cart {
    cartItems;
    #loadFromStorageKey;

    constructor(localStorageKey) {
        this.#loadFromStorageKey = localStorageKey ;
        this.#loadFromStorage();


    }

    #loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#loadFromStorageKey));

        if (!this.cartItems) {
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            },
            {
                productId: '8c9c52b5-5a19-4bcb-a5d1-158a74287c53',
                quantity: 11,
                deliveryOptionId: '2'
            }
            ];
        }
    }

    saveToStorage() {
        localStorage.setItem(this.#loadFromStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {
            matchingItem.quantity++;
        } else {
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }


        this.saveToStorage();
    }

    removeFromCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);