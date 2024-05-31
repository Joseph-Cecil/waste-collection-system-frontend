import { Grid, Container, Card, Text, Group } from '@mantine/core';

interface Profile {
  id: number;
  name: string;
  date: string;
  items: string[];
}

const data: Profile[] = [
  { id: 1, name: "Joshua Smith", date: "24th May, 2024", items: ["Nungua"] },
  { id: 2, name: "Sam Nana Julius", date: "1st May, 2024", items: ["Accra"] },
  { id: 3, name: "Bismarck Adicks", date: "5th January, 2024", items: ["Tema"] },
  { id: 4, name: "Akosua Gyemfi", date: "29th December, 2023", items: ["Tema"] },
  { id: 5, name: "Bismarck Adicks", date: "24th May, 2024", items: ["Tema"] },
  { id: 6, name: "Joshua Smith", date: "24th May, 2024", items: ["Nungua"] },
  { id: 7, name: "Sam Nana Julius", date: "1st May, 2024", items: ["Accra"] },
  { id: 8, name: "Bismarck Adicks", date: "5th January, 2024", items: ["Tema"] },
  { id: 9, name: "Akosua Gyemfi", date: "29th December, 2023", items: ["Tema"] },
  { id: 10, name: "Bismarck Adicks", date: "24th May, 2024", items: ["Tema"] },
  { id: 11, name: "Joshua Smith", date: "24th May, 2024", items: ["Nungua"] },
  { id: 12, name: "Sam Nana Julius", date: "1st May, 2024", items: ["Accra"] },
  { id: 13, name: "Bismarck Adicks", date: "5th January, 2024", items: ["Tema"] },
  { id: 14, name: "Akosua Gyemfi", date: "29th December, 2023", items: ["Tema"] },
  { id: 15, name: "Bismarck Adicks", date: "24th May, 2024", items: ["Tema"] },
  { id: 9, name: "Akosua Gyemfi", date: "29th December, 2023", items: ["Tema"] },
  { id: 10, name: "Bismarck Adicks", date: "24th May, 2024", items: ["Tema"] },
  { id: 11, name: "Joshua Smith", date: "24th May, 2024", items: ["Nungua"] },
  { id: 12, name: "Sam Nana Julius", date: "1st May, 2024", items: ["Accra"] },
  { id: 13, name: "Bismarck Adicks", date: "5th January, 2024", items: ["Tema"] },
  { id: 14, name: "Akosua Gyemfi", date: "29th December, 2023", items: ["Tema"] },
  { id: 15, name: "Bismarck Adicks", date: "24th May, 2024", items: ["Tema"] },
//   // Add more objects as needed
];

function ProfileCard({ name, date, items }: Profile) {
  return (
    <Card withBorder padding="xl" radius="md">
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {date}
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Group>
    </Card>
  );
}
export function AllRequests() {
  const getColumnSpan = (index: number) => {
    const pattern = [4, 8, 8, 4, 6, 6, 4, 4, 4]; // Define the repeating pattern
    const adjustedIndex = index % pattern.length; // Adjust index to fit within the pattern length
    return pattern[adjustedIndex]; // Get the span value from the pattern
  };

  return (
    <Container my="md">
      <Grid>
        {data.map((profile, index) => (
          <Grid.Col key={profile.id} span={{ base: 12, xs: getColumnSpan(index) }}>
            <ProfileCard {...profile} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}