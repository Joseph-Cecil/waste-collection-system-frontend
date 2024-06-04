import { useState } from "react";
import { Button, Divider, Group, Paper, Stack, Text, TextInput, Notification, rem } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { IconX, IconCheck } from '@tabler/icons-react';
import api from "../services/api";
import Loader1 from "./Loader1"; // Ensure the correct import path

const SpecialRequest = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ message: string, color: string, icon: React.ReactNode } | null>(null);

  const form = useForm({
    initialValues: {
      contact: "",
      location: "",
    },
  });

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async () => {
    const date = formatDate(value);
    setLoading(true);
    setNotification(null);

    try {
      const res = await api.orderTrashTakeOut({ "take_out_date": date, "location": form.values.location, "contact": form.values.contact });
      console.log(res);

      setTimeout(() => {
        setLoading(false);
        form.reset();
        setValue(null);
        setNotification({
          message: "Your request has been placed successfully!",
          color: "teal",
          icon: <IconCheck style={{ width: rem(20), height: rem(20) }} />,
        });
      }, 2000);
    } catch (e) {
      console.log("error something went wrong", e);
      setLoading(false);
      setNotification({
        message: "Something went wrong",
        color: "red",
        icon: <IconX style={{ width: rem(20), height: rem(20) }} />,
      });
    }
  };

  return (
    <>
      <Loader1 visible={loading} />
      <Paper mt={100} mb={60} radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          Welcome to Eco-Cycle
        </Text>

        <Divider labelPosition="center" my="lg" />

        {notification && (
          <Notification icon={notification.icon} color={notification.color} title={notification.color === 'red' ? 'Bummer!' : 'Success!'} mt="md">
            {notification.message}
          </Notification>
        )}

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              required
              label="Phone Number"
              placeholder="Enter Your Phone Number Here"
              value={form.values.contact}
              onChange={(event) =>
                form.setFieldValue("contact", event.currentTarget.value)
              }
              radius="md"
            />

            <TextInput
              required
              label="Location"
              placeholder="Eg. Dansoman RoundAbout, House No 23"
              value={form.values.location}
              onChange={(event) =>
                form.setFieldValue("location", event.currentTarget.value)
              }
              radius="md"
            />

            <DateInput
              required
              value={value}
              onChange={setValue}
              label="Date input"
              placeholder="Date input"
            />

            <Group>
              <Button type="submit" radius="xl">
                Make Request
              </Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </>
  );
};

export default SpecialRequest;
