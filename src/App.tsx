import { useState } from 'react';
import { useQuery } from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LineProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

import ProductCard from './ProductCard/ProductCard'

import { Wrapper } from './App.styles';

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products/')).json();


const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', getProducts
  );

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;
    
    if (isLoading) return <LineProgress />;
    if (error) return <div>Something went wrong...</div>

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(product => (
          <Grid item key={product.id} xs={12} sm={4}>
            <ProductCard product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
