import React from 'react';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransctionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

export default function App(){
    return (
        <GlobalProvider>
            <Header />
            <div className='container'>
                <Balance />
                <IncomeExpense />
                <TransctionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    )
}