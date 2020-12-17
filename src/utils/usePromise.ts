import { useState } from 'react' 


export enum RequestStatus {WAIT_CALL="WAIT_CALL", LOADING="LOADING", FAILURE="FAILURE", SUCCESS="SUCCESS"}

interface UsePromInfo<TData, TError> {
    status: RequestStatus
    data: TData | undefined
    error: TError | undefined
}







function usePromise<T extends any[], TP, TData, TError>(func: (...args: T) => {
    promise: Promise<TP>
    onThen: (data: TP) => TData 
    onCatch: (data: any) => TError
}){
    var [ info, setInfo ] = useState<UsePromInfo<TData, TError>>({
        status: RequestStatus.WAIT_CALL,
        data: undefined,
        error: undefined
    }) 
    

    var loading = info.status === RequestStatus.LOADING

    function call(...args: T){
        setInfo({
            ...info,
            error: undefined,
            status: RequestStatus.LOADING
        })

        var prom = func(...args)
        prom.promise.then((res)=> {
            setInfo({
                ...info,
                data: prom.onThen(res),
                status: RequestStatus.SUCCESS
            })

        }).catch((err)=>{
            setInfo({
                ...info,
                error: prom.onCatch(err),
                status: RequestStatus.FAILURE
            })
        })
    }


    return { call, status: info.status, data: info.data, error: info.error, loading }
}


export default usePromise;