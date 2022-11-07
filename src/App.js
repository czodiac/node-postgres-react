import React, { useState, useEffect } from 'react'

function App() {
    const [merchants, setMerchants] = useState(false)

    useEffect(() => {
        getMerchant()
    }, []) // Runs only once.

    const getMerchant = () => {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text()
            }).then(data => {
                setMerchants(data)
            })
    }

    const createMerchant = () => {
        let name = prompt('Enter merchant name')
        let email = prompt('Enter merchant email')
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
                alert(data)
                getMerchant()
            })
    }

    const deleteMerchant = () => {
        let id = prompt('Enter merchant ID');
        fetch(`http://localhost:3001/merchants/${id}`, {
            method: 'DELETE'
        }).then(response => {
            return response.text();
        }).then(data => {
            alert(data)
            getMerchant()
        })
    }

    return (
        <div>
            {merchants ? merchants : 'There is no merchant in the DB.'}
            <br />
            <button onClick={createMerchant}>Add merchant</button>
            <button onClick={deleteMerchant}>Delete merchant</button>
        </div>
    );
}

export default App