let ErrorMessage = ({ items }) =>{

  let errorMessage = (items.length ===0 && <h3>I am still hungary.</h3>)
  return(
    <>{errorMessage}</>
    
  );
};

export default ErrorMessage;