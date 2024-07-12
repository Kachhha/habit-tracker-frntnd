import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Habit {
  _id: string;
  name: string;
  frequency: string;
}

const HabitList: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/habits')
      .then(response => {
        setHabits(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the habits!", error);
      });
  }, []);

  return (
    <div>
      <h2>Habit List</h2>
      <ul>
        {habits.map(habit => (
          <li key={habit._id}>
            {habit.name} - {habit.frequency}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitList;
