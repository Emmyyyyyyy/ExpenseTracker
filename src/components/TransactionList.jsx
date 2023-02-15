import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './transaction'

export const TransctionList = () => {
    const {transactions} = useContext(GlobalContext)

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(item => (<Transaction key={item.id} transaction={item}/>))} 
            </ul>
        </>
    )
}