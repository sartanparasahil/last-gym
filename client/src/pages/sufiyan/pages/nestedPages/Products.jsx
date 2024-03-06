import {
  HStack,
  IconButton,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IoTrashBinSharp } from "react-icons/io5";
import { Scrollbars } from 'react-custom-scrollbars-2';

import img1 from "../../assets/img1.png"
import axios from "axios";
import { TfiArrowUp } from "react-icons/tfi";

//import {ImageD} from "../../../public/preview";

const Products = () => {
  const toast = useToast()
  const [data, setData] = useState()
  const [reload, setReload] = useState(true)
  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then((r) => {
        setData(r.data)
        console.log("Products", r.data)
      })
  }, [reload])

  const handleDelete = (id) => {

    axios.delete(`http://localhost:8080/products/${id}`)
      .then((r) => {
        toast({
          status: "success",
          title: r.data,
          duration: 1500,
          isClosable: true
        })
        setReload(!reload)
      })
  }
  return (
    <VStack p={5} maxW="1200px">

      <Stack alignSelf={"flex-start"} p={5} >
        <Text fontWeight={"semibold"} fontSize="xl" >All Products List</Text>
      </Stack>

      <HStack
        p={5}

        w="100%"
        justifyContent={"space-around"}
        alignContent={"flex-start"}
        alignItems={"flex-start"}
      >


        <VStack p={5} position="relative" top="-100px" >
          <HStack
            p={5}

            w="100%"
            bg="#f45f02"
            color="whiteAlpha.900"
            borderRadius={5}
            justifyContent={"space-between"}
          >
            <Text textAlign="center" w="34%">Product name </Text>
            <Text textAlign="center" w="25%" >Price</Text>
            <Text textAlign="center" w="34%">Quantity</Text>
            <Text textAlign="center" w="7%">Remove</Text>

          </HStack>
          <Scrollbars style={{ width: 800, height: "65vh" }}>
            <VStack spacing={5}>

              {data?.map((el) => (
                <HStack
                  p={5}

                  w="full"
                  bg="#eee"
                  borderRadius={5}
                  justifyContent={"space-between"}
                >
                  <Text textAlign="center" w="35%">
                    {el.productName}

                  </Text>
                  <Text textAlign="center" w="28%">{el.price}</Text>
                  <Text textAlign="center" w="30%">{el.qty}</Text>
                  <Text textAlign="center" w="7%">{el.remove}</Text>
                  {/* <Text>{e1.qty}</Text> */}

                  <IconButton
                    fontSize="25px"
                    borderRadius={50}
                    variant="link"
                    onClick={() => handleDelete(el._id)}
                    icon={<IoTrashBinSharp />}
                  />
                </HStack>
              ))}
            </VStack> </Scrollbars>
        </VStack>
      </HStack>



    </VStack>
  );
};

export default Products;
