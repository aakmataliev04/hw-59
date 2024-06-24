import React from 'react';

interface Props {
  filmName: string;
  onFilmItemChange: React.ChangeEventHandler<HTMLInputElement>
  onDeleteFilmItem: React.MouseEventHandler<HTMLButtonElement>
}
const FilmsItem: React.FC<Props> = React.memo(({filmName, onFilmItemChange, onDeleteFilmItem}) => {
  return (
    <div className={'film'}>
      <input className={'film-input'} type="text" placeholder={'Film name'} value={filmName} onChange={onFilmItemChange}/>
      <button className={'delete-btn'} onClick={onDeleteFilmItem}></button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.filmName === nextProps.filmName;
});

export default FilmsItem;