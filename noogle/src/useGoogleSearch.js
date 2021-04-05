import { useState, useEffect } from 'react'
import API_KEY from "./keys"

const CONTEXT_KEY = "132f03f74f00c30fe"
//term passed in hook as value
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then(response => response.json())
        .then(result => {
        setData(result)
      })
    }
    fetchData()

  }, [term]) //data layer variable

  return { data }
};

export default useGoogleSearch
