import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    vCBNM,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate } from "react-router-dom";
import { getUserData, login } from "../../../redux/auth/auth.actions";
import Loading from "../../Loading";

export default function LoginForm({ handleForgot }) {

    const { isAuth, loading, error, errorMessage } = useSelector(
        (store) => store.auth)

    const [user, setUser] = useState({ email: "", password: "" });

    const dispatch = useDispatch();
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleClick = () => {

        console.log("Pratik", errorMessage)
        if (errorMessage) {
            toast({
                title: errorMessage,
                description: "",
                status: "error",
                duration: 2000,
            })
        }
        if (!user.email || !user.password) {
            toast({
                title: "All fields are mandatory",
                description: "Please fill all the details",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        } else {
            dispatch(login(user))
        }

        console.log("Padiyo", errorMessage);
        // if(error){
        //   console.log("Padiyo",errorMessage);
        //   toast({
        //     title: errorMessage,
        //     description: "Please fill all the details",
        //     status: "error",
        //     duration: 2000,
        //     isClosable: true,
        //   });
        // }
        // if (!user.email || !user.password) {
        //   toast({
        //     title: "All fields are mandatory",
        //     description: "Please fill all the details",
        //     status: "error",
        //     duration: 2000,
        //     isClosable: true,
        //   });
        // } 
        // else {
        //   dispatch(login(user))


        // }



    };



    if (loading) {
        return <Loading />
    }

    if (isAuth) {
        toast({
            title: "Logged in successfully",
            description: "Go and get exciting offers...",
            status: "success",
            duration: 2000,
            isClosable: true,
        });

        let token = JSON.parse(localStorage.getItem("token"))

        dispatch(getUserData(token.email))
        //console.log(token.email)  
        return <Navigate to="/" />;
    }



    return (
        // position={"relative"}
        <Box zIndex={500} background={"black"}>
            <Flex
                // position={"absolute"}
                // top="0"
                // right="500"
                //  left="50%"
                //  transform="(-50%, 0)"
                align={"center"}
                justify={"center"}
            >
                <Stack spacing={8} mx={"auto"} w={"390px"} py={40} px={6}>
                    <Stack align={"center"}>
                        <Heading color={"white"} fontSize={"4xl"}>
                            Admin Login
                        </Heading>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        zIndex={100}
                        // bg="white"
                        // bg={useColorModeValue('white', 'gray.700')}
                        bg="whiteAlpha.300"
                        boxShadow={"lg"}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel color={"#f45f02"}>Email address</FormLabel>
                                <Input
                                    value={user.user}
                                    color={"white"}
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel color={"#f45f02"}>Password</FormLabel>
                                <Input
                                    value={user.setUser}
                                    color={"white"}
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    onClick={handleClick}
                                    bg={"#f45f02"}
                                    color={"white"}
                                    _hover={{
                                        border: "1px solid #f45f02",
                                        bg: "white",
                                        color: "#f45f02",
                                    }}
                                >
                                    Login
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
}
