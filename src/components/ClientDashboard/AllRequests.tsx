import { Grid, Container, Card, Text, Group, Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import api from '../../services/api'; // Import your API module here

// Define an interface for the trash data
interface TrashData {
  id: number;
  user: {
    username: string;
  };
  contact: string;
  location: string;
  is_delivered: boolean;
  take_out_date: string;
  updated_at: string;
}

function ProfileCard({ username, location, take_out_date }: { username: string; location: string; take_out_date: string }) {
  return (
    <Card withBorder padding="xl" radius="md">
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {username}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {take_out_date}
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {location}
      </Group>
    </Card>
  );
}

export function AllRequests() {
  const [trashs, setTrash] = useState<TrashData[]>([]); // Explicitly type trashs
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getAllTrashOrder();
        setTrash(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getColumnSpan = (index: number) => {
    const pattern = [4, 8, 8, 4, 6, 6, 4, 4, 4];
    const adjustedIndex = index % pattern.length;
    return pattern[adjustedIndex];
  };

  if (loading) {
    return (
      <Container my="md">
        <Loader />
        <Text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Container my="md">
      {trashs.length === 0 ? (
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Trash Request Empty
        </Text>
      ) : (
        <Grid>
          {trashs.map((trash, index) => (
            <Grid.Col key={index} span={{ base: 12, xs: getColumnSpan(index) }}>
              <ProfileCard
                username={trash.user.username}
                location={trash.location}
                take_out_date={trash.take_out_date}
              />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Container>
  );
}
