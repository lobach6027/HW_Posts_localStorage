import React from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { add_function } from "../../store/reducer/postReducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Form() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const submit = (e) => {
    e.preventDefault();
    const { title, userId, text } = e.target;
    const newPost = {id:Date.now(), title: title.value, userId: userId.value, text: text.value };
    console.log(newPost);
    dispatch(add_function(newPost));
    toast.success('Done!', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    title.value = "";
    userId.value = "";
    text.value = "";
  };
  return (
   <>
    <div>
      <h1>Add new post</h1>
      <form onSubmit={submit} className={s.form}>
        <div className={s.author_info}>
          <input type="text" name="title" placeholder="Title..." />
          <input type="text" name="userId" placeholder="Author id..." />
          <input className={s.button} type="submit" value="Add post" />
        </div>
        <textarea
          name="text"
          cols="60"
          rows="10"
          placeholder="Enter post"
        ></textarea>
      </form>
    </div>
    <ToastContainer
position="top-left"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  );
}
