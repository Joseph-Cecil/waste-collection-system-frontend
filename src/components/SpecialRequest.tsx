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

interface SpecialRequest extends PaperProps {
  path: string;
}

const SpecialRequest = () => {
  const [value, setValue] = useState<Date | null>(null);

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      location: "",
    },
  });

  return (
    <>
      <Paper mt={100} mb={60} radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          Welcome to Eco-Cycle
        </Text>

        <Divider labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <>
              <TextInput
                required
                label="First Name"
                placeholder="Enter Your First Name Here"
                value={form.values.firstName}
                onChange={(event) =>
                  form.setFieldValue("firstName", event.currentTarget.value)
                }
                radius="md"
              />

              <TextInput
                required
                label="Last Name"
                placeholder="Enter Your Last Name Here"
                value={form.values.lastName}
                onChange={(event) =>
                  form.setFieldValue("lastName", event.currentTarget.value)
                }
                radius="md"
              />

              <TextInput
                required
                label="Phone Number"
                placeholder="Enter Your Phone Number Here"
                value={form.values.phoneNumber}
                onChange={(event) =>
                  form.setFieldValue("phoneNumber", event.currentTarget.value)
                }
                radius="md"
              />

              <TextInput
                required
                label="Location"
                placeholder="Eg. Dansoman RoundAbout, House No 23"
                value={form.values.location}
                onChange={(event) =>
                  form.setFieldValue("lastName", event.currentTarget.value)
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
            </>

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
