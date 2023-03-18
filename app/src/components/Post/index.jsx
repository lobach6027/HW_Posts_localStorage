import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { delete_function } from '../../store/reducer/postReducer'
import s from './style.module.css'

export default function Post({id,title,text}) {
    const dispatch = useDispatch()
  return (
    <div className={s.card}>
        <div ><p className={s.title}>{title}</p>
        <p className={s.text}>{text}</p></div>
        <button onClick={()=>dispatch(delete_function(id))}><FontAwesomeIcon icon={faTrashCan}/></button>
    </div>
  )
}
