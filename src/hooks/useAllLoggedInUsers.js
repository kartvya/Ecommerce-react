import { useDidMount } from "@/hooks";
import { useEffect, useState } from "react";
import firebase from "@/services/firebase";

const useAllLoggedInUsers = () => {
  const [loggedInUsers, setLoggedInUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchLoggedInUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getAllUsers();

      if (docs.empty) {
        if (didMount) {
          setError("No recommended products found.");
          setLoading(false);
        }
      } else {
        const items = [];

        docs.forEach((snap) => {
          const data = snap.data();
          items.push({ id: snap.ref.id, ...data });
        });

        if (didMount) {
          setLoggedInUser(items);
          setLoading(false);
        }
      }
    } catch (e) {
      if (didMount) {
        setError("Failed to fetch recommended products");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (loggedInUsers.length === 0 && didMount) {
      fetchLoggedInUsers();
    }
  }, []);

  return {
    loggedInUsers,
    fetchLoggedInUsers,
    isLoading,
    error,
  };
};

export default useAllLoggedInUsers;
