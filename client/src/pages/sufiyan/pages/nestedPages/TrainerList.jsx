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
import { EditIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
import Loading from "../../../Loading";

import { TbLockOpen } from "react-icons/tb";
import { TbLock } from "react-icons/tb";
//import {ImageD} from "../../../public/preview";

const TrainerList = () => {
    // const { data } = useSelector((store) => store.admin);
    //  const { data } = useSelector((store) => store.admin);
    const [data, setData] = useState()
    const [reload, setReload] = useState(true)
    const toast = useToast()
    const navigate = useNavigate()

    const [loadling, setLoading] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8080/trainer")
            .then((r) => {
                setLoading(false)
                setData(r.data)
                console.log(r.data)
            })
    }, [reload])

    if (loadling) {
        return <Loading />
    }

    const handleDelete = (id) => {
        // console.log("id", id)
        setLoading(true)
        axios.delete(`http://localhost:8080/remove/${id}`)
            .then((r) => {
                setLoading(false)
                toast({
                    status: "success",
                    title: "Trainer deleted successfully",
                    duration: 1500,
                    isClosable: true
                })
                setReload(!reload)
            })
    }
    const handlestatus = (sid) => {
        setLoading(true)
        axios.delete(`http://localhost:8080/status/${sid}`)
            .then((r) => {
                setLoading(false)
                toast({
                    status: "success",
                    title: "Updated successfully",
                    duration: 1500,
                    isClosable: true
                })
            })
    }

    return (
        <VStack p={5} maxW="1200px">

            <Stack alignSelf={"flex-start"} p={5} >
                <Text fontWeight={"semibold"} fontSize="xl" >All Trainer List</Text>
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

                    // justifyContent={"space-between"}
                    >
                        <Text textAlign="center" w="15%">TrainerName </Text>
                        <Text textAlign="center" w="35%">Email</Text>
                        <Text textAlign="center" w="12%">Id Proof</Text>
                        <Text textAlign="center" w="15%">Experiance</Text>
                        <Text textAlign="center" w="20%">Status</Text>
                        <Text textAlign="center" w="12%">Action</Text>

                    </HStack>
                    <Scrollbars style={{ width: 800, height: "65vh" }}>
                        <VStack spacing={5}>

                            {data?.map((el) => (
                                <HStack
                                    px={4}
                                    py={5}

                                    w="full"
                                    bg="#eee"
                                    borderRadius={5}
                                    justifyContent={"space-between"}
                                    key={el.id}
                                >
                                    <Text textAlign="center" w="15%" >
                                        {el.name}
                                    </Text>
                                    <Text textAlign="center" w="35%">{el.email}</Text>
                                    <Box w="12%" h="70px" m="auto" display="flex" justifyContent="center">
                                        <Image
                                            h="100%"
                                            w="100px"
                                            fit="cover"
                                            borderRadius="10px"
                                            textAlign="center"
                                            mt={0}
                                            // src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                                            src={`http://localhost:8080/${el.image[1].filename}`}
                                            alt="Plan Img"
                                        />
                                    </Box>
                                    <Text textAlign="center" w="15%">{el.experiance}</Text>
                                    <Text textAlign="center" w="20%">{el.active ? "Approved":"Disapproved"}</Text>
                                    {/* <Text>{el.password.substring(0,20)}....</Text> */}

                                    <HStack textAlign="center" display="flex" justifyContent="center" w="12%">

                                        <IconButton
                                            fontSize="22px"
                                            borderRadius={50}
                                            variant="link"
                                            onClick={() => handlestatus(el._id)}
                                            icon={el.active ? <TbLockOpen /> : <TbLock />}
                                        />
                                        <IconButton
                                            fontSize="22px"
                                            borderRadius={50}
                                            variant="link"
                                            onClick={() => handleDelete(el._id)}
                                            icon={<IoTrashBinSharp />}

                                        />
                                        <IconButton
                                            fontSize="22px"
                                            borderRadius={50}
                                            variant="link"
                                            icon={<EditIcon />}
                                            onClick={() => navigate(`/admins/edit-trainer/${el._id}`)}
                                        />
                                    </HStack>
                                </HStack>
                            ))}
                        </VStack> </Scrollbars>
                </VStack>
            </HStack>



        </VStack>
    );
};

export default TrainerList;
