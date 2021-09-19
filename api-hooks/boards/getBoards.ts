import { useState, useCallback } from "react";

export const getBoards = async (options: any) => {
  const response = await fetch(
    "https://5jcp59816b.execute-api.us-east-1.amazonaws.com/dev/api/boards",
    options
  );
  const data = await response.json();
  return data;
};

export const useGetBoards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async (options = {}) => {
    try {
      setIsLoading(true);
      const boards = await getBoards(options);
      setData(boards);
      setIsLoading(false);
      return boards;
    } catch (e: any) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    boards: data,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};
