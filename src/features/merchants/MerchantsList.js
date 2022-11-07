import React from 'react'
import { EditMerchantForm } from './EditMerchantForm'

export const MerchantsList = (obj) => {
    let merchants = JSON.parse(obj.list);
    let output = ''
    if (merchants === false) {
        output = 'No merchants in the DB.'
    } else {
        output = merchants.map(m => (
            <>
                <tr>
                    <td>ID: {m.id}</td>
                    <td>Name: {m.name}</td>
                    <td>Email: {m.email}</td>
                    <td><EditMerchantForm merchant={m} getMerchant={obj.getMerchant} updateMsg={obj.updateMsg} /></td>
                </tr>
            </>
        ))
    }
    return (
        <section>
            <h2>Merchants</h2>
            <table>
                {output}
            </table>
        </section>
    )
}