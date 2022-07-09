import React from "react";
import { ChakraProvider, Box, Image } from "@chakra-ui/react";
import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpeg";
import Img4 from "../assets/img4.jpeg";
import Img5 from "../assets/img5.jpeg";
import Img6 from "../assets/img6.jpeg";

const srces = [Img1, Img2, Img3, Img4, Img5, Img6];

export default function ImageBox() {
    return (
        <ChakraProvider>
            <Box
                padding={4}
                w="100%"
                maxW="1000px"
                mx="auto"
                sx={{ columnCount: [2], columnGap: "20px" }}
            >
                {srces.map((src) => (
                    <Image
                        key={src}
                        w="100%"
                        borderRadius="xl"
                        mb={3}
                        d="inline-block"
                        src={src}
                        alt="Alt"
                    />
                ))}
            </Box>
        </ChakraProvider>
    );
}
