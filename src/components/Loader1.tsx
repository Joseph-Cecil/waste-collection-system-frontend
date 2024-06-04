import { Box, LoadingOverlay, Portal } from "@mantine/core";

type Props = {
  visible: boolean;
};

const Loader1 = ({ visible }: Props) => {
  return (
    <Portal>
      {visible && (
        <Box
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingOverlay visible={visible} loaderProps={{ children: "Please Wait..." }} />
        </Box>
      )}
    </Portal>
  );
};

export default Loader1;
