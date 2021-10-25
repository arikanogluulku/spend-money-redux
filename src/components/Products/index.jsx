import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeBasket } from '../../redux/spendSlice/spendSlice'
import { moneyFormatter } from '../../utils/currency'
import './style.scss'
function Products() {
    const items = useSelector(state => state.spends.items)
    const basket = useSelector(state => state.spends.basket)
    const totalPrice = useSelector(state => state.spends.totalPrice)
    const count = 1;
    const dispatch = useDispatch();
    const handleBuy = (item) => {
        dispatch(addToBasket({ ...item, count }))
    }
    const handleSell = (item) => {
        dispatch(removeBasket({ ...item }))
    }
    const basketCount = (item) => {
        const itemSelected = basket.find((i) => i.id === item.id)
        if (itemSelected) {
            return itemSelected.count;
        } else {
            return 0;
        }
    }
    return (
        <div className="product">
            {
                items.map((item) =>
                    <div className="product__item">
                        <img src={item.img} alt="item" />
                        <h1>{item.name}</h1>
                        <p>{moneyFormatter.format(item.price)}</p>
                        <div className="control">
                            <button className="control__button control__button-sell"
                                disabled={basketCount(item) > 0 ? false : true}
                                onClick={() => handleSell(item)}
                            >
                                SELL
                            </button>
                            <input type="number" value={basketCount(item)} />
                            <button className="control__button control__button-buy"
                                disabled={totalPrice < (count * item.price) && true}
                                onClick={() => handleBuy(item)}
                            >
                                BUY

                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Products
