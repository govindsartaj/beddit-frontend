import { useState, useCallback } from "react";

export const useGetAllBoards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getAllBoards = async (options: any) => {
    const response = await fetch(
      "https://5jcp59816b.execute-api.us-east-1.amazonaws.com/dev/api/boards",
      options
    );
    const data = await response.json();
    return data;
  };

  const execute = async (options = {}) => {
    try {
      setIsLoading(true);
      const boards = await getAllBoards(options);
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

export const useGetBoard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getBoard = async (id: string, options: any) => {
    const response = await fetch(
      `https://5jcp59816b.execute-api.us-east-1.amazonaws.com/dev/api/boards/${id}`,
      options
    );
    const data = await response.json();

    return data;
  };

  const execute = async (id: string, options = {}) => {
    try {
      setIsLoading(true);
      const board = await getBoard(id, options);
      setData(board);
      setIsLoading(false);
      return board;
    } catch (e: any) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    board: data,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};
