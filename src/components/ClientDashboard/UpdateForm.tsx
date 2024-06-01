import { Container, Divider, Group, Loader, Paper, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import api from '../../services/api';

interface UserData {

    username: string;
    email: string;

}

const UpdateForm = () => {
  const [profile, setProfile] = useState<UserData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getUserProfile();
        setProfile(response);
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



  return (
    <>
      <Paper mt={100} mb={60} radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          Welcome to Eco-Cycle
        </Text>

        <Divider labelPosition="center" my="lg" />

        <Group>
          <Text>Username: {profile?.username}</Text>

        </Group>

        <Group>
        <Text style={{ whiteSpace: 'pre-wrap' }}>Email: {profile?.email}</Text>
        </Group>
      </Paper>
    </>
  );
};

export default UpdateForm;
