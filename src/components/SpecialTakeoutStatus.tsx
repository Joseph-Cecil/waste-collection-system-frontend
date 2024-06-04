import { ActionIcon, RingProgress, Text, Center, rem, Container } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import api from '../services/api';
import Loader1 from './Loader1';

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

const SpecialTakeoutStatus = () => {
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
    <>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"40px",}}>
        <h1>Special Take Out Status</h1>
      </div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"40px", marginBottom:"150px"}}>
        <RingProgress
          sections={[{ value: 40, color: 'orange' }]}
          label={
            <Text c="orange" fw={700} ta="center" size="xl">
              Sent
            </Text>
          }
        />

        <RingProgress
          sections={[{ value: 40, color: 'blue' }]}
          label={
            <Text c="blue" fw={700} ta="center" size="xl">
              Pending
            </Text>
          }
        />

        {lastTrash.is_delivered && (
          <RingProgress
            sections={[{ value: 100, color: 'teal' }]}
            label={
              <Center>
                <ActionIcon color="teal" variant="light" radius="xl" size="xl">
                  <IconCheck style={{ width: rem(22), height: rem(22) }} />
                </ActionIcon>
              </Center>
            }
          />
        )}
      </div>
    </>
  );
}

export default SpecialTakeoutStatus;
