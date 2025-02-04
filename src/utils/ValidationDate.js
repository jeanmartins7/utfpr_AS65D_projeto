export const validateDate = (date) => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
  
    if (!dateRegex.test(date)) {
      return false;
    }
  
    const [day, month, year] = date.split('/').map(Number);
  
    const isValidDate = (d, m, y) => {
      const dateObj = new Date(y, m - 1, d);
      return (
        dateObj.getFullYear() === y &&
        dateObj.getMonth() === m - 1 &&
        dateObj.getDate() === d
      );
    };
  
    return isValidDate(day, month, year);
  };
  