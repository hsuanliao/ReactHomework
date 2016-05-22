export function changeQty(index, newQty) {
    return {
        type: "CHANGE_QTY",
        index: index,
        qty: newQty
    }
}