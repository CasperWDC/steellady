import "./why.scss";
import Hart from '../assets/img/icons/hart.svg';
import Star from '../assets/img/icons/star.svg';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function Why ({ content }) {

    if (!content || content?.acf?.w_visible == 'false') {
        console.log('data fetching')
        return
    }

    const { ref, inView } = useInView({
        threshold: 0.6, // 60% видимости
    });

    const animateValue = (
        element,
        start,
        end,
        duration
    ) => {
        if (!element) return;

        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerText = Math.floor(progress * (end - start) + start).toString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        if (inView) {
            const clientsElement = document.getElementById("clients");
            const winElement = document.getElementById("win");

            if (clientsElement) {
                animateValue(
                    clientsElement,
                    parseInt(clientsElement.getAttribute("data-from") || "0", 10),
                    parseInt(clientsElement.getAttribute("data-to") || "0", 10),
                    500
                );
            }

            if (winElement) {
                animateValue(
                    winElement,
                    parseInt(winElement.getAttribute("data-from") || "0", 10),
                    parseInt(winElement.getAttribute("data-to") || "0", 10),
                    500
                );
            }
        }
    }, [inView]);



    return (
        <section className='why' >
            <div className="container">
                <h2 className='psuedo_center'>{content?.acf?.w_title}</h2>
                <div className="why_container" ref={ref}>
                    <div className="why_item">
                        <div className='why_counter'>
                            <img src={Hart} alt=""/>
                            <span id='clients' data-from='50' data-to={content?.acf?.w_f_num}>1</span>
                        </div>
                        <div className="why_content">
                            {content?.acf?.w_f_block}
                        </div>
                    </div>
                    <div className="why_item">
                        <div className='why_counter'>
                            <img src={Star} alt=""/>
                            <span id='win' data-from='50' data-to={content?.acf?.w_s_num}>1</span>
                        </div>
                        <div className="why_content">
                            {content?.acf?.w_s_block}
                        </div>
                    </div>
                    <div className="why_item why_item_img">
                        <p>{content?.acf?.w_t_num}</p>
                        <div className="why_content">
                            {content?.acf?.w_t_block}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why