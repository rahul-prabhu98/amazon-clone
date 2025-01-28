import { formatCurrency } from "../scripts/utils/money.js";

//name of the test suite
describe('test suite: Formate currency', () => {
    //test name
    it('Convert cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('21.00');
    });

    it('Works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('Rounds up to the nearest cent', () => {
        expect(formatCurrency(20095)).toEqual('201.00');
    });
});