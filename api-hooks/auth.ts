import { useState, useCallback } from "react";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const login = async (username: string, password: string) => {
    const response = await fetch(
      "https://5jcp59816b.execute-api.us-east-1.amazonaws.com/dev/api/auth/login",
      {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials: "include",
      }
    );
    const data = await response.json();

    if (response.status === 401) {
      const error = new Error("Unauthorized");
      throw error;
    }

    return data;
  };

  const execute = async (username: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await login(username, password);
      setData(response);
      setIsLoading(false);
      return response;
    } catch (e: any) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    user: data,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};
