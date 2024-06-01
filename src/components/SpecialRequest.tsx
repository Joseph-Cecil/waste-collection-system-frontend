import {
  Button,
  Divider,
  Group,
  Paper,
  PaperProps,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { DateInput } from "@mantine/dates";
import api from "../services/api";

interface SpecialRequest extends PaperProps {
  path: string;
}

const SpecialRequest = () => {
  const [value, setValue] = useState<Date | null>(null);

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

  return (
    <>
      <Paper mt={100} mb={60} radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          Welcome to Eco-Cycle
        </Text>

        <Divider labelPosition="center" my="lg" />

        <form
          onSubmit={form.onSubmit(async() => {
            const date = formatDate(value)
            console.log(date, form.values.location, form.values.contact);
            try{
              const res = await api.orderTrashTakeOut({"take_out_date":date, "location":form.values.location, "contact":form.values.contact});
              console.log(res);

            }catch(e){
              console.log("error something went wrong", e)
            }

          })}
        >
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
