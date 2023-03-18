import { Route, Routes } from "react-router-dom";
import AllPostsPage from '../../pages/AllPostsPage'
import AddPostPage from '../../pages/AddPostPage'
import Header from "../Header";
import NotFoundPage from "../../pages/NotFoundPage";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path = "/" element={<AllPostsPage/>}/>
        <Route path = "/addpost" element={<AddPostPage/>}/>
        <Route path = "/*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
