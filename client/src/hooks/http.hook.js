import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {

            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

console.log('http')
            console.log(body)

            const response = await fetch(url, {method, body, headers})
            console.log('response')
            const data = await response.json()
            console.log('data')
            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
                console.log('rec err')
            }

            setLoading(false)

            return data
        } catch (e) {
            console.log('hookEr')
            setLoading(false)
            setError(e.message)
            alert(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}
