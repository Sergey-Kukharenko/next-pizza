import { ICartStateItem } from '@/lib/get-cart-details';
import { CreateCartItemValues } from '@/services/dto/cart.dto';
import { useCartStore } from '@/store';
import { useEffect } from 'react';

type ReturnProps = {
  totalAmount: number;
  items: ICartStateItem;
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = () => {
  const cartState = useCartStore((state) => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
