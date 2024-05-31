import { useState } from 'react';
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import classes from './TableSort.module.css';

interface RowData {
  name: string;
  day: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const data = [
  {
    name: 'Ashanti Region',
    day: 'Wednesday',
  },
  {
    name: 'Brong Ahafo Region',
    day: 'Monday',
  },
  {
    name: 'Central Region',
    day: 'Friday',
  },
  {
    name: 'Eastern Region',
    day: 'Sunday',
  },
  {
    name: 'Greater Accra Region',
    day: 'Thursday',
  },
  {
    name: 'Nothern Region',
    day: 'Saturday',
  },
  {
    name: 'Upper East Region',
    day: 'Tuesday',
  },
  {
    name: 'Upper West Region',
    day: 'Monday',
  },
  {
    name: 'Volta Region',
    day: 'Thursday',
  },
  {
    name: 'Western Region',
    day: 'Friday',
  },
  {
    name: 'Savannah Region',
    day: 'Sunday',
  },
  {
    name: 'Bono East Region',
    day: 'Wednesday',
  },
  {
    name: 'Oti Region',
    day: 'Tuesday',
  },
  {
    name: 'Ahafo Region',
    day: 'Saturday',
  },
  {
    name: 'Western North Region',
    day: 'Monday',
  },
  {
    name: 'North East Region',
    day: 'Thursday',
  },
];

export function TakeOutsTable() {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.day}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea  mt={60} mb={1} ml={10} mr={10}>
      <TextInput
        placeholder="Search by any field"
        mb="xl"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table ml={10} mr={10} horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
        <Table.Tbody>
          <Table.Tr>
            <Th
              sorted={sortBy === 'name'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('name')}
            >
              Name
            </Th>

            <Th
              sorted={sortBy === 'day'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('day')}
            >
              Day
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
