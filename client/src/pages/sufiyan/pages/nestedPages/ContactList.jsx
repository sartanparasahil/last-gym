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

const ContactList = () => {
    const toast = useToast()
    const [data, setData] = useState()
    const [reload, setReload] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:8080/getcontact")
            .then((r) => {
                setData(r.data)
                console.log("contact", r.data)
            })
    }, [reload])

    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:8080/removecontact/${id}`)
                .then((r) => {
                    if (r.status == 200) {
                        toast({
                            status: "success",
                            // title: r.data,  
                            duration: 1500,
                            isClosable: true
                        })
                    }
                    setReload(!reload)
                })
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <VStack p={5} maxW="1200px">

            <Stack alignSelf={"flex-start"} p={5} >
                <Text fontWeight={"semibold"} fontSize="xl" >All Contact List</Text>
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
                        <Text textAlign="center" w="24%">name </Text>
                        <Text textAlign="center" w="28%">Email</Text>
                        <Text textAlign="center" w="34%">Description</Text>
                        <Text textAlign="center" w="14%">Remove</Text>

                    </HStack>
                    <Scrollbars style={{ width: 800, height: "65vh" }}>
                        <VStack spacing={5}>

                            {
                                Array.isArray(data) && data?.map((el) => (
                                    <HStack
                                        p={5}
                                        w="full"
                                        bg="#eee"
                                        borderRadius={5}
                                        justifyContent={"space-between"}
                                        key={el.id}
                                    >
                                        <Text textAlign="center" w="24%">
                                            {el.username}

                                        </Text>
                                        <Text textAlign="center" w="28%">{el.email}</Text>
                                        <Text textAlign="center" w="34%">{el.description}</Text>
                                        {/* <Text>{e1.qty}</Text> */}

                                        <IconButton
                                            fontSize="25px"
                                            textAlign="center" w="13%"
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

export default ContactList;
