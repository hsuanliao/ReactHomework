const initialState = {
    productList: [
        {
            url: 'http://placehold.it/100x70',
            name: 'Product 1',
            price: 100,
            qty: 2
        },
        {
            url: 'http://placehold.it/100x70',
            name: 'Product 2',
            price: 150,
            qty: 1
        },
        {
            url: 'http://placehold.it/100x70',
            name: 'Product 3',
            price: 300,
            qty: 5
        }
    ]
}

export function productReducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_QTY':
            var index = action.index;
            var newQty = parseInt(action.qty);
            
            let productList = [
                ...state.productList.slice(0, index),
                Object.assign({}, state.productList[index], { qty: newQty }),
                ...state.productList.slice(index + 1)
            ]; 
            return Object.assign({}, { productList: productList });
        default:
            return state;
    }
}