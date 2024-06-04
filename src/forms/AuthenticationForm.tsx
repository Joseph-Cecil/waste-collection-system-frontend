import { useEffect, useState } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import api from "../services/api";
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
  Notification,
  rem
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Loader1 from "../components/Loader1";
import { IconX, IconCheck } from '@tabler/icons-react';

interface AuthenticationFormProps extends PaperProps {
  path: string;
}

export function AuthenticationForm({ path, ...props }: AuthenticationFormProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6 ? "Password should include at least 6 characters" : null,
    },
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ message: string, color: string, icon: React.ReactNode } | null>(null);

  useEffect(() => {
    if (path.includes("register")) {
      toggle("register");
    } else {
      toggle("login");
    }
  }, [path, toggle]);

  const handleFormSubmit = async () => {
    setLoading(true);
    setNotification(null);

    if (type === "login") {
      try {
        await api.login({ "email": form.values.email, "password": form.values.password });
        setIsLoggedIn(true);
        setLoading(false);
        navigate("/auth/client-dashboard");
      } catch (error) {
        setLoading(false);
        setNotification({
          message: "Login failed. Please try again.",
          color: "red",
          icon: <IconX style={{ width: rem(20), height: rem(20) }} />,
        });
        console.error("Login failed:", error);
      }
    } else {
      try {
        await api.register(form.values);
        setLoading(false);
        setNotification({
          message: "Registration successful! Please log in.",
          color: "teal",
          icon: <IconCheck style={{ width: rem(20), height: rem(20) }} />,
        });
        toggle("login");
      } catch (error) {
        setLoading(false);
        setNotification({
          message: "Registration failed. Please try again.",
          color: "red",
          icon: <IconX style={{ width: rem(20), height: rem(20) }} />,
        });
        console.error("Registration failed:", error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await api.logout();
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <Loader1 visible={loading} />
      <Paper mt={100} mr={20} mb={50} ml={20} radius="md" p="xl" withBorder {...props}>
        <Text size="lg" fw={500}>
          Welcome to Eco-Cycle, {type} with
        </Text>

        <Divider labelPosition="center" my="lg" />

        {notification && (
          <Notification icon={notification.icon} color={notification.color} title={notification.color === 'red' ? 'Bummer!' : 'All good!'} mt="md">
            {notification.message}
          </Notification>
        )}

        {!isLoggedIn && (
          <form onSubmit={form.onSubmit(handleFormSubmit)}>
            <Stack>
              {type === "register" && (
                <>
                  <TextInput
                    required
                    label="Username"
                    placeholder="Enter Your Username Here"
                    value={form.values.username}
                    onChange={(event) =>
                      form.setFieldValue("username", event.currentTarget.value)
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
                  checked={true}
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
                onClick={() => toggle()}
                size="xs"
              >
                {type === "register"
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </Anchor>
              <Button type="submit" radius="xl">
                {upperFirst(type)}
              </Button>
            </Group>
          </form>
        )}

        {isLoggedIn && (
          <Button onClick={handleLogout} radius="xl">
            Logout
          </Button>
        )}
      </Paper>
    </>
  );
}
