import './App.css';
import {MouseFollower } from './components/SupraComponents';
function App() {
  return (
    <>
    {/* <AnimatedText once={true} text="Supratim" className=' text-5xl font-bold inline-block'/> */}
    <div className=' w-full h-screen flex justify-center items-center'>
      <MouseFollower/>
    </div>
    </>
  );
}
export default App;

