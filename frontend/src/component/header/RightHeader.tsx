import { IconButton } from "@chakra-ui/button";
import { ArrowForwardIcon, EmailIcon, MoonIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/layout";
import React from "react";
import PopoverForm from "../addBook/AddBook";

const RightHeader: React.FC = () => {
  return (
    <Stack direction="row" spacing={4} mx="4">
      
      <PopoverForm/>
      <IconButton
        aria-label="add book"
        borderRadius="full"
        fontSize="20"
        size="md"
        icon={<MoonIcon />}
      />

      <IconButton
        aria-label="add book"
        borderRadius="full"
        fontSize="20"
        size="md"
        icon={<EmailIcon />}
      />
    </Stack>
  );
};

export default RightHeader;
