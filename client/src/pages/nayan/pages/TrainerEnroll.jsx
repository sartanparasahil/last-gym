import React, { useRef, useState } from "react";
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
import axios from "axios";
import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";
//import { ACTION_ADD_PRODUCT } from "../../redux/admin/admin.actions";

const TrainerEnroll = () => {
    const [resize, setResize] = React.useState("horizontal");

    let [data, setData] = useState({ name: '', email: '', experiance: '' })

    const [loadling, setLoading] = useState(false)
    let [file, setFile] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const ref = useRef()

    const toast = useToast()
    const handleChange = (e) => {
        // setData({...data,[e.target.name:e.target.value]})/
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }


    const handleFileChange = (e) => {
        setFile([...file, ...e.target.files]);

    }

    if (loadling) {
        return <Loading />
    }
    

    const AddToDatabase = (e) => {
        console.log("TUSHA", file)
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('experiance', data.experiance);
        formData.append('image', file[0]);
        formData.append('image', file[1]);
        setLoading(true)
        // Log the entries of the FormData object


        console.log("Data", file)
        axios.post("http://localhost:8080/addtrainer", formData)
            .then((r) => {
                if (r.status == 200) {
                    setData({ name: "", email: "", image: "", experiance: "" })
                    setLoading(false)
                    // setFile(null)
                    toast({
                        title: "Request Send Successfull",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    })
                    navigate("/")
                }
                else {
                    setLoading(false)
                }
            })
            .catch((err) => {
                setLoading(false)
                toast({
                    title: err.response.data.message,
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                })
            })


    };

    return (
        <Box
        bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
        w="100%"
      >
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
                        Register Now
                    </Text>
                </Flex>
                <VStack alignItems="flex-start" spacing="1rem">
                    <VStack>
                        <Textarea
                            placeholder="Name"
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
                            placeholder="Email"
                            type="email"
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
                        <Textarea
                            placeholder="Experience"
                            height={"110px"}
                            width="650px"
                            value={data.experiance}
                            color="white"
                            name="experiance"
                            onChange={handleChange}
                            resize={resize}
                        />
                    </VStack>
                    <VStack style={{ position: 'relative' }}>
                        <Text position={"absolute"} top={"30%"} left={"15px"} color={"gray"}>Trainer img:</Text>
                        <Input
                        style={{ paddingLeft: '85%' }}
                            type="file"
                            placeholder="Enter Img URL"
                            // height={"200px"} 
                            width="650px"
                            paddingTop={"7px"}
                            color="white"
                            name="image"
                            onChange={handleFileChange}
                            resize={resize}
                        />
                    </VStack>
                    <VStack style={{ position: 'relative' }}>
                        <Text position={"absolute"} top={"30%"} left={"15px"} color={"gray"}>Trainer Id Proof:</Text>
                        <Input
                            type="file"
                            placeholder="Id Proof"
                            style={{ paddingLeft: '85%' }}
                            // height={"200px"}
                            width="650px"
                            paddingTop={"7px"}
                            color="white"
                            name="image"
                            onChange={handleFileChange}
                            resize={resize}
                        />
                    </VStack>
                    <RadioGroup color="white" colorScheme='orange' >


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
                            Submit
                        </Button>
                    </RadioGroup>
                </VStack>
            </Flex>
        </Flex>
        </Box>
    );
};

export default TrainerEnroll;
