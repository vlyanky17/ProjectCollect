import React, {useCallback, useContext, useEffect, useState} from 'react'



export const ComTryMap = ({ outcom }) => {
    if (!outcom.length) {
        return <p className="center">нет коментариев</p>
    }
    return(<div>
        <table class="resp-tab">
        <thead>
        <tr>

        <th>комментарии</th>
        </tr>
        </thead>
      
        <tbody>
        { outcom.map((itm, index) => {
                    return (
                        <tr key={itm._id}>
                    <td>{itm.comen}</td>
                    </tr>
            )
            }) }
        </tbody>

        </table>
)
}

export default ComTryMap;