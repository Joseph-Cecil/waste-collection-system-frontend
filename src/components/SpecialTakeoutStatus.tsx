import { ActionIcon, RingProgress, Text, Center, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const SpecialTakeoutStatus = () => {
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
  </div>
  </>
  )
}

export default SpecialTakeoutStatus;