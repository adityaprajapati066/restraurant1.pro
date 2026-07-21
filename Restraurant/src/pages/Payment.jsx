import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

function Payment() {

  const location = useLocation();
  const navigate = useNavigate();

  const [paymentVerified, setPaymentVerified] = useState(false);

  const amount = location.state?.amount || 0;


  const upiId = "yourupiid@upi";

  const paymentURL =
    `upi://pay?pa=${upiId}&pn=Restaurant&am=${amount}&cu=INR`;
  
    const havepaid =()=>{
        alert("Please wait,verifying payment...")

        setPaymentVerified(true);
    };
   

  const paymentDone = () => {

  alert("Payment Successful");

  navigate("/order", {
    state: location.state.cart
  });

};


  return (
    <div className="container text-center mt-5">

      <h2>Payment Page</h2>

      <h4>
        Amount: ₹{amount}
      </h4>


      <QRCodeCanvas
        value={paymentURL}
        size={250}
      />


      <p>
        Scan QR Code using UPI App
      </p>
        
        
      {
        !paymentVerified? (
            <button className="btn btn-warning shadow-xl/50"
             onClick={havepaid}
            >
                I have paid
            </button>
        ) : (
            <button className="btn btn-success shadow-xl/60"
             onClick={paymentDone}
            >
                Payment Done
            </button>
        )
      }
    </div>
  );
}


export default Payment;