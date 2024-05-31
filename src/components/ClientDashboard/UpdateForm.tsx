import {  Button, Divider, Group, Paper, PaperProps, Stack, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';


interface UpdateForm extends PaperProps {
    path: string;
  }

const UpdateForm = () => {

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });



  return (
    <>
     <Paper mt={100} mb={60} radius="md" p="xl" withBorder>
      <Text size="lg" fw={500}>
        Welcome to Eco-Cycle
      </Text>

      <Divider labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
        
            <>
              <TextInput
                
                label="First Name"
                placeholder="Enter Your First Name Here"
                value={form.values.firstName}
                onChange={(event) =>
                  form.setFieldValue("firstName", event.currentTarget.value)
                }
                radius="md"
              />

              <TextInput
                
                label="Last Name"
                placeholder="Enter Your Last Name Here"
                value={form.values.lastName}
                onChange={(event) =>
                  form.setFieldValue("lastName", event.currentTarget.value)
                }
                radius="md"
              />

              <TextInput
               
                label="Phone Number"
                placeholder="Enter Your Phone Number Here"
                value={form.values.phoneNumber}
                onChange={(event) =>
                  form.setFieldValue("phoneNumber", event.currentTarget.value)
                }
                radius="md"
              />
            </>
          <Group>
            <Button type="submit" radius="xl">
            Update
          </Button>
          </Group>
         
        </Stack>

      </form>
    </Paper>
    </>
  );

   
  
}

export default UpdateForm
