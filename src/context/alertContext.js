import { createContext, useContext, useState } from 'react';

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [alertData, setAlertData] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...alertData,
        onOpen: (prev) => setAlertData({ ...prev, isOpen: true }),
        onClose: (prev) => setAlertData({ ...prev, isOpen: false }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
