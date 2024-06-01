import { Card, Avatar, Text, Group, Button, Container, Loader } from '@mantine/core';
import classes from './UserCardImage.module.css';
import { useEffect, useState } from 'react';
import api from '../../services/api';


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
export function CancelRequest() {
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
        <Loader />
        <Text>Loading...</Text>
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
  const handleSubmit = async () => {
    console.log('hello')
    try {
      const response = await api.deleteTrash(`${lastTrash.id}`);
      setTrash(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

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
        {lastTrash.take_out_date}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {lastTrash.user.username}
      </Text>
      <Group mt="md" justify="center" gap={30}>
        <Text ta="center" fz="sm" c="dimmed">
          {lastTrash.location}
        </Text>
      </Group>
      <Button onClick={handleSubmit} color='#D22B2B' fullWidth radius="md" mt="xl" size="md" >
        Cancel Request
      </Button>
    </Card>
    </div>
  );
}