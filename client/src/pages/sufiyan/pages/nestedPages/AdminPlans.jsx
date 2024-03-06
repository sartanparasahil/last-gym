import {
    Box,
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

const AdminPlans = () => {
    const toast = useToast()
    const [data, setData] = useState()
    const [reload, setReload] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:8080/plan")
            .then((r) => {
                setData(r.data)
                console.log("Products", r.data)
            })
    }, [reload])

    const handleDelete = (id) => {

        axios.delete(`http://localhost:8080/plan/${id}`)
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
                <Text fontWeight={"semibold"} fontSize="xl" >All Plans List</Text>
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
                        <Text textAlign="center" w="34%">Plan name</Text>
                        <Text textAlign="center" w="34%">PlanImage</Text>
                        <Text textAlign="center" w="15%">duration</Text>
                        <Text textAlign="center" w="17%">Remove</Text>

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
                                    <Text textAlign="center" w="34%">
                                        {el.name}

                                    </Text>
                                    {/* <Text textAlign="center" w="30%">{el.image}</Text> */}
                                    <Box w="34%" h="70px" m="auto" display="flex" justifyContent="center">
                                        <Image
                                            h="100%"
                                            w="100px"
                                            fit="cover"
                                            borderRadius="10px"
                                            textAlign="center"
                                            mt={0}
                                            // src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                                            src={el.image}
                                            alt="Plan Img"
                                        />
                                    </Box>
                                    <Text textAlign="center" w="15%">{el.duration}</Text>
                                    {/* <Text textAlign="center" w="17%">{el.remove}</Text> */}
                                    {/* <Text>{e1.qty}</Text> */}
                                    <IconButton
                                        fontSize="25px"
                                        textAlign="center" w="17%"
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

export default AdminPlans;
