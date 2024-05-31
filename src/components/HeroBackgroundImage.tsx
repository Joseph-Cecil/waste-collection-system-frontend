import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import { Link } from "react-router-dom";

export function HeroImageBackground() {
  return (
    <>
      {" "}
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            EcoCycle: Revolutionizing{" "}
            <Text component="span" inherit className={classes.highlight}>
              Waste Management
            </Text>
          </Title>

          <Container size={640}>
            <Text size="lg" color="white" className={classes.description}>
              Welcome to <b>EcoCycle</b>, where we transform the way you handle
              waste. Our cutting-edge technology ensures efficient and
              eco-friendly waste collection, making our cities cleaner and
              greener. Join us in revolutionizing waste management for a
              sustainable future
            </Text>
          </Container>

          <div className={classes.controls}>
            <Link to="/auth/client-dashboard">
            <Button className={classes.control} variant="white" size="lg">
              Get started
            </Button>
            </Link>
          </div>
        </div>
      </div>
     
     
    </>
  );
}
