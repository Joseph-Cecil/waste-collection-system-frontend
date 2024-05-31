import { Container, Text, Title } from "@mantine/core";
import classes from "../components/HeroImageBackground.module.css";

const AboutUs = () => {
  return (
    <div
    className={classes.wrapperone}
    style={{ backgroundColor: "#404040" }}
  >
    <Title className={classes.title}>About Us</Title>

    <Container size={640}>
      <Text size="lg" color="white" className={classes.description}>
        Welcome to EcoCycle, a pioneer in smart waste management solutions.
        Our mission is to revolutionize the way waste is collected,
        processed, and recycled, making our communities cleaner, greener,
        and more sustainable. At EcoCycle, we believe that innovative
        technology can transform waste management, leading to a significant
        positive impact on our environment and quality of life.
      </Text>
    </Container>
  </div>
  )
}

export default AboutUs;
