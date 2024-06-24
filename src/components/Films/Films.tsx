import React from 'react';
import {FilmType} from '../../types';
import FilmsItem from './FilmsItem';

interface Props {
  filmsList: FilmType[]
  onFilmItemChange: React.ChangeEventHandler<HTMLInputElement>
  onDeleteFilmItem: React.MouseEventHandler<HTMLButtonElement>
}

const Films: React.FC<Props> = ({filmsList, onFilmItemChange, onDeleteFilmItem}) => {
  return (
    <div className={'filmsList'}>
      <h3>To watch list:</h3>

      {
        filmsList.map((film) => {
          return (
            <FilmsItem
              key={film.id}
              filmName={film.name}
              onFilmItemChange={(event) => onFilmItemChange(event, film.id)}
              onDeleteFilmItem={() => onDeleteFilmItem(film.id)}
            />
          );
        })
      }
    </div>
  );
};

export default Films;