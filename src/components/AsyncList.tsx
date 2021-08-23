/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';
import { useAsyncData } from '../hooks/useAsyncData';
import './index.css';

type Props<T> = {
  get:()=>Promise<T[]>;
  renderItem:(item:T, index:number)=> ReactNode
}

export const AsyncList = <T, >({ get, renderItem }:Props<T>) => {
  const { isLoading, error, data } = useAsyncData<T>(get);
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return (
      <div className="loading">
        loading
      </div>
    );
  }
  if (isLoading === undefined) {
    return null;
  }
  if (!data?.length) {
    return (
      <div className="">
        No Data
      </div>
    );
  }
  return (
    <>
      {data.map((element, index) => renderItem(element, index))}
    </>
  );
};
