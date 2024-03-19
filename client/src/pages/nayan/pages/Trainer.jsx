import React, { useState } from 'react'
import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import TrainerCarousel from './TrainerCarousel'
import { useNavigate } from 'react-router-dom'
const Trainer = () => {
const navigate = useNavigate()
  return (
    <Box bg="#151515" pt="10" pb="20" w="full">
      <Box w="80%" margin={"auto"} mb="20">

        <HStack spacing={["50", "20", "260", "460", "610"]}>
          <Box>
            <Text color="#f45f02" mb="5" fontWeight={"500"}>OUR TEAM</Text>
            <Heading color="#fff" fontSize={[20, 17, 20, 25, 30]} mb="10">TRAIN WITH EXPERTS</Heading>
          </Box>
          <button style={{color:'#fff',backgroundColor:'#f45f02',padding:'10px 20px',borderRadius:'7px' ,fontWeight:'600'}} onClick={()=> navigate("/trainer-enroll")}>Enroll Now</button>
        </HStack>
      </Box>
      <TrainerCarousel />

    </Box>
  )
}

export default Trainer