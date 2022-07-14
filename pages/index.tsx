import type { NextPage } from "next";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Flex,
  Center,
  Text,
  Spacer,
  Input,
  Grid,
  Stack,
  GridItem,
  Button,
  Icon,
} from "@chakra-ui/react";

import CheckCircleIcon from "@chakra-ui/icon";

import IoLogoWindows from "react-icons/io";

const Home: NextPage = () => {
  const [months, setMonths] = useState<number[]>([]);
  const [maxim, setMaxim] = useState<number>();
  const [indice, setIndice] = useState<number>();
  const NumarLuni = [...Array(60).keys()];
  //@ts-ignore
  const handleChange = (event, index: number) => {
    const newValues = months.slice();
    newValues[index] = event.target.value;
    setMonths(newValues);
  };

  const Calculate = () => {
    var sum: number = 0;
    var max = 0;
    var indice = 0;
    for (var i = 0; i < months.length - 5; i++) {
      sum = 0;
      for (var j = i; j < i + 6; j++) {
        //@ts-ignore
        sum += parseInt(months[j]);
      }
      if (sum > max) {
        max = sum;
        indice = i;
      }
    }

    setMaxim(max);
    setIndice(indice);
  };

  return (
    <Box background={"blue.500"} p={10}>
      <Flex justify={"center"} pt={5}>
        <Text fontSize={"2xl"} fontWeight={600} color="#DFF6FF">
          Calculator pentru pensie
        </Text>
      </Flex>
      <Box>
        <Grid
          templateRows="repeat(20, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={2}
          mt={20}
        >
          {NumarLuni.map((i) => {
            return (
              <GridItem
                key={i}
                color={"#DFF6FF"}
                fontSize={"lg"}
                mt={5}
                background="#06283D"
                padding={4}
                borderRadius={10}
              >
                <Flex justify={"center"} direction={"column"} align="center">
                  <Text as={"label"}>Luna numarul {i + 1} </Text>
                  <Input
                    type={"number"}
                    w="150px"
                    value={months[i]}
                    borderWidth={"2px"}
                    onChange={() => handleChange(event, i)}
                    outline={"none"}
                  />
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
        <Box display={"flex"} justifyContent="center" mt={10}>
          <Button padding={8} fontSize={"xl"} onClick={Calculate}>
            Calculeaza
          </Button>
        </Box>
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          alignItems={"center"}
          mt={6}
          background={"#06283D"}
          padding={6}
          borderRadius={10}
        >
          <Text fontSize={"xl"} color={"white"}>
            {maxim ? "Valoarea cea mai mare este " + maxim : ""}
          </Text>
          <Text fontSize={"xl"} color={"white"}>
            {indice
              ? "Valoarea cea mai mare este de la luna " +
                (indice + 1) +
                " pana la luna " +
                (indice + 6)
              : ""}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
