import { Container, Text, Title } from "@mantine/core";
import classes from "../components/HeroImageBackground.module.css";


const JoinUs = () => {
  return (
    
    <div className={classes.wrapperjoinus}>
    <Title className={classes.title}>Join Us</Title>

    <Container size={640}>
      <Text size="lg" color="white" className={classes.description}>
        We invite you to join us on our journey towards a cleaner and more
        sustainable future. Whether you are a city official, a business
        owner, or a resident, EcoCycle has the solutions to meet your waste
        management needs. Together, we can make a difference and build a
        better tomorrow.
      </Text>
    </Container>
  </div>
  )
}

export default JoinUs
