export const getCartState = store => store.cart;

export const getCartList = store =>
    getCartState(store) ? getCartState(store).allIds : []

export const getCartById = (store, id) =>
    getCartState(store) ? { ...getCartState(store).byIds[id], id } : {}

export const getCart = store =>
    getCartList(store).map(id => getCartById(store, id))