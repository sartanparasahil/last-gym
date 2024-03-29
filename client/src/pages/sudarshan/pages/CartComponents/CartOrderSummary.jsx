import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react"
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import RazorPay from "../../../Payment";
import { formatPrice } from "./PriceTag";
const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color="white">
        {label}
      </Text>
      {value ? <Text color={"white"} fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const [qty, setQty] = React.useState(1)
  const [tax, setTax] = React.useState(50)

  React.useEffect(() => {
    const updateqty = userData?.cart[0]?.qty
    let newqty
    {
      updateqty ? newqty = updateqty : newqty = 1
    }
    setQty(newqty)
  }, [qty])

  const { userData, token, isAuth } = useSelector((store) => store.auth);
  console.log(userData.cart)
  const total = userData.cart.reduce((a, b) => a + +b.price, 0);

  const PaymentKaro = () => {

  }

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md" color={"white"}>Order Summary</Heading>

      <Stack spacing="6">
        {/* <OrderSummaryItem label="Subtotal" value={formatPrice(total*2)} /> */}
        <OrderSummaryItem label="Subtotal" value={formatPrice(qty ? total * qty : total)} />
        <OrderSummaryItem label="Shipping + Tax" color="white" letterSpacing="1px" value={userData?.cart?.length == 0 ? formatPrice(0) : formatPrice(tax)}>
          {/* formatPrice(qty && qty ? tax : 0) */}
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" color={"white"} fontWeight="semibold">
            Total
          </Text>
          <Text color={"white"} fontSize="xl" fontWeight="extrabold">
            {/* $ {qty ? total * qty : total}.00 */}
            {userData?.cart?.length == 0 ? formatPrice(0) : formatPrice(qty ? total * qty + tax : total)}
          </Text>
        </Flex>
      </Stack>


      <RazorPay />

    </Stack>
  );
};
