export interface Product {
  id: string;
  name: string;
  description: string;
  price: number
}

const generalDescription: string =
  'Lorem ipsum, or lipsum as it is sometimes known,' +
  ' is dummy text used in laying out print, graphic or web designs.' +
  ' The passage is attributed to an unknown typesetter in the 15th century' +
  ' who is thought to have scrambled parts of Cicero\'s' +
  ' De Finibus Bonorum et Malorum for use in a type specimen book.';

export const products: Product[] = [
  { id: '1', name: 'Fridge', description: generalDescription, price: 200 },
  { id: '2', name: 'Washer', description: generalDescription, price: 300 },
  { id: '3', name: 'Iron', description: generalDescription, price: 250 },
  { id: '4', name: 'TV', description: generalDescription, price: 233 },
  { id: '5', name: 'Kettle', description: generalDescription, price: 199 },
  { id: '6', name: 'Vacuum cleaner', description: generalDescription, price: 203 }
];

