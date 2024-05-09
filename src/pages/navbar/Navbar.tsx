import styles from './navbar.module.scss';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Contact Us', href: '#', current: false },
    { name: 'Pricing', href: '#', current: false },
]



const Navbar = () => {

    return (
        <main className={styles.navbar}>
            <div className=" container d-flex align-items-center h-100">
                <img
                    className="me-auto"
                    src="/vite.svg"
                    alt="UI"
                    width={40}
                    height={60}
                />
                <div className="mx-auto">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className='mx-2'
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Navbar;
