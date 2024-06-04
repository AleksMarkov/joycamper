export const validateName = (name) => {
    return name.length > 2;
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validateDate = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); 
    return selectedDate >= currentDate;
  };
  