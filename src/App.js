import React, { useState, useEffect } from 'react'
import { MerchantsList } from './features/merchants/MerchantsList'

function App() {
    const [msg, setMsg] = useState('')
    const [merchants, setMerchants] = useState(false)

    useEffect(() => {
        getMerchant()
    }, []) // Runs only once.

    const updateMsg = (newMsg) => {
        setMsg(newMsg)
    }

    const getMerchant = () => {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text()
            }).then(data => {
                setMerchants(data)
            })
    }

    const createMerchant = () => {
        let name = prompt('Enter name')
        let email = prompt('Enter email')
        fetch('http://localhost:3001/merchants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                updateMsg(data)
                getMerchant()
            })
    }

    return (
        <div>
            {msg}
            <MerchantsList list={merchants} getMerchant={getMerchant} updateMsg={updateMsg} />
            <br />
            <button onClick={createMerchant}>Add merchant</button>
        </div>
    );
}

export default App