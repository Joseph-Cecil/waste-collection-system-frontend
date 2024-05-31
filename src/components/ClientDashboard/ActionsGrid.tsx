import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  useMantineTheme,
  Title,
} from "@mantine/core";
import {
  IconReceiptRefund,
  IconReceipt,
  IconReport,
  IconCoin,
  IconUser,
  IconStatusChange,
  Icon3dCubeSphere,
  IconCalendarCancel,
  IconCalendarCheck,
} from "@tabler/icons-react";
import classes from "./ActionsGrid.module.css";
import { useNavigate } from "react-router-dom";

const mockdata = [
  { title: "My Profile", icon: IconUser, color: "violet" },
  { title: "Special Request", icon: Icon3dCubeSphere, color: "indigo" },
  { title: "Cancel Request", icon: IconCalendarCancel, color: "blue" },
  { title: "Last Take Out", icon: IconReceiptRefund, color: "green" },
  { title: "Receipts", icon: IconReceipt, color: "teal" },
  { title: "Take Outs", icon: IconCalendarCheck, color: "cyan" },
  { title: "All Requests", icon: IconReport, color: "pink" },
  { title: "Payment", icon: IconCoin, color: "red" },
  { title: "Special Request Status", icon: IconStatusChange, color: "orange" },
];

export function ActionsGrid() {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const handleButtonClick = (title: string) => {
    if (title === "My Profile") {
      navigate("/auth/my-profile");
    } else if (title === "Special Request") {
      navigate("/auth/special-takeout");
    } else if (title === "Cancel-Request") {
      navigate("/auth/cancel-request");
    } else if (title === "Last Take Out") {
      navigate("/auth/last-take-out");
    } else if (title === "reciepts") {
      navigate("/reciepts");
    } else if (title === "All Request") {
      navigate("/auth/all-request");
    } else if (title === "Payment") {
      navigate("/auth/payment");
    } else if (title === "Special Request Status") {
      navigate("/auth/special-takeout-status");
    } else if (title === "Take Outs") {
      navigate("/auth/take-outs");
    } else {
      navigate("/");
    }
  };

  const items = mockdata.map((item) => (
    <UnstyledButton
      key={item.title}
      className={classes.item}
      onClick={() => handleButtonClick(item.title)}
    >
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <div className={classes.client}>
        <Title>Client Dashboard</Title>
      </div>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
