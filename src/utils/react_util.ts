/**
 * Implement a custom hook to call web service while providing
 * loading status and message for the waiting React component.
 * 
 */

import { useState } from "react";

type FuncAsync<T> = (arg? : T | undefined) => Promise<any>;
type FuncResult = { success: boolean, data: any };
type FuncAsyncRes<T> = (arg? : T | undefined) => Promise<FuncResult>;

export function useAsyncStatus<T>(funcAsync: FuncAsync<T>) : [boolean, FuncAsyncRes<T>] {

  const [loading, setLoading] = useState(false);

  const callFuncAsync : FuncAsyncRes<T> = async (arg?) : Promise<FuncResult> => {
    setLoading(true);

    let result : FuncResult = { success: false, data: null };
    try {
      result = { success: true, data: await funcAsync(arg) };
    }
    catch (err: any) {
      result = { success: false, data: err };
    }

    setLoading(false);
    return result;
  };

  return [ loading, callFuncAsync ];
}
