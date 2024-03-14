//import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
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
import axios from "axios";

function AdminPrivateAuth({ children }) {
  const toast = useToast()
  const { AdminIsAuth } = useSelector((store) => store.auth);
  console.log("Admin is", AdminIsAuth)

  // if (!AdminIsAuth) {
  //   return (
  //     toast({
  //       title: "You are not admin",
  //       status: "warning",
  //       duration: 2000,
  //       isClosable: true,
  //     }), (<Navigate to="/" />)
  //   );
  // }

  return children;
}

export default AdminPrivateAuth;
