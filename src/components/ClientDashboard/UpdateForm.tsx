import { Container, Divider, Group, Paper, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import Loader1 from '../Loader1';

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
        <Loader1 visible={loading} />
      </Container>
    );
  }

  return (
    <>
      <Paper mt={100} mr={20} mb={60} ml={20} radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          Welcome to Eco-Cycle Profile Page
        </Text>

        <Divider labelPosition="center" my="lg" />

        <Group>
          <Text><b>Username:</b> {profile?.username}</Text>
        </Group>

        <Divider labelPosition="center" my="lg"/>

        <Group>
          <Text style={{ whiteSpace: 'pre-wrap' }}><b>Email:</b> {profile?.email}</Text>
        </Group>
      </Paper>
    </>
  );
};

export default UpdateForm;

