// CartItem.jsx
import React from 'react'
import { useShoppingContext } from '../contexts/ShoppingContext'
import { formatCurrency } from '../helpers/common'

type CartItemProps = {
    id: number
    name: string
    price: number
    qty: number
    image: string
}

const CartItem = ({ id, name, price, qty, image }: CartItemProps) => {
    const { increaseQty, decreaseQty, removeCartItem } = useShoppingContext()

    return (
        <tr>
            <td><img src={image} className="img-fluid rounded" alt="Product" /></td>
            <td><span className="item-name">{name}</span></td>
            <td>
                <span className="item-quantity">
                    {formatCurrency(price)} <i className="fa-solid fa-xmark"></i> {qty}
                </span>
                <button type="button" className="btn btn-sm btn-primary ms-2" onClick={() => decreaseQty(id)}><strong>-</strong></button>
                <button type="button" className="btn btn-sm btn-primary ms-2" onClick={() => increaseQty(id)}><strong>+</strong></button>
            </td>
            <td><span className="item-price">{formatCurrency(qty * price)}</span></td>
            <td>
                <button className="btn btn-sm btn-danger" onClick={() => removeCartItem(id)}><i className="fas fa-trash-alt"></i></button>
            </td>
        </tr>
    )
}

export default CartItem
