// Cart is stored as an array of { id, qty } entries (qty >= 1) rather than a
// flat list of ids, so the same book can be added more than once. These pure
// helpers are shared by the reducer and by the Firestore sync calls so both
// stay in lockstep with the same transition logic.

export function incrementCartItem(cartList, id) {
  const existing = cartList.find((entry) => entry.id === id);
  if (existing) {
    return cartList.map((entry) =>
      entry.id === id ? { ...entry, qty: entry.qty + 1 } : entry
    );
  }
  return [...cartList, { id, qty: 1 }];
}

export function decrementCartItem(cartList, id) {
  return cartList
    .map((entry) => (entry.id === id ? { ...entry, qty: entry.qty - 1 } : entry))
    .filter((entry) => entry.qty > 0);
}

export function getCartQty(cartList, id) {
  return cartList.find((entry) => entry.id === id)?.qty ?? 0;
}
