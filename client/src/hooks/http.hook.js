import { useState, useCallback, useContext } from "react";
import AuthContext from "../context/AuthContext";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = useContext(AuthContext)
  const request = useCallback(
    async (url, method = "GET", body = null, headers = {token: `Bearer ${auth.token}`, id: auth.userId}) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        setLoading(true);
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
  );
  return { loading, request, error };
};
