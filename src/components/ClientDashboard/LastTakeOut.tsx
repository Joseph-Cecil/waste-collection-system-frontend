import { Button, Paper, Text, Group, Container } from '@mantine/core';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import Loader1 from '../Loader1';

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
export function LastTakeOut() {
  const [trashs, setTrash] = useState<TrashData[]>([]); // Explicitly type trashs
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getAllTrashOrder();
        console.log('inside component', response)
        setTrash(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container my="md">
<Loader1 visible={loading} />
      </Container>
    );
  }


  if (trashs.length === 0) {
    return (
      <Container my="md">
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Trash Request Empty
        </Text>
      </Container>
    );
  }

  const lastTrash = trashs[trashs.length - 1]; // Get the last item in the array

  return (
    <div style={{ marginTop: "10rem", marginRight: "1rem", marginBottom: "10rem", marginLeft: "1rem" }}>
      <Paper withBorder p="xl" radius="md" shadow="md">
        <Group justify="space-between" mb="xs">
          <Text fz="md" fw={500}>
            Last Time You Requested Your Trash To Be Taken
          </Text>
        </Group>
        <Text c="dimmed" fz="xs">
          {lastTrash.take_out_date}
        </Text>
        <Group justify="flex-end" mt="md">
          <Button variant="default" size="xs">
            Name: {lastTrash.user.username}
          </Button>
          <Button variant="outline" size="xs">
            Location: {lastTrash.location}
          </Button>
        </Group>
      </Paper>
    </div>
  );
}
