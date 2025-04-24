export type ProductDef = {
  title: string;
  description: string;
  cost: {
    price: string;
    unit: string;
    from?: boolean;
  };
  type: 'buy' | 'order';
};
