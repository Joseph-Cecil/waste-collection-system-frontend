import {
  HoverCard,
  Group,
  Button,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./HeaderMegaMenu.module.css";
import LightAndDarkTheme from "./LightAndDarkTheme";
import api from "../services/api"; // Make sure to import your api

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  // Manage authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check local storage for jwtToken on component mount
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await api.logout();
      localStorage.removeItem("jwtToken");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const linkStyles = {
    color: colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.dark[9],
  };

  return (
    <Box
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
      mb={0}
    >
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <LightAndDarkTheme />
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link} style={linkStyles}>
              Home
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <Link to="/contact" className={classes.link} style={linkStyles}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Contact
                  </Box>
                </Center>
              </Link>
            </HoverCard>
            <a href="/about" className={classes.link} style={linkStyles}>
              About Us
            </a>
            <a href="/vision" className={classes.link} style={linkStyles}>
              Our Vision
            </a>
          </Group>
          <Group visibleFrom="sm">
            {isLoggedIn ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="default">Log in</Button>
                </Link>
                <Link to="/auth/register">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </Group>
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>
      <Box style={{ flex: "1 0 auto", overflow: "auto" }}>
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100vh"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            <a href="/" className={classes.link} style={linkStyles}>
              Home
            </a>
            <a href="/contact" className={classes.link} style={linkStyles}>
              Contact Us
            </a>
            <a href="/about" className={classes.link} style={linkStyles}>
              About Us
            </a>
            <a href="/vision" className={classes.link} style={linkStyles}>
              Our Vision
            </a>
            <Divider my="sm" />
            <Group justify="center" pb="xl" px="md">
              {isLoggedIn ? (
                <Button onClick={handleLogout}>Logout</Button>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="default">Log in</Button>
                  </Link>
                  <Link to="/auth/register">
                    <Button>Sign up</Button>
                  </Link>
                </>
              )}
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </Box>
  );
}
