"use strict";

import React, { Dispatch, SetStateAction, useState } from "react";
import { SketchPicker } from "react-color";
import { Box } from "@chakra-ui/layout";

type Props = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
};

const ColorPicker = ({ color, setColor }: Props) => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Box
        p={1}
        boxShadow="0 0 0 1px rgba(0,0,0,.1)"
        d="inline-block"
        cursor="pointer"
        onClick={() => setDisplay(!display)}
      >
        <Box borderRadius="sm" w="36px" h="14px" bg={color}></Box>
      </Box>
      {display ? (
        <Box position="absolute" zIndex={2}>
          <Box
            position="fixed"
            top={0}
            right={0}
            bottom={0}
            left={0}
            onClick={() => setDisplay(false)}
          />
          <SketchPicker color={color} onChange={(c) => setColor(c.hex)} />
        </Box>
      ) : null}
    </>
  );
};

export default ColorPicker;
