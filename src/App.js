import './App.css';
import { Content } from './component/content/Content';
import { Footer } from './component/footer/Footer';
import { Sidebar } from './component/sidebar/Sidebar';

function App() {
  return (
    <div className="container">
      <div className='sidebar__container'>
        <Sidebar/>
      </div>
      <div className='content__container'>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
