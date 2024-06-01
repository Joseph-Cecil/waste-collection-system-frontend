import { useEffect, useState } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";

interface AuthenticationFormProps extends PaperProps {
  path: string;
}

export function AuthenticationForm({ path, ...props }: AuthenticationFormProps) {
  const [type, setType] = useState<"login" | "register">("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating logged-in state
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  useEffect(() => {
    // Simulate checking if user is logged in using JWT token
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    if (path.includes("register")) {
      setType("register");
    } else {
      setType("login");
    }
  }, [path]);

  const handleSignOut = () => {
    // Simulate signing out by removing dummy JWT token from localStorage
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
  };

  const handleToggle = () => {
    setType(type === "login" ? "register" : "login");
  };

  return (
    <Paper mt={100} radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Eco-Cycle, {type} with
      </Text>

      <Divider labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === "register" && (
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
            </>
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={handleToggle}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl" onClick={isLoggedIn ? handleSignOut : undefined}>
            {isLoggedIn ? "Sign Out" : upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
