import React, { ChangeEvent, useMemo } from 'react';
import { Train } from '../../types';
import './TrainsTable.scss';
import deleteIcon from '../../icons/delete.png';
import editIcon from '../../icons/edit.png';
import { useSearchParams } from 'react-router-dom';
import { getFilteredTrains } from '../../utils/getFilteredTrains';

type Props = {
  trains: Train[];
  onAdd: () => void;
  onEdit: (train: Train) => void;
  deleteTrain: (id: string) => void;
};

export const TrainsTable: React.FC<Props> = ({
  trains,
  onAdd,
  onEdit,
  deleteTrain,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value) {
      searchParams.set('query', value);
    } else {
      searchParams.delete('query');
    }

    setSearchParams(searchParams);
  };

  const filteredtrains = useMemo(
    () => getFilteredTrains(trains, query),
    [trains, query],
  );

  return (
    <div>
      <div>
        <button className="button" onClick={onAdd}>
          Add train
        </button>
        <input
          style={{ marginLeft: '20px' }}
          className="search-query"
          type="search"
          placeholder="Search"
          value={query}
          onChange={handleSearchQuery}
        />
      </div>

      <table className="content-table">
        <thead>
          <tr>
            <th>
              Train <br></br> number
            </th>
            <th>
              From /<br></br>To
            </th>
            <th>Days</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredtrains?.map((train) => {
            const { _id, number, from, to, days, departure, arrival } = train;

            return (
              <tr key={_id}>
                <td>{number}</td>
                <td>
                  <span>
                    {from} {'/'}
                  </span>
                  <br></br>
                  <span>{to}</span>
                </td>
                <td>{days}</td>
                <td>{departure}</td>
                <td>{arrival}</td>
                <td>
                  <div className="button-container">
                    <button
                      type="button"
                      className="button-table"
                      onClick={() => deleteTrain(_id)}
                    >
                      <img height="20px" src={deleteIcon} alt="delete button" />
                    </button>
                    <button
                      type="button"
                      className="button-table"
                      onClick={() => onEdit(train)}
                    >
                      <img height="20px" src={editIcon} alt="delete button" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
