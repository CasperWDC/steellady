import "./scrolltop.scss";

function ScrollTop() {

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Плавная прокрутка
        });
    };

    return (
        <button className="scroll-to-top" onClick={() => handleTop()}>
            <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_20950_1797)">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.4375 20.5625L20.625 4.375C23.0625 1.9375 27 1.9375 29.4375 4.375L45.625 20.5625C49.5625 24.5 46.75 31.25 41.1875 31.25H8.8125C3.25 31.25 0.500001 24.5 4.4375 20.5625Z"
                          fill="#1F2732"/>
                </g>
                <defs>
                    <clipPath id="clip0_20950_1797">
                        <rect width="50" height="31.25" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </button>
    )
}

export default ScrollTop