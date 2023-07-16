import TaskDetails from '@/components/calendar/TaskDetails';

export default function Calendar() {
  return (
    <div>
      <TaskDetails
        task={{
          id: 1,
          title: 'test',
          dueDate: '2022-10-10T09:00:00.000Z',
          isFinished: false,
          type: 'test',
        }}
      />
    </div>
  );
}
