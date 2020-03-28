import axios from "axios";
import { useEffect, useReducer, useState } from "react";

// const NYT_API_KEY = u80Uoj6gcmvGVb0vO3eQRqpbITkdcggN;

export default function useApplicationData() {
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";

  function reducer(state, action) {
    switch (action.type) {
      case SET_APPLICATION_DATA:
        return {
          ...state,
          lists: action.value.lists
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }
  const [state, dispatch] = useReducer(reducer, {});
  useEffect(() => {
    Promise.all([
      axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/overview.json?&api-key=u80Uoj6gcmvGVb0vO3eQRqpbITkdcggN`
      )
    ]).then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          lists: all[0].data
        }
      });
    });
  }, []);

  const GetResource = function(url) {
    const [data, setData] = useState({ data: [] });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      axios
        .get(url)
        .then(res => setData(res.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }, []);

    return { data, error, loading };
  };
  return { state, GetResource };
}
