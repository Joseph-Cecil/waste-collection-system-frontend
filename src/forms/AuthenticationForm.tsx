import { useEffect, useState } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import  api  from "../services/api";
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
  Stack
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    if (path.includes("register")) {
      toggle("register");
    } else {
      toggle("login");
    }
  }, [path, toggle]);

  const handleFormSubmit = async () => {
    if (type === "login") {
      // Call login API with form values
      try {
        // Replace the following with your login API call
        console.log(form.values.email, form.values.password);
        await api.login({"email":form.values.email, "password":form.values.password});
        // console.log("innnnnnnnn ",response)
        // Assuming successful login, update authentication state
        setIsLoggedIn(true);
        navigate("/auth/client-dashboard")
      } catch (error) {

        console.error("Login failed:", error);
      }
      console.log("successful")
    } else {
      // Call register API with form values
      try {
        // Replace the following with your register API call
        const response = await api.register(form.values);
        console.log("Registering  ", response)
        // Assuming successful registration, update authentication state
        // setIsLoggedIn(true);
        toggle("login");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    }
  };

  const handleLogout = async () => {
    // Call logout API
    try {
      // Replace the following with your logout API call
      console.log("processing logout")
      await api.logout();
      console.log("LOgining out")
      // Assuming successful logout, update authentication state
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Paper mt={100} radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Eco-Cycle, {type} with
      </Text>

      <Divider labelPosition="center" my="lg" />

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
  );
}
