import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container, Divider, Stack } from "@chakra-ui/layout";
import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import Icon from "./components/Icon";

function App() {
  const [size, setSize] = useState(10);
  const [color, setColor] = useState("#5f6527");
  const [baseColor, setBaseColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");

  return (
    <Container bg={bgColor} p={10}>
      <Box py={10}>
        <Icon size={size} color={color} baseColor={baseColor} />
      </Box>

      <Stack spacing={3}>
        <FormControl id="size">
          <FormLabel>Size</FormLabel>
          <Input
            type="number"
            value={size}
            min={1}
            onChange={(e) => setSize(parseInt(e.target.value, 10))}
          />
        </FormControl>
        <FormControl id="color">
          <FormLabel>Accent color</FormLabel>
          <ColorPicker color={color} setColor={setColor} />
        </FormControl>
        <FormControl id="baseColor">
          <FormLabel>Base text color</FormLabel>
          <ColorPicker color={baseColor} setColor={setBaseColor} />
        </FormControl>
        <Divider />
        <FormControl id="bgColor">
          <FormLabel>Page background color</FormLabel>
          <ColorPicker color={bgColor} setColor={setBgColor} />
        </FormControl>
      </Stack>
    </Container>
  );
}

export default App;
