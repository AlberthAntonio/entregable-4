import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css';

const FormUser = ({ createUser, userSelected, updateUser, setUserSelected, formIsOpen, setFormIsOpen }) => {
  
  const { handleSubmit, register, reset, formState: { errors }, setError, clearErrors } = useForm();

  useEffect(() => {
    reset(userSelected);
  }, [userSelected, reset]);
  

  const submit = (data) => {
    const allFieldsFilled = Object.values(data).every(field => field !== '');
    if (!allFieldsFilled) {
      setError('form', { type: 'manual', message: 'Complete todos los espacios' });
      return;
    }
    clearErrors('form');

    if(userSelected){
      // Update
      updateUser(userSelected.id, data);
      setUserSelected();
    } else {
      // Create
      createUser(data);
    }

    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    });
    setFormIsOpen(false);
  };

  const handleExit = () => {
    setFormIsOpen(false);
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    });
    setUserSelected();
  };

  return (
    <div className={`form-container ${formIsOpen || 'form__close'}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <span onClick={handleExit} className="form__exit">X</span>
        <h2 className="form__tittle">{userSelected ? 'Register form' : 'Create User Form'}</h2>
        <div className="form__list">
          <label className='form__field'>
            <span className="form__label">Email: </span>
            <input
              className="form__input"
              {...register('email', {
                required: 'Este campo es obligatorio',
                minLength: { value: 12, message: 'Ingrese Minimo de 12 caracteres' }
              })}
              type="email"
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </label>
          <label className='form__field'>
            <span className="form__label">Password: </span>
            <input
              className="form__input"
              {...register('password', { required: 'Este campo es obligatorio' })}
              type="password"
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </label>
          <label className='form__field'>
            <span className="form__label">First Name: </span>
            <input
              className="form__input"
              {...register('first_name', { required: 'Este campo es obligatorio' })}
              type="text"
            />
            {errors.first_name && <p className="error-message">{errors.first_name.message}</p>}
          </label>
          <label className='form__field'>
            <span className="form__label">Last Name: </span>
            <input
              className="form__input"
              {...register('last_name', { required: 'Este campo es obligatorio' })}
              type="text"
            />
            {errors.last_name && <p className="error-message">{errors.last_name.message}</p>}
          </label>
          <label className='form__field'>
            <span className="form__label">Birthday: </span>
            <input
              className="form__input"
              {...register('birthday', { required: 'Este campo es obligatorio' })}
              type="date"
            />
            {errors.birthday && <p className="error-message">{errors.birthday.message}</p>}
          </label>
        </div>
        <button className="form__btn">Submit</button>
      </form>
    </div>
  );
};

export default FormUser;
