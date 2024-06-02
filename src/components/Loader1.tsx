import { Box, LoadingOverlay } from "@mantine/core"

type Props = {
    visible: boolean
}

const Loader1 = ({visible}: Props) => {
  return (
    <Box pos="relative">
      <LoadingOverlay visible={visible} loaderProps={{children: "Loading..."}}/>
    </Box>
  )
}

export default Loader1
