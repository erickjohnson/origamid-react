import React from 'react'

const useFetch = (key, initial) => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const request = React.useCallback(async (url, options)=>{
    let response, json
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
    } catch(error){
      json = null
      setError(error)
    } finally {
      setData(json)
      setLoading(false)
      return [response, request]
    }
  }, [])
  
  return {data, error, loading, request}
}

export default useFetch