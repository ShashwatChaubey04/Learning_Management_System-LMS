import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({children}) => {

  const currency = import.meta.env.VITE_CURRENCY   
  const [allCourses, setAllCourses] = useState([])
  
  const value = {
    currency
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

/*
This code is used to create a global data storage in React.
Instead of passing data from parent → child → grandchild → great-grandchild (which gets messy),
You put the data in a Context (AppContext) and wrap your app with AppContextProvider.
Now, any component inside can directly get that data without prop drilling.

👉 Use case example in one line:
If you want to share user info, theme (dark/light), or cart items across your whole app, you use this code.
*/