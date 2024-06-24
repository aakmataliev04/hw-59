import React, {ChangeEvent, FormEvent, useState} from 'react';
import AddFilmForm from '../components/addFilmForm/addFilmForm';
import {FilmType} from '../types';
import Films from '../components/Films/Films';

const FilmsPage = () => {
  const [filmsList, setFilmsList] = useState<FilmType[]>([
    {id: 1, name: 'BladeRunner 2049'},
    {id: 2, name: 'BladeRunner 1982'},
    {id: 3, name: 'BladeRunner 2099'}
  ]);
  const [InputValue, setInputValue] = useState('');

  const addFilm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * 100);
    setFilmsList(prevState => [...prevState, {id: randomNum, name: InputValue}]);
    setInputValue('');
  };
  const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const changeFilmItemValue = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    setFilmsList(prevState => {
      const index = prevState.findIndex((item) => {
        return item.id === id;
      });
      prevState[index].name = event.target.value;
      return  [...prevState];
    });
  };
  const deleteFilmItem = ( id: number) => {
    setFilmsList((prevState) => {
      const copyPrevState = [...prevState] ;
      const index = prevState.findIndex((item) => {
        return item.id === id;
      });
      copyPrevState.splice(index, 1);
      return [...copyPrevState];
    });
  };


  return (
    <div>
      <AddFilmForm inputValue={InputValue} onFormSubmit={addFilm} onChangeValue={(event) => changeInputValue(event)}/>
      <Films filmsList={filmsList} onFilmItemChange={changeFilmItemValue} onDeleteFilmItem={deleteFilmItem}/>
    </div>
  );
};

export default FilmsPage;