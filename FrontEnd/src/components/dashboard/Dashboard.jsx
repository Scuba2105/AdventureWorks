import { useState, useEffect } from 'react'

export function Dashboard() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        async function fetchData() {
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
        }
        
        fetchData();
    }, [])
    
    if (isLoading == true) {
        return (
            <div>Loading...</div>
        )
    }
    else if (error == true) {
        return (
            <div>An error occurred!</div>
        )
    }
    else {
        return (
            <div>Successfully Loaded Data</div>
        )
    } 

}