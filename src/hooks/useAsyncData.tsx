import { useEffect, useState } from 'react';

export interface AsyncData<T>{
  data:T,
  reload:()=>void,
  error:Error,
  isLoading:boolean,

}

export function useAsyncData<Type>(get:()=>Promise<Type>) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<Type>();
  useEffect(() => getData(), []);
  const getData = () => {
    get().then((val) => {
      setData(val); setIsLoading(false);
    }).catch((err) => setError(err));
  };

  const reload = () => {
    if (!isLoading) {
      setIsLoading(true);
      getData();
    }
  };

  return { data, error, isLoading, reload } as AsyncData<Type>;
};
