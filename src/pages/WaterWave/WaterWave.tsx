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
                        <h1 className='d-flex w-100 px-2 justify-content-center align-items-center'>
                            Welcome To WhatsApp Chatbot! Please click on the link to WhatsApp and follow the instructions
                        </h1>
                        <ChatBot />
                    </div>
                )
            }
            }
        </WaterWave >

    );
};

export default WaterWaveComp;
