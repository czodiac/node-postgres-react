import { React, useState } from 'react'

export const EditMerchantForm = (obj) => {
    const [name, setName] = useState(obj.merchant.name)
    const [email, setEmail] = useState(obj.merchant.email)
    const nameChanged = e => {
        setName(e.target.value)
    }
    const emailChanged = e => {
        setEmail(e.target.value)
    }
    const updateMerchant = () => {
        fetch('http://localhost:3001/merchants/' + obj.merchant.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        }).then(response => {
            return response.text();
        }).then(data => {
            obj.updateMsg(data)
            obj.getMerchant()
        })
    }

    const deleteMerchant = () => {
        fetch(`http://localhost:3001/merchants/${obj.merchant.id}`, {
            method: 'DELETE'
        }).then(response => {
            return response.text();
        }).then(data => {
            obj.updateMsg(data)
            obj.getMerchant()
        })
    }

    return (
        <>
            -&nbsp;
            <input value={name} onChange={nameChanged}></input>
            <input value={email} onChange={emailChanged}></input>
            <button onClick={updateMerchant}>Update</button>
            <button onClick={deleteMerchant}>Delete</button>
        </>
    )
}