import React, { useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";

function Editproduct() {

    const toast = useToast()

    const { id } = useParams()
    const [data, setData] = useState({
        productName: "", desc: "", price: ""
    })

    let [file, setFile] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then((r) => {
                setData(r.data.data)
                // setNew(r.data.data)
            })
            .catch((err) => {
                console.log(err)

            })

    }, [id])

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }


    // const handleFileChange = (e) => {
    //     setFile(e.target.files[0])
    // }


    const AddToDatabase = (e) => {
        e.preventDefault()

        // let formData = new FormData();
        // formData.append('productName', data.productName);
        // formData.append('desc', data.desc);
        // formData.append('price', data.price);
        // formData.append('image', file);

        // Log the entries of the FormData object
        // console.log("data is", formData)
        axios.put(`http://localhost:8080/products/${id}`, data)
            .then((response) => {
                if(response.status == 200){
                    setData({productName: "", desc: "", price: ""})
                    toast({
                        title: "Data updated Successfull",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })
                }
                

            })
    }
    console.log("Data: " + data)
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
                        Edit Product
                    </Text>
                </Flex>

                <VStack alignItems="flex-start" spacing="1rem">
                    <VStack>
                        <Textarea
                            placeholder="Product Name"
                            height={"110px"}
                            width="650px"
                            color="white"
                            name="productName"
                            value={data?.productName}
                            onChange={handleChange}
                        // resize={resize}
                        />
                    </VStack>

                    <VStack>
                        <Textarea
                            placeholder="Product Description"
                            height={"110px"}
                            width="650px"
                            color="white"
                            name="desc"
                            value={data?.desc}
                            onChange={handleChange}
                        // resize={resize}
                        />
                    </VStack>
                    {/* <VStack>
                        <Input
                            type="file"
                            placeholder="Enter Img URL"
                            paddingTop={"7px"}
                            // height={"200px"}
                            width="650px"
                            // value={data.image}
                            color="white"
                            name="image"
                            onChange={handleFileChange}
                        // resize={resize}
                        />
                    </VStack> */}
                    <VStack>
                        <Input
                            type="text"
                            placeholder="Price"
                            // height={"200px"}
                            width="650px"
                            color="white"
                            name="price"
                            value={data?.price}
                            onChange={handleChange}
                        // resize={resize}
                        />
                    </VStack>
                    <VStack>
                        <Input
                            type="number"
                            placeholder="Price"
                            // height={"200px"}
                            width="650px"
                            color="white"
                            name="qty"
                            value={data?.qty}
                            onChange={handleChange}
                        // resize={resize}
                        />
                    </VStack>
                    <RadioGroup color="white" colorScheme='orange' >

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
                            Save Changes
                        </Button>
                    </RadioGroup>
                </VStack>
            </Flex>
        </Flex>
    );
}

export default Editproduct
