import { Dictionary } from "@reduxjs/toolkit"
import { useState, useEffect } from "react"
import usePromise from "./usePromise"

var cache: Dictionary<any> = {}

function useCached<T extends any[], TP, TData, TError>(key: string, func: (...args: T) => {
    promise: Promise<TP>
    onThen: (data: TP) => TData
    onCatch: (data: any) => TError
}) {
    var [ isCached, setIsCached ] = useState(key in cache) 
    var { call, data, error } = usePromise(func)

    
    useEffect(() => {
        if(data) {            
            cache[key] = data
            setIsCached(true)
        }
    }, [data])


    const get = (): TData | undefined  => cache[key]

    var loading = !isCached

    return { get, update: call, loading, error }
}

export default useCached;