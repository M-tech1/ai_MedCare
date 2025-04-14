import { useState, useEffect, useCallback } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(url: string, option?: RequestInit) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

const fetchData = useCallback(async ()=>{
setState(prev =>({...prev, loading: true, error: null}))

try{
    const response = await fetch(url, option)
    if(!response.ok){
        throw new Error(`Error ${response.status}${response.statusText}`)
    }
    const data = (await response.json()) as T;
    setState({data: null, loading:false, error:(error as Error).message})
}, [url, option]

useEffect(()=>{
fetchData()
},[fetchData])
})


return {...state, refetch, fetchData}

};


export default useFetch