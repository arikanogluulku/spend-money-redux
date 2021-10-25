import React from 'react'
import { useSelector } from 'react-redux'
import './style.scss'
import { moneyFormatter } from '../../utils/currency'

function Receipt() {
    const basket = useSelector(state => state.spends.basket)
    const spentPrice = useSelector(state => state.spends.spentPrice)

    return (
        <>
            {
                basket.length > 0 && (
                    <div className="receipt">
                        <h1>Your Receipt</h1>
                        {
                            basket.map((item) =>
                                <div key={item.id} className="receipt__item">
                                    <div className="receipt__item-name">{item.name}</div>
                                    <div className="receipt__item-count">x<strong>{item.count}</strong></div>
                                    <div className="receipt__item-price">{moneyFormatter.format(item.price)}</div>
                                </div>
                            )
                        }
                        <div className="receipt__total">
                            <span>TOTAL</span>
                            <div className="receipt__total-price">{moneyFormatter.format(spentPrice)}</div>
                        </div>
                    </div>

                )
            }
        </>


    )
}

export default Receipt
