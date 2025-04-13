
import React from 'react';
import Layout from '@/components/layout/Layout';
import ShoppingCart from '@/components/cart/ShoppingCart';

const CartPage: React.FC = () => {
  return (
    <Layout>
      <ShoppingCart />
    </Layout>
  );
}

export default CartPage;
