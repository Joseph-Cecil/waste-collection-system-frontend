import cx from 'clsx';
import { rem, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';
import classes from './DndListHandle.module.css';

const receiptData = [
  { id: 1, name: "Joshua Smith", date: "24th May, 2024", trashTakenOut: ["Kitchen", "Bathroom"] },
  { id: 2, name: "Sam Nana Julius", date: "1st May, 2024", trashTakenOut: ["Office"] },
  { id: 3, name: "Bismarck Adicks", date: "5th January, 2024", trashTakenOut: ["Garage", "Living Room"] },
  { id: 4, name: "Sandra Dee", date: "12th February, 2024", trashTakenOut: ["Bedroom"] },
  { id: 5, name: "George Mensah", date: "20th March, 2024", trashTakenOut: ["Backyard"] },
];

export function Receipts() {
  const [state, handlers] = useListState(receiptData);

  const items = state.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={item.id.toString()}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={classes.dragHandle}>
            <IconGripVertical style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </div>
          <Text className={classes.symbol}>{item.name}</Text>
          <div>
            <Text>{item.date}</Text>
            <Text c="dimmed" size="sm">
              Trash Taken Out: {item.trashTakenOut.join(', ')}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <div style={{ margin: "1rem" }}>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          handlers.reorder({ from: source.index, to: destination?.index || 0 })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
