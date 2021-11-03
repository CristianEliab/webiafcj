/**
 *
 * @param {*} input
 * @param {*} setchange
 * @param {*} name
 * @returns
 */
const validationFields = ({ input, setChange, name, type }) => {
  if (!input) {
    setChange(`Debes ingresar ${name}`);
    return false;
  } else if (type === "email") {
    validateEmail(input)
      ? setChange("")
      : setChange(`Debes ingresar un correo valido`);
    return validateEmail(input);
  } else if (type === "pass") {
    if (input.length > 6) {
      setChange("");
    } else {
      setChange(`La contraseña debe tener mínimo 6 carácteres`);
    }
  } else {
    setChange("");
    return true;
  }
};

/**
 *
 * @param {*} email
 * @returns
 */
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export { validationFields, validateEmail };
