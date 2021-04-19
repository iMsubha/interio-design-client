import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import React, { useMemo, useState } from "react";
import { Card } from "react-bootstrap";
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
    
     <Card>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column justify-content-center">
          <label className="form-control border-0">
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

          <label className="form-control border-0">
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

          <label className="form-control border-0">
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
          <button type="submit" disabled={!stripe} className="text-dark font-weight-bold mt-2 p-3">
            Pay
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center">
      {paymentErrorMessage && (
          <p style={{ color: "red" }}>{paymentErrorMessage}</p>
        )}
        {paymentSuccessMessage && (
          <p style={{ color: "green" }}>{paymentSuccessMessage}</p>
        )}
      </div>
      </Card>
    
  );
};

export default SplitCardForm;
