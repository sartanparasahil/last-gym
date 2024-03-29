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
import { NavLink, Navigate, useNavigate } from "react-router-dom";
// import { getUserData, login } from "../../../redux/auth/auth.actions";
import Loading from "../../Loading";
import axios from "axios";

export default function Adminlogin() {


    const [admin, setAdmin] = useState({ email: "", password: "" });
    const [loading,setLoading]=useState(false)

    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin({ ...admin, [name]: value });
    };

    if(loading){
        return <Loading />
    }

    const handleClick = () => {

        if (!admin.email || !admin.password) {
            toast({
                title: "All fields are mandatory",
                description: "Please fill all the details",
                status: "error",
                duration: 2000,
                isClosable: true,
            });

        } else {
            setLoading(true)
            axios.post("http://localhost:8080/admin/login", admin)
                .then((res) => {
                    // console.log("admin data", res.data)
                    if (res.status == 200) {
                        setAdmin({ email: "", password: "" })
                        setLoading(false)
                        toast({
                            title: "Login Successfully",
                            description: "",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                        });
                        navigate('/admins')
                    }
                })
                .catch((err) => {
                    setLoading(false)
                    toast({
                        title: err.response.data.message,
                        description: "",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                    });
                }

                )
        }

    };



    // if (loading) {
    //     return <Loading />
    // }

    // if (isAuth) {
    //     toast({
    //         title: "Logged in successfully",
    //         description: "Go and get exciting offers...",
    //         status: "success",
    //         duration: 2000,
    //         isClosable: true,
    //     });

    //     let token = JSON.parse(localStorage.getItem("token"))

    //     dispatch(getUserData(token.email))
    //     //console.log(token.email)  
    //     return <Navigate to="/" />;
    // }



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
                                    value={admin.email}
                                    color={"white"}
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel color={"#f45f02"}>Password</FormLabel>
                                <Input
                                    value={admin.password}
                                    color={"white"}
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    type="submit"
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
