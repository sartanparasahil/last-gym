
// import { Container, Vstack } from '@chakra-ui/react';
// import Trainer1 from "../assets/Trainer1.jpg"
// import Trainer2 from "../assets/Trainer2.jpg"
// import Trainer3 from "../assets/Trainer3.jpg"
// import Trainer4 from "../assets/Trainer4.jpg"
// import Trainer5 from "../assets/Trainer5.jpg"
// import Trainer6 from "../assets/Trainer6.jpg"
// import Trainer7 from "../assets/Trainer7.jpg"
// import Trainer8 from "../assets/Trainer8.jpg"
// import Trainer9 from "../assets/Trainer9.jpg"
// import Trainer10 from "../assets/Trainer10.jpg"
// import Trainer11 from "../assets/Trainer11.jpg"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import { BsTwitter, BsFacebook } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import axios from 'axios'
const settings = {
  className: "center",
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  centerPadding: "60px",
  slidesToShow: 3,
  swipeToSlide: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
  afterChange: function (index) {
    // console.log(
    //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    // );
  }
};
export default function ProductCarousel() {

  const [trainer, setTrainer] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/trainer')

      .then(res => {
        console.log("trainer", res.data)
        setTrainer(res.data)
      })
  }, [])
  return (
    <>

      {/* <h2 style={{color:}}>hii</h2> */}
      <Slider {...settings}>
        
        {
          trainer.map((item) => {
            return (
              <div key={item.email}>
                <div className="lisa">
                  <img src={`http://localhost:8080/${item.image}`} alt='trainer img' />
                  <Box className="overlay2" >
                    <Heading color="#fff" mb="-4" fontSize={["19", "19", "20", "20", "25"]}>{item.name}</Heading>
                    <Heading color="#666" fontWeight={"500"} fontSize={["17", "17", "18", "18", "22"]}>{item.email}</Heading>
                  </Box>
                  <Box className="social">
                    <HStack spacing={"7"}>
                      <Text className="sumo"><BsFacebook /></Text>
                      <Text className="sumo"><BsTwitter /></Text>
                      <Text className="sumo"><AiFillInstagram /></Text>
                    </HStack>
                  </Box>
                </div>
              </div>
            )
          })
        }



        {/* <div>
            <div className="lisa">
              <img src={Trainer2} alt='monu'/>
              <Box className="overlay2">
              <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Iron Rachel</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
                </Box>
                <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
           
          </div>
          <div>
            <div className="lisa">
              <img src={Trainer3} alt='monu'/>
              <Box className="overlay2" >
              <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]} >Nazmin Shaikh</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
            </Box>
            <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            
          </div>
          <div>
            <div className="lisa">
              <img src={Trainer4} alt='monu'/>
              <Box className="overlay2" >
              <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Stephanie MicMahon</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
             </Box>
             <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
             
          </div>
          <div>
            <div className="lisa">
              <img src={Trainer7} alt='monu'/>
              <Box className="overlay2" >
              <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Madara Uchiho</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
             </Box>
             <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
             
          </div>
          <div>
            <div className="lisa">
              <img src={Trainer5} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Elite Edge</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Trainer6} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]}>Monu Marquis</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Trainer10} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4"fontSize={["19","19","20","20","25"]} >Evolve Elite</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Trainer9} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]} >Snoop Dog</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
          <div>
            <div className="lisa">
              <img src={Trainer11} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]} >Charlotte Flair</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </div>
          < >
            <div className="lisa">
              <img src={Trainer8} alt='monu'/>
              <Box className="overlay2" >
                  <Heading color="#fff" mb="-4" fontSize={["19","19","20","20","25"]} >Wakanda Forever</Heading>
                 <Text color="#666" fontWeight={"500"}>GYM TRAINER</Text>
              </Box>
              <Box className="social">
                 <HStack spacing={"7"}>
                  <Text className="sumo"><BsFacebook /></Text>
                  <Text className="sumo"><BsTwitter /></Text>
                  <Text className="sumo"><AiFillInstagram /></Text>
                 </HStack>
             </Box>
            </div>
            

          </> */}
      </Slider>

    </>
  )
}