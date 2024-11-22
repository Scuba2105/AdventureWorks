import { useState, useEffect } from 'react'

export function Dashboard() {
    [data, setData] = useState(null)
    [loading, setIsLoading] = useState('true')
    [error, setError] = useState('false')
    
    useEffect(async () => {
        try {
            const res = await fetch('http://localhost:5000/dashboardData')

            if (!res.ok) {
                throw new Error('An error occurred retrieving the data')
            }

            const dashboardData = await res.json();
            console.log(dashboardData)
            setData(dashboardData)
            setIsLoading(false)
        }
        catch (error) {
            setIsLoading(false)
            setError(true)
        }
    }, [data, loading, error])
    
    if (loading == 'true') {
        return (
            <div>Loading...</div>
        )
    }
    else if (error == 'false') {
        return (
            <div>An error occurred</div>
        )
    }
    else {
        return (
            <div>Successfully Loaded Data</div>
        )
    } 

}