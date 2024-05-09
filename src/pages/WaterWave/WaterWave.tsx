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
            {({ pause, play }: { pause: () => void, play: () => void }) => {

                return (
                    <div className="container bg-none d-flex justify-content-center align-items-center">
                        <h1>Water Wave</h1>
                        <div className='d-flex mb-5'>
                            <button className="btn me-2 bg-light" onClick={pause}>
                                Pause
                                🙅‍
                            </button>
                            <button className="btn bg-light" onClick={play}>
                                Play{' '}
                                🙆‍
                            </button>
                        </div>
                        <div className='text-secondary'>
                            MIT ©{' '}
                            <a
                                href="https://github.com/nsanzimfura-eric"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                )
            }
            }
        </WaterWave >

    );
};

export default WaterWaveComp;
