import { useDidMount } from "@/hooks";
import { useEffect, useState } from "react";
import firebase from "@/services/firebase";

const useGetAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchAllOrders = async () => {
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
          setAllOrders(items);
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
    if (allOrders.length === 0 && didMount) {
      fetchAllOrders();
    }
  }, []);

  return {
    allOrders,
    fetchAllOrders,
    isLoading,
    error,
  };
};

export default useGetAllOrders;
