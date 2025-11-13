import axios from "axios";
import { useEffect, useState } from "react";

export function useGetName() {
  let [name, setName] = useState(null);
  useEffect(() => {
    async function fetchUserName() {
      try {
        const response = await axios.get("/username.json");
        console.log(response.data);
        setName(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserName();
  }, []);

  return { name };
}
