import WaterWaveComp from './pages/WaterWave/WaterWave';
import Navbar from './components/navbar/Navbar';
import './styles/index.scss';


function App() {

  return (
    <main className='app'>
      <div className='d-none d-md-block d-flex flex-column'>
        <Navbar />
        <WaterWaveComp />
      </div>
      <div className='d-block d-md-none text-white'>Only visible on Larger screens</div>
    </main>

  )
}

export default App
