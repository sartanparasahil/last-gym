import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  option,
  useToast,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/auth.actions";
import { registerUser } from "../../../redux/register/register.actions";
import { Toast } from "@chakra-ui/react";
import gymbro from "../assets/gymBro.gif";
import { calcLength } from "framer-motion";


export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    password: "",
  };

  const [user, setUser] = useState(defaultValues);

  // console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // if (value.length > 20){
    //   toast({
    //     title:"Max length is 20",
    //     status:"error",
    //     duration:1000
    //   })
    // }
    switch (name) {
      case "firstName":
        if (value.length > 10) {
          toast({
            title: "Firstname Max length is 10",
            status: "error",
            duration: 1000,
          });

        }
        break;
      case "lastName":
        if (value.length > 10) {
          toast({
            title: "lastname Max length is 10",
            status: "error",
            duration: 1000,
          });
        }
        break;
      case "email":
        if (value.length > 30) {
          toast({
            title: "Email Max length is 20",
            status: "error",
            duration: 1000,
          });

        }
        break;
      // case "age":
      //   if (value.length >= 2) {
      //     toast({
      //       title: "Age must be 1 or 2 number",
      //       status: "error",
      //       duration: 1000,
      //     });
      //   }
      //   break;
      case "password":
        if (value.length > 8) {
          toast({
            title: "Password Max length is 10",
            status: "error",
            duration: 1000,
          });

        }
        break;
      default:
        break;
    }
  };
  // let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const handleClick = () => {
    if (
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.password ||
      !user.age ||
      !user.height ||
      !user.weight ||
      !user.gender
    ) {

      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      {
        toast({
          title: "Enter Valid Email",
          description: "Please fill all the details",
          status: "error",
          duration: 500,
          isClosable: true,
        });

      }
    }

    else {
      dispatch(registerUser(user));
      setUser(defaultValues);
      toast({
        title: "Your account is created",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate('/login');
    }
  };

  return (
    <Flex
      position={"relative"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
    >
      <Stack zIndex={2} spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading color={"white"} fontSize={"4xl"}>
            Register Form
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("whiteAlpha.200", "gray.700")}
          boxShadow={"lg"}
          p={8}
          color="white"
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    maxLength={11}
                    value={user.firstName}
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    value={user.lastName}
                    maxLength={11}
                    onChange={handleChange}
                    type="text"
                    name="lastName"
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="age" isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input
                    // maxLength={2}
                    onInput={(e) => e.target.value = e.target.value.slice(0, 3)}

                    value={user.age}
                    onChange={handleChange}
                    type="number"
                    name="age"

                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="gender" bg="none">
                  <FormLabel>Gender</FormLabel>
                  <Select
                    value={user.gender}
                    _hover={{ color: "black" }}
                    type="text"
                    name="gender"
                    onChange={handleChange}
                  >
                    <option value="">select gender</option>
                    <option value="Male">male</option>
                    <option value="Female">female</option>
                    <option value="Others">Custom</option>
                  </Select>
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="weight">
                  <FormLabel>Weight</FormLabel>
                  <Input
                    onInput={(e) => e.target.value = e.target.value.slice(0, 3)}
                    value={user.weight}
                    onChange={handleChange}
                    type="number"
                    name="weight"
                    maxLength={3}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="height">
                  <FormLabel>Height</FormLabel>
                  <Input
                    onInput={(e) => e.target.value = e.target.value.slice(0, 3)}
                    value={user.height}
                    onChange={handleChange}
                    type="number"
                    name="height"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                maxLength={31}
                value={user.email}
                onChange={handleChange}
                type="email"
                name="email"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  maxLength={8}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#f45f02"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleClick}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login" >
                  <Button

                    _hover={{ backgroundColor: "white", color: "orange.500" }}
                    color="white"
                    variant="outline"
                    fontWeight="semibold"
                  >
                    Login
                  </Button>
                </Link>
                {/* <Link to="/login">
                  <Button
                  bg="transparent"
                  _hover={{color:"#f45f02"}}
                  color={"blue.400"}
                  >
                    Login
                  </Button>
                </Link> */}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
