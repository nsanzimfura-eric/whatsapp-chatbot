import './ChatBot.scss';

const ChatBot = () => {
    return (
        <div className='chatbot'>
            <a
                href='https://api.whatsapp.com/send/?phone=250735317999&text=%23start%20LEAD'
                target='_blank'
                className='w-100 text-center'
            >
                Click here to chat with us
            </a>

        </div>
    );
};

export default ChatBot;