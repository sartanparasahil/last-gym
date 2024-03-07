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
//import { ACTION_ADD_PRODUCT } from "../../redux/admin/admin.actions";

const AddTrainer = () => {
    const [resize, setResize] = React.useState("horizontal");

    let [data, setData] = useState({ name: "", email: "", image: "" })


    const dispatch = useDispatch();

    const toast = useToast()
    const handleChange = (e) => {
        // setData({...data,[e.target.name:e.target.value]})/
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
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
    const AddToDatabase = () => {
        axios.post("http://localhost:8080/addtrainer", data)
            .then((r) => {
                if (r.status == 200) {
                    setData({ name: "", email: "", image: "" })

                    toast({
                        title: "Trainer Added Successfull",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    })
                }
                else {
                    toast({
                        title: r.data,
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    })
                }
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
                        Choose Category Trainer
                    </Text>
                </Flex>
                <VStack alignItems="flex-start" spacing="1rem">
                    <VStack>
                        <Textarea
                            placeholder="Trainer Name"
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
                            placeholder="Trainer Description"
                            height={"110px"}
                            width="650px"
                            value={data.email}
                            color="white"
                            name="email"
                            onChange={handleChange}
                            resize={resize}
                        />
                    </VStack>
                    <VStack>
                        <Input
                            type="text"
                            placeholder="Enter Img URL"
                            // height={"200px"}
                            width="650px"
                            value={data.image}
                            color="white"
                            name="image"
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
                            type="submit"
                            width="200px"
                            fontSize="1.3rem"
                            color="white"
                            bg="#f45f02"
                            marginTop="1rem"
                            onClick={AddToDatabase}
                        >
                            ADD TRAINER
                        </Button>
                    </RadioGroup>
                </VStack>
            </Flex>
        </Flex>
    );
};

export default AddTrainer;