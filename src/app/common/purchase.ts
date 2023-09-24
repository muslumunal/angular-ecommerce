import {Customer} from "./customer";
import {Address} from "./address";
import {Order} from "./order";
import {OrderItem} from "./order-item";

export class Purchase {
  customer: Customer | any;
  shippingAddress: Address | any;
  billingAddress: Address | any;
  order: Order | any;
  orderItems: OrderItem[] | any;

}
