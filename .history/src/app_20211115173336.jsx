import './app.css';
import Habit from './components/habit';

function App() {
  //데이터를 받아온 비디오 목록을 가질 수 있는 state.
  //원하는 함수를 등록해 놓음녀 컴포넌트가 마운트가 되었거나 업데이트 될 때마다 호출함.
  return <Habit />;
}

export default App;
