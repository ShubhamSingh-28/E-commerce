import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

export default function Shipping() {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "", 
    pinCode: "",
    state: "",
    country: ""
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="shipping">
      <button className="back-btn"><BiArrowBack/></button>

      <form>
        <h1>Shipping Address</h1>
        <input type="text" name="address" placeholder="Address"
          value={shippingInfo.address} onChange={changeHandler}
          required/>

        <input type="text" name="city" placeholder="City"
          value={shippingInfo.city} onChange={changeHandler}
          required/>

        <input type="text" name="state" placeholder="State"
          value={shippingInfo.state} onChange={changeHandler}
          required/>

        <select name="country" 
          required
          value={shippingInfo.country} 
          onChange={changeHandler}>
          <option value="">Choose Country</option>
          <option value="India">India</option>
        </select>

        <input type="number" name="pinCode" placeholder="Pincode"
          value={shippingInfo.pinCode} onChange={changeHandler}
          required/>

          <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
