import {addToCart, cart} from '../../data/cart.js'

describe('Test suite: Add to cart', () => {
    it('Adds an existing product to the cart', ()=>{

    });

    it('Adds a new product to the cart', ()=>{
        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });

        console.log(localStorage.getItem('cart'));

        addToCart('8c9c52b5-5a19-4bcb-a5d1-158a74287c53');
        expect(cart.length).toEqual(1);
    });
});