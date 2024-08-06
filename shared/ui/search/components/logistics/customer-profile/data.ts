import MagnifyingGlassIconColor from '@components/icons/magnifying-glass-color';
import { getRandomArrayElement } from '@utils/get-random-array-element';
import ShipWithContainer from '@components/icons/ship-with-container';
import TransactionIcon from '@components/icons/transactions';
import CargoDamaged from '@components/icons/cargo-damaged';
import InvoicePrint from '@components/icons/invoice-print';
import RefundIcon from '@components/icons/refund';
import TurtleIcon from '@components/icons/turtle';
import { avatarIds } from '@utils/get-avatar';

export const customer = {
  avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-${getRandomArrayElement(
    avatarIds
  )}.png`,
  name: 'Irene Powlowski',
  email: 'johnson.olson@yahoo.com',
  phone: '(440) 701-6597',
  address: '49001 Mossie Row Berkshire',
  branch: 'Main-Branch',
};

export const stats = [
  {
    icon: TransactionIcon,
    label: 'Transactions',
    value: 2890,
    isCurrency: true,
  },
  { icon: InvoicePrint, label: 'Due', value: 2890, isCurrency: true },
  { icon: RefundIcon, label: 'Refund', value: 310, isCurrency: true },
  { icon: ShipWithContainer, label: 'Shipments', value: 120 },
  { icon: CargoDamaged, label: 'Damaged', value: 8 },
  { icon: TurtleIcon, label: 'Late Delivery', value: 34 },
  { icon: MagnifyingGlassIconColor, label: 'Lost Shipment', value: 2 },
];
