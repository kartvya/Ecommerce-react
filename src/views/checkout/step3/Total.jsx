import { ArrowLeftOutlined, CheckOutlined } from "@ant-design/icons";
import { CHECKOUT_STEP_2 } from "@/constants/routes";
import { useFormikContext } from "formik";
import { displayMoney } from "@/helpers/utils";
import PropType from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPaymentDetails } from "@/redux/actions/checkoutActions";
import OrderSuccess from "./OrderSuccess/OrderSuccess";
import { addOrders } from "@/redux/actions/productActions";
import { clearBasket } from "@/redux/actions/basketActions";

const Total = ({ isInternational, subtotal }) => {
  const { values, submitForm } = useFormikContext();
  const [showSuccessOrder, setShowSuccessOrder] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const onClickBack = () => {
    // destructure to only select left fields omitting cardnumber and ccv
    const { cardnumber, ccv, ...rest } = values;

    dispatch(setPaymentDetails({ ...rest })); // save payment details
    history.push(CHECKOUT_STEP_2);
  };

  const onClickSubmit = () => {
    try {
      submitForm().then(() => {
        setShowSuccessOrder(true);
        // dispatch(addOrders(product));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="basket-total text-right">
        <p className="basket-total-title">Total:</p>
        <h2 className="basket-total-amount">
          {displayMoney(subtotal + (isInternational ? 50 : 0))}
        </h2>
      </div>
      <br />
      <div className="checkout-shipping-action">
        <button
          className="button button-muted"
          onClick={() => onClickBack(values)}
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp; Go Back
        </button>
        <button
          className="button"
          disabled={false}
          onClick={onClickSubmit}
          type="button"
        >
          <CheckOutlined />
          &nbsp; Confirm
        </button>
      </div>
      <OrderSuccess
        show={showSuccessOrder}
        onClose={() => {
          setShowSuccessOrder(false);
          dispatch(clearBasket());
        }}
      />
    </>
  );
};

Total.propTypes = {
  isInternational: PropType.bool.isRequired,
  subtotal: PropType.number.isRequired,
};

export default Total;
