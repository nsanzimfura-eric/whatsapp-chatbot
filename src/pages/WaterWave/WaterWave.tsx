import ChatBot from '../../components/chatBot/ChatBot';
import './WaterWave.scss';
// @ts-ignore
import WaterWave from 'react-water-wave';

const image = '/images/backetBg.jpg';

const WaterWaveComp = () => {
    return (
        <WaterWave
            imageUrl={image as string}
            className="WaterWave"

        >
            {() => {

                return (
                    <div className="container bg-none d-flex justify-content-center align-items-center">
                        <h1>Hello, Plz Answer to these Questions, so that, we help you</h1>
                        <ChatBot />
                    </div>
                )
            }
            }
        </WaterWave >

    );
};

export default WaterWaveComp;
