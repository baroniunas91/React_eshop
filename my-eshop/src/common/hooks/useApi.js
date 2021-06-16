import { useState } from 'react';
import axios from 'axios';

const initialState = {
  isLoading: false,
  data: null,
};
function useApi() {
  const [state, setState] = useState(initialState);

  async function call(request) {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const { data } = await axios(request);
      setState({ data, isLoading: false });
    } catch (e) {
      setState((prev) => ({ ...prev, isLoading: false }));
      console.error(e);
      alert("Error. Can't fetch data!");
      //redirect to error page
    }
  }

  return {
    ...state,
    call,
  };
}

export default useApi;
