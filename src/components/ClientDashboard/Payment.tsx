import { Text, Title, Image } from "@mantine/core";
import classes from "./EmailBanner.module.css";

export function Payment() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Our Method of Payment</Title>
        <Text fw={500} fz="lg" mb={5}>
          Cash On Delivery
        </Text>
        <Text fz="sm" c="dimmed">
          At our ECOCYCLE, we offer flexible payment options to ensure your
          convenience and satisfaction with our trash removal services. For our
          regular monthly trash collection, we accept cash on delivery (COD).
          This means you pay for the service each time we visit your location to
          take out the trash, ensuring a straightforward and hassle-free
          transaction. Additionally, for those times when you need a special
          trash take-out outside of your regular schedule, we provide the option
          of instant cash on delivery. This immediate payment ensures that your
          urgent needs are met promptly and efficiently. Whether it's your
          routine collection or a one-time special request, our COD options are
          designed to accommodate your preferences and make the process as
          seamless as possible.
        </Text>
      </div>
      <Image
        src="https://th.bing.com/th/id/OIP.8QDoDHeU_NRDUxIaUpNEnAHaHa?rs=1&pid=ImgDetMain"
        className={classes.image}
      />
    </div>
  );
}
