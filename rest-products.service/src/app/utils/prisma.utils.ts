export const ProductsFields = {
    id: true,
    plu: true,
    name: true,
}

export const ShopsFields = {
    id: true,
    name: true,
}

export const StocksFields = {
    id: true,
    quantityOnShelf: true,
    productId: true,
    shopId: true,
}

export const OrdersFields = {
    id: true,
    quantityInOrder: true,
    productId: true,
    shopId: true,
}
