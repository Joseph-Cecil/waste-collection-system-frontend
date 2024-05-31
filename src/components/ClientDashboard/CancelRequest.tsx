import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from './UserCardImage.module.css';

const stats = [
  { value: 'Nungua', label: 'Area' },
  { value: 'Cocoa Street ', label: 'Street' },
  { value: 'No 45', label: 'House Number' },
];

export function CancelRequest() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <div style={{margin: "0.5rem"}}>
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
      />
      <Avatar
        src="https://i.pinimg.com/736x/62/ab/5b/62ab5b67fac86b3596d8673a56dd8c64.jpg"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        12th May 2024
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Sam Nana Julius
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      <Button color='#D22B2B' fullWidth radius="md" mt="xl" size="md" >
        Cancel Request
      </Button>
    </Card>
    </div>
  );
}