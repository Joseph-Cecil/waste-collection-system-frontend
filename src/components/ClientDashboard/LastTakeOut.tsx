import { Button, Paper, Text, Group } from '@mantine/core';

export function LastTakeOut() {
  return (
    <div style={{marginTop:"10rem", marginRight:"1rem", marginBottom:"10rem", marginLeft:"1rem"}}>
    <Paper withBorder p="xl" radius="md" shadow="md">
      <Group justify="space-between" mb="xs">
        <Text fz="md" fw={500}>
          Last Time You Requested Your Trash To Be Taken
        </Text>
      </Group>
      <Text c="dimmed" fz="xs">
        12TH JNUE, 2024
      </Text>
      <Group justify="flex-end" mt="md">
        <Button variant="default" size="xs">
          Name: Bismarck Adiks
        </Button>
        <Button variant="outline" size="xs">
          Location: North Kaneshi
        </Button>
      </Group>
    </Paper>
    </div>
  );

  
}