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

function Editplan() {

    const toast = useToast()
    
    const { id } = useParams()
    const [data, setData] = useState({
        name: "",
        desc: "",
        duration: ""
    })
 
    let [file, setFile] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8080/plan/${id}`)
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

   
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }


    const AddToDatabase = (e) => {
        e.preventDefault()

        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('desc', data.desc);
        formData.append('duration', data.duration);
        formData.append('image', file);

        // Log the entries of the FormData object
        console.log(formData)
        axios.put(`http://localhost:8080/plan/${id}`, formData)
        .then((response)=>{
            console.log(response.data)
            toast({
                title: "Data updated Successfull",
                status: "success",
                duration: 9000,
                isClosable: true,
            })

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
                        Edit Plan
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
                            value={data?.name}
                            onChange={handleChange}
                        // resize={resize}
                        />
                    </VStack>

                    <VStack>
                        <Textarea
                            placeholder="Plan Description"
                            height={"110px"}
                            width="650px"
                            color="white"
                            name="desc"
                            value={data?.desc}
                            onChange={handleChange}
                        // resize={resize}
                        />
                    </VStack>
                    <VStack>
                        <Input
                            type="file"
                            placeholder="Enter Img URL"
                            // height={"200px"}
                            width="650px"
                            // value={data.image}
                            color="white"
                            name="image"
                            onChange={handleFileChange}
                        // resize={resize}
                        />
                    </VStack>
                    <VStack>
                        <Input
                            type="text"
                            placeholder="Enter Duration"
                            // height={"200px"}
                            width="650px"
                            color="white"
                            name="duration"
                            value={data?.duration}
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

export default Editplan
