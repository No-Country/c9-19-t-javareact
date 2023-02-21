export const persistLocalStorage = <T,>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const clearLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };
  
  export const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem("token")
    if(token) {
      return JSON.parse(token)
    }
    else {
      return undefined
    }
  }; 