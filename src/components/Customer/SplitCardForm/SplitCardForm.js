import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import React, { useMemo, useState } from "react";
const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};
const SplitCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentErrorMessage, setpaymentErrorMessage] = useState(null);
  const [paymentSuccessMessage, setpaymentSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    //console.log("[PaymentMethod]", payload);
    if (payload.error) {
      console.log(payload.error.message);
      setpaymentErrorMessage(payload.error.message);
      setpaymentSuccessMessage(null);
    } else {
      console.log("[PaymentMethod]", payload);
      setpaymentErrorMessage(null);
      setpaymentSuccessMessage("Payment done successfully");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label >
          Card number
          <CardNumberElement  
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        
        <label>
          Expiration date
          <CardExpiryElement 
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        
        <label>
          CVC
          <CardCvcElement 
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
    
        <button  type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentErrorMessage && (
        <p style={{ color: "red" }}>{paymentErrorMessage}</p>
      )}
      {paymentSuccessMessage && (
        <p style={{ color: "green" }}>{paymentSuccessMessage}</p>
      )}
    </div>
  );
};

export default SplitCardForm;
