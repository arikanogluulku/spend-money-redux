import React from 'react'
import {useSelector} from 'react-redux'
import { moneyFormatter } from '../../utils/currency'
import './style.scss'

function Money() {
    const money = useSelector(state => state.spends.totalPrice)
    return (
        <div className="money__container">
           {moneyFormatter.format(money)}
        </div>
    )
}

export default Money
