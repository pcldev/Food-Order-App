import React, { useRef, useState } from "react";
import style from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 5;

function Checkout(props) {
  const [formInputValidity, setFromInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();
  const confirmHandler = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const enterNameIsValid = !isEmpty(enteredName);
    const enterStreetIsValid = !isEmpty(enteredStreet);
    const enterCityIsValid = !isEmpty(enteredCity);
    const enterPostalIsValid = !isNotFiveChars(enteredPostal);

    setFromInputValidity({
      name: enterNameIsValid,
      street: enterStreetIsValid,
      city: enterCityIsValid,
      postalCode: enterPostalIsValid,
    });

    const formIsValid =
      enterNameIsValid &&
      enterStreetIsValid &&
      enterPostalIsValid &&
      enterCityIsValid;
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };
  const nameControlClasses = `${style.control} ${
    formInputValidity.name ? "" : style.invalid
  }`;
  const streetControlClasses = `${style.control} ${
    formInputValidity.street ? "" : style.invalid
  }`;
  const postalCodeControlClasses = `${style.control} ${
    formInputValidity.postalCode ? "" : style.invalid
  }`;
  const cityControlClasses = `${style.control} ${
    formInputValidity.city ? "" : style.invalid
  }`;
  return (
    <form className={style.form}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameRef} type="text" id="name" />
      </div>
      {!formInputValidity.name && <p>Please enter your name</p>}
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetRef} type="text" id="street" />
      </div>
      {!formInputValidity.street && <p>Please enter street</p>}
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalRef} type="text" id="postal" />
      </div>
      {!formInputValidity.postalCode && <p>Please enter a valid postal code</p>}
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityRef} type="text" id="city" />
      </div>
      {!formInputValidity.city && <p>Please enter your city</p>}
      <div className={style.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={style.submit} onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
