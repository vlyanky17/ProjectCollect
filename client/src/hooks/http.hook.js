import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            console.log('hook')
            if (body) {    console.log('hook1')
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            console.log('hook2')

            const response = await fetch(url, {method, body, headers})
            console.log('hook3')
            const data = await response.json()
            console.log('hook4')
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
