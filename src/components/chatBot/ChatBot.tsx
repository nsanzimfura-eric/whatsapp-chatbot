import './ChatBot.scss';

const ChatBot = () => {
    return (
        <div className='chatbot'>
            <a
                href='https://api.whatsapp.com/send/?phone=250735317999&text&type=phone_number&app_absent=0'
                target='_blank'
                className='w-100 text-center'
            >
                Click here to chat with us
            </a>

        </div>
    );
};

export default ChatBot;