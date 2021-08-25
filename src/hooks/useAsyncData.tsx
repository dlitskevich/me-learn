import { useEffect, useState } from 'react';

export interface AsyncData<T>{
  data:T,
  reload:()=>void,
  error:Error,
  isLoading:boolean,

}

export function useAsyncData<T>(get:()=>Promise<T>) {
  const [isLoading, setIsLoading] = useState<boolean|undefined>();
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<T>();

  useEffect(() => getData(), []);

  const getData = () => {
    if (!isLoading) {
      setIsLoading(true);
      get().then((val) => setData(val))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    }
  };

  return { data, error, isLoading, reload: getData } as AsyncData<T>;
};
