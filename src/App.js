import FeedbackList from "./component/FeedbackList";
import { Navigate, Route, Routes } from "react-router-dom";
import FeedbackForm from "./component/FeedbackForm";
const DUMMY_DATA = []
function App() {
  const dataHandler = (data) => {
    DUMMY_DATA.push(data);
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to='/login'/>} />
        <Route path="/admin" element={<FeedbackList DUMMY_DATA={DUMMY_DATA} />}/>
        <Route path="/login" element={<FeedbackForm fetchData={dataHandler}/>}/>
      </Routes>
    </div>
  );
}

export default App;
