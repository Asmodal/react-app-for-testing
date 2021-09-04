import { useState, useEffect} from "react";

// Hook
function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(()=> {
      let value;
      try {
          value = JSON.parse(window.localStorage.getItem(key)) || initialValue
      }
      catch(e) {
        value = initialValue;
      }
      return value
  }) 

  useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])
  
  return [state, setState];
}

export default useLocalStorage;