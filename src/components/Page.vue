<template>
  <div class="hello">
    <Box display="flex">
      <Box :width="[1 / 4, 1 / 2]" bg="black" p="1" color="red">Box</Box>
      <Box :width="[1 / 4, 1 / 2]" bg="red" p="1" color="yellow">Box</Box>
    </Box>
    <Box display="flex">
      <Box :width="[1 / 4]" bg="blue" p="1" color="black">Box</Box>
      <Box :width="[1 / 4]" bg="orange" p="1" color="black">Box</Box>
      <Box :width="[1 / 4]" bg="yellow" p="1" color="black">Box</Box>
      <Box :width="[1 / 4]" bg="green" p="1" color="black">Box</Box>
    </Box>
    <PseudoBox :_hover="{ color: 'red' }">PseudoBox</PseudoBox>
    <Box width="200px">
      <TYButton ml="1">Test</TYButton>
    </Box>
    <Box width="200px">
      <Datepicker ml="1">Test</Datepicker>
    </Box>
  </div>
</template>

<script>
import { Box } from "./style-componets/Box";
import Datepicker from "./style-componets/Datepicker";
import { PseudoBox } from "./style-componets/PseudoBox";
import { TYButton } from "./style-componets/Button";

export default {
  name: "Page",
  props: {
    msg: String
  },
  components: {
    Box,
    PseudoBox,
    TYButton,
    Datepicker
  }
};
</script>
