import React, { Dispatch, useState } from 'react';
import { Train, TrainData } from '../../types';
import './TrainForm.scss';

type props = {
  trainToUpdate: Train | null;
  setActive: Dispatch<React.SetStateAction<boolean>>;
  addTrain: (train: TrainData) => Promise<void>;
  editTrain: (id: string, data: TrainData) => Promise<void>;
};

export const TrainForm: React.FC<props> = ({
  trainToUpdate,
  setActive,
  addTrain,
  editTrain,
}) => {
  const [train, setTrain] = useState<TrainData>(
    trainToUpdate || {
      number: 0,
      from: '',
      to: '',
      days: [],
      departure: '',
      arrival: '',
    },
  );

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setTrain((prevTrain) => {
      let updatedDays: string[] = [];

      checked
        ? (updatedDays = [...prevTrain.days, name])
        : (updatedDays = prevTrain.days.filter((day) => day !== name));

      return {
        ...prevTrain,
        days: updatedDays,
      };
    });
  };

  const isChecked = (day: string) => {
    return train.days.includes(day);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setTrain((prevTrain) => ({ ...prevTrain, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trainToUpdate ? editTrain(trainToUpdate._id, train) : addTrain(train);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__head">
        {trainToUpdate ? (
          <h2 className="form__title">Edit train</h2>
        ) : (
          <h2 className="form__title">Add train</h2>
        )}
      </div>
      <div className="form__first-container">
        <div>
          <label className="form__label" htmlFor="number">
            Number:
            <input
              className="form__input"
              type="number"
              id="number"
              name="number"
              min="1"
              max="9999"
              value={train.number}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="form__label" htmlFor="from">
            From:
            <input
              className="form__input"
              type="string"
              id="from"
              name="from"
              value={train.from}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="form__label" htmlFor="to">
            To:
            <input
              className="form__input"
              type="string"
              id="to"
              name="to"
              value={train.to}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      <div style={{ marginBottom: '10px' }}>
        {trainToUpdate ? <span>Selected days</span> : <span>Select days</span>}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {daysOfWeek.map((day) => {
            return (
              <label key={day} htmlFor={day} className="form__checkbox">
                <input
                  type="checkbox"
                  name={day}
                  id={day}
                  value={day}
                  checked={isChecked(day)}
                  onChange={handleCheckboxChange}
                />
                {day}
              </label>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '15px',
        }}
      >
        <div>
          <label className="form__label" htmlFor="departure">
            Departure:
            <input
              style={{ cursor: 'pointer' }}
              className="form__input"
              type="time"
              id="departure"
              name="departure"
              value={train.departure}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label className="form__label" htmlFor="arrival">
            Arrival:
            <input
              style={{ cursor: 'pointer' }}
              className="form__input"
              type="time"
              id="arrival"
              name="arrival"
              value={train.arrival}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      <div className="form__button-container">
        <button className="button" onClick={() => setActive(false)}>
          Cancel
        </button>
        {trainToUpdate ? (
          <button className="button" type="submit" id="edit">
            Edit
          </button>
        ) : (
          <button className="button" type="submit" id="add">
            Add
          </button>
        )}
      </div>
    </form>
  );
};
