import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";

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
            <Text size="lg" className={classes.description}>
              Welcome to <b>EcoCycle</b>, where we transform the way you handle
              waste. Our cutting-edge technology ensures efficient and
              eco-friendly waste collection, making our cities cleaner and
              greener. Join us in revolutionizing waste management for a
              sustainable future
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button className={classes.control} variant="white" size="lg">
              Get started
            </Button>
          </div>
        </div>
      </div>
      <div
        className={classes.wrapperone}
        style={{ backgroundColor: "#404040" }}
      >
        <Title className={classes.title}>About Us</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Welcome to EcoCycle, a pioneer in smart waste management solutions.
            Our mission is to revolutionize the way waste is collected,
            processed, and recycled, making our communities cleaner, greener,
            and more sustainable. At EcoCycle, we believe that innovative
            technology can transform waste management, leading to a significant
            positive impact on our environment and quality of life.
          </Text>
        </Container>
      </div>
      <div className={classes.wrappervision}>
        <Title className={classes.title}>Our Vision</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            We envision a world where waste is efficiently managed, resources
            are conserved, and communities thrive in a clean and healthy
            environment. Our goal is to reduce landfill waste, promote
            recycling, and minimize pollution through intelligent and automated
            waste collection systems.{" "}
          </Text>
        </Container>
      </div>
      <div className={classes.wrapperjoinus}>
        <Title className={classes.title}>Join Us</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            We invite you to join us on our journey towards a cleaner and more
            sustainable future. Whether you are a city official, a business
            owner, or a resident, EcoCycle has the solutions to meet your waste
            management needs. Together, we can make a difference and build a
            better tomorrow.
          </Text>
        </Container>
      </div>
    </>
  );
}
