import { Container, Text, Title } from "@mantine/core";
import classes from "../components/HeroImageBackground.module.css";


const OurVision = () => {
  return (
    <div className={classes.wrappervision}>
        <Title className={classes.title}>Our Vision</Title>

        <Container size={640}>
          <Text size="lg" color="white" className={classes.description}>
            We envision a world where waste is efficiently managed, resources
            are conserved, and communities thrive in a clean and healthy
            environment. Our goal is to reduce landfill waste, promote
            recycling, and minimize pollution through intelligent and automated
            waste collection systems.{" "}
          </Text>
        </Container>
      </div>
  )
}

export default OurVision;
