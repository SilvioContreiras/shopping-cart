import Button from '@material-ui/core/Button';
import { CartItemType } from '../App';
import { Wrapper } from './ProductCard.styles';


type Props = {
    product: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const ProductCard: React.FC<Props> = ({ product, handleAddToCart }) => (
    <Wrapper>
        <img src={product.image} alt={product.title} />
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>$ {product.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
    </Wrapper>
)

export default ProductCard;