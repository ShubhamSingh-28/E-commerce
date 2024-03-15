import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
type CartItemprops = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cartItem: any;
};
const CartItem=({cartItem}:CartItemprops)=> {

    const {photo, name, prodectId, price, quantity} =cartItem;

  return (
    <div className="cart-item">
        <img src={photo} alt={name} />
        <article>
            <Link to={`prodect/${prodectId}`}>
                {name}
            </Link>
            <span>{price}</span>
        </article>
        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>

        <button><FaTrash/></button>
    </div>
  )
}

export default CartItem;