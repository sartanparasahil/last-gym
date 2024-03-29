import React, { useState } from "react";
import {
    Spacer,
    Text,
    RadioGroup,
    HStack,
    VStack,
    Image,
    Textarea,
    Box,
    Radio,
    Flex,
    Button,
    Input,
    useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { ACTION_ADD_PRODUCT } from "../../../../redux/admin/admin.actions";
import axios from "axios";
import Loading from "../../../Loading";
//import { ACTION_ADD_PRODUCT } from "../../redux/admin/admin.actions";

const AddProduct = () => {
    const [resize, setResize] = React.useState("horizontal");

    let [data, setData] = useState({ name: "", desc: "", duration: "" })
    const [loadling, setLoading] = useState(false)

    let [file, setFile] = useState()
    const dispatch = useDispatch();

    const toast = useToast()
    const handleChange = (e) => {
        // setData({...data,[e.target.name:e.target.value]})/
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    // const AddToDatabase = () => {
    //   dispatch(ACTION_ADD_PRODUCT(area))
    //     .then((res) => {
    //       toast({
    //         title: "Product Added Successfull",
    //         status: "success",
    //         duration: 4000,
    //         isClosable: true,
    //       })
    //     })

    //   //setarea("");
    // };
    if (loadling) {
        return <Loading />
    }

    const AddToDatabase = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('desc', data.desc);
        formData.append('image', file);
        formData.append('duration', data.duration);
        setLoading(true)

        axios.post("http://localhost:8080/plan/addplan", formData)
            .then((r) => {
                if (r.status == 200) {
                    setData({ name: "", desc: "", image: "", duration: "" })
                    setLoading(false)
                    toast({
                        title: "Data added Successfull",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                    })
                }
                

                // console.log(r.data)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
                toast({
                    title: err.response.data.message,
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                })
            })
    };

    return (
        <Flex gap="10rem" justifyContent="center" alignItems="center">
            <Flex
                p={50}
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="1.2rem"
            >
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    gap="1.2rem"
                >
                    <Text fontSize="1.5rem" fontWeight="bold" color="#f45f02">
                        Choose Category Plan
                    </Text>
                </Flex>
                <VStack alignItems="flex-start" spacing="1rem">
                    <VStack>
                        <Textarea
                            placeholder="Plan Name"
                            height={"110px"}
                            width="650px"
                            color="white"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            resize={resize}
                        />
                    </VStack>

                    <VStack>
                        <Textarea
                            placeholder="Plan Description"
                            height={"110px"}
                            width="650px"
                            value={data.desc}
                            color="white"
                            name="desc"
                            onChange={handleChange}
                            resize={resize}
                        />
                    </VStack>
                    <VStack>
                        <Input
                            paddingTop={"7px"}
                            type="file"
                            placeholder="Enter Img URL"
                            // height={"200px"}
                            width="650px"
                            // value={data.image}
                            color="white"
                            name="image"
                            onChange={handleFileChange}
                            resize={resize}
                        />
                    </VStack>
                    <VStack>
                        <Input
                            type="text"
                            placeholder="Enter Duration"
                            // height={"200px"}
                            width="650px"
                            value={data.duration}
                            color="white"
                            name="duration"
                            onChange={handleChange}
                            resize={resize}
                        />
                    </VStack>
                    <RadioGroup color="white" colorScheme='orange' >
                        {/* <HStack spacing="24px" align="left">
              <Radio value="products">Products</Radio>

              <Radio value="plans">Plans</Radio>

            </HStack> */}

                        <Spacer />

                        <Button
                            height="50px"
                            width="200px"
                            fontSize="1.3rem"
                            color="white"
                            bg="#f45f02"
                            marginTop="1rem"
                            onClick={AddToDatabase}
                        >
                            ADD PLAN
                        </Button>
                    </RadioGroup>
                </VStack>
            </Flex>
        </Flex>
    );
};

export default AddProduct;
