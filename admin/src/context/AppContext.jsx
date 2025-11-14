/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currency = '.000 VNĐ';

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  }

  const formatSlotDate = (slotDate) => {
    if (!slotDate) return '—';
    const [day, month, year] = String(slotDate).split('_');
    const dd = String(Number(day)); // remove leading zeros
    const mm = String(month).padStart(2, '0');
    return `${dd} tháng ${mm}, ${year}`;
  }

  const formatCurrency = (amount) => {
    if (!amount) return '0 ' + currency;
    return new Intl.NumberFormat('vi-VN').format(amount) + '' + currency;
  }

  const value = {
    calculateAge,
    formatSlotDate,
    currency,
    formatCurrency,
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;