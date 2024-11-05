import "./why.scss";
import Hart from '../assets/img/icons/hart.svg';
import Star from '../assets/img/icons/star.svg';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function Why() {

    const { ref, inView } = useInView({
        threshold: 0.6, // 50% видимости
    });

    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        if (inView) {
            const clientsElement = document.getElementById('clients');
            const winElement = document.getElementById('win');

            animateValue(clientsElement,
                parseInt(clientsElement.getAttribute('data-from')),
                parseInt(clientsElement.getAttribute('data-to')),
                500); // 2 секунды

            animateValue(winElement,
                parseInt(winElement.getAttribute('data-from')),
                parseInt(winElement.getAttribute('data-to')),
                500);
        }
    }, [inView]);


    return (
        <section className='why' >
            <div className="container border_top">
                <h2 className='psuedo_center'>Почему к нам стоит обратиться?</h2>
                <div className="why_container" ref={ref}>
                    <div className="why_item">
                        <div className='why_counter'>
                            <img src={Hart} alt=""/>
                            <span id='clients' data-from='50' data-to='118'>1</span>
                        </div>
                        <div className="why_content">
                            Клиентов доверяют нам
                        </div>
                    </div>
                    <div className="why_item">
                        <div className='why_counter'>
                            <img src={Star} alt=""/>
                            <span id='win' data-from='50' data-to='194'>1</span>
                        </div>
                        <div className="why_content">
                            Выигранных дела
                        </div>
                    </div>
                    <div className="why_item why_item_img">
                        <p>1 000 000 руб</p>
                        <div className="why_content">
                            Оспоренных штрафов
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why