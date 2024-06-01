import { Container, Divider, Group, Loader, Paper, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import api from '../../services/api';

interface TrashData {
  id: number;
  user: {
    username: string;
    email: string;
  };
  contact: string;
  location: string;
  is_delivered: boolean;
  take_out_date: string;
  updated_at: string;
}

const UpdateForm = () => {
  const [trashs, setTrash] = useState<TrashData[]>([]);
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

  if (loading) {
    return (
      <Container my="md">
        <Loader />
        <Text>Loading...</Text>
      </Container>
    );
  }

  const lastTrash = trashs[trashs.length - 1]; // Get the last trash item

  return (
    <>
      <Paper mt={100} mb={60} radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          Welcome to Eco-Cycle
        </Text>

        <Divider labelPosition="center" my="lg" />

        <Group>
          <Text>Username: {lastTrash.user.username}</Text>

        </Group>

        <Group>
        <Text style={{ whiteSpace: 'pre-wrap' }}>Email: {lastTrash.user.email}</Text>
        </Group>
      </Paper>
    </>
  );
};

export default UpdateForm;
