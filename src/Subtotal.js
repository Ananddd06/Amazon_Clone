import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './Stateprovider';
import { getBasketTotal } from './reducer';

function Subtotal() {
  const[{basket}, dispatch] = useStateValue(); 
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <p className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

        <button>
            Procced to Checkout
        </button>
    </div>
  );
}

export default Subtotal