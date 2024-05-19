import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setUserSelected, setFormIsOpen }) => {

  const handleDelete = () => {
    deleteUser(user.id)
  }

  const handleEdit = () => {
    setUserSelected(user)
    setFormIsOpen(true)
  }

  return (
    <article className='user'>
      <h3 className='user__name'>{user.first_name} {user.last_name}</h3>
      <hr className='user__hr'/>
      <ul className='user__list'>
        <li className='user__item'>
          <span className='user__label'>Email: </span>
          <span className='user__value'>{user.email}</span>
        </li>
        <li className='user__item'>
          <span className='user__label'>Birthday: </span>
          <span className='user__value'>{user.birthday}</span>
        </li>
      </ul>
      <footer className='user__footer'>
        <button className='user__btn user__delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className='user__btn user__edit' onClick={handleEdit}><i className='bx bxs-edit-alt'></i></button>
      </footer>
    </article>
  )
}

export default UserCard