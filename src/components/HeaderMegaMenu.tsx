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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Link } from "react-router-dom";
import classes from "./HeaderMegaMenu.module.css";
import LightAndDarkTheme from "./LightAndDarkTheme";



export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  

  return (
    <Box
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
      mb={0}
    >
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <LightAndDarkTheme />
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <Link to="/contact" className={classes.link}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Contact
                  </Box>
                </Center>
              </Link>
            </HoverCard>
            <a href="/about" className={classes.link}>
              About Us
            </a>
            <a href="/vision" className={classes.link}>
              Our Vision
            </a>
          </Group>
          <Group visibleFrom="sm">
            <Link to="/auth">
              <Button variant="default">Log in</Button>
            </Link>
            <Link to="/auth/register">
              <Button>Sign up</Button>
            </Link>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
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
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/contact" className={classes.link}>
              Contact Us
            </a>
            <a href="/about" className={classes.link}>
              About Us
            </a>
            <a href="/vision" className={classes.link}>
              Our Vision
            </a>

            <Divider my="sm" />
            <Group justify="center" pb="xl" px="md">
              <Link to="/auth">
                <Button variant="default">Log in</Button>
              </Link>
              <Link to="/auth/register">
                <Button>Sign up</Button>
              </Link>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </Box>
  );
}
