import React from 'react';

interface Props {
  inputValue: string
  onFormSubmit: React.FormEventHandler<HTMLFormElement>
  onChangeValue: React.FormEventHandler<HTMLInputElement>
}

const AddFilmForm: React.FC<Props> = ({inputValue, onFormSubmit, onChangeValue}) => {
  return (
    <div className={'form-wrapper'}>
      <form id={'form'} onSubmit={onFormSubmit}>
        <input id={'form-input'} value={inputValue} type={'text'} placeholder={'Add new film'} onChange={onChangeValue}
               required/>
        <button type={'submit'} className={'btn'}>Add</button>
      </form>
    </div>
  );
};

export default AddFilmForm;