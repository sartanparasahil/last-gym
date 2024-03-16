import {
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
import Loading from "../../../Loading";
import { TbLockOpen } from "react-icons/tb";
import { TbLock } from "react-icons/tb";

//import {ImageD} from "../../../public/preview";

const AllUsers = () => {
  // const { data } = useSelector((store) => store.admin);
  //  const { data } = useSelector((store) => store.admin);
  const [data, setData] = useState()
  const [reload, setReload] = useState(true)
  const toast = useToast()
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:8080/user")
      .then((r) => {
        setData(r.data)
        console.log(r.data)
      })
  }, [reload])

  const handleDelete = (id) => {
    // console.log("id",id)
    setLoading(true)
    axios.delete(`http://localhost:8080/user/${id}`)
      .then((r) => {
        toast({
          status: "success",
          title: "changed",
          duration: 1500,
          isClosable: true
        })
        setLoading(false)
        setReload(!reload)
      })
      .catch((err)=>{
         console.log(err)
         setLoading(false)
         toast({
          status: "error",
          title: err.response.data.message,
          duration: 1500,
          isClosable: true
        })
 
      })
  }

  if(loading) {

   return <Loading/>
  }

  return (
    <VStack p={5} maxW="1200px">

      <Stack alignSelf={"flex-start"} p={5} >
        <Text fontWeight={"semibold"} fontSize="xl" >All Users List</Text>
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
            <Text textAlign="center" w="28%">Username </Text>
            <Text textAlign="center" w="35%">Email</Text>
            <Text textAlign="center" w="20%">Age</Text>
            <Text textAlign="center" w="20%">Gender</Text>
            <Text textAlign="center" w="20%">Status</Text>
            <Text textAlign="center" w="7%">Action</Text>

          </HStack>
          <Scrollbars style={{ width: 800, height: "65vh" }}>
            <VStack spacing={5}>

              {data?.map((el) => (
                <HStack
                  p={5}

                  w="full"
                  bg="#eee"
                  borderRadius={5}
                  justifyContent={"space-between"}
                >
                  <Text textAlign="center" w="28%" >
                    {el.username}

                  </Text>
                  <Text textAlign="center" w="35%">{el.email}</Text>
                  <Text textAlign="center" w="20%">{el.age}</Text>
                  <Text textAlign="center" w="20%">{el.gender}</Text>
                  <Text textAlign="center" w="20%">{el.active ? 'Active' : 'Block'}</Text>
                  {/* <Text>{el.password.substring(0,20)}....</Text> */}

                  <IconButton
                    fontSize="25px"
                    borderRadius={50}
                    variant="link"
                    //onClick={toggleColorMode}
                    onClick={() => handleDelete(el._id)}
                    icon={el.active ? <TbLockOpen /> : <TbLock />}
                  />
                </HStack>
              ))}
            </VStack> </Scrollbars>
        </VStack>
      </HStack>



    </VStack>
  );
};

export default AllUsers;
