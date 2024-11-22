import "./services.scss";

import Service1 from '../assets/img/services/s1.svg'
import Service2 from '../assets/img/services/s2.svg'
import Service3 from '../assets/img/services/s3.svg'
import Service4 from '../assets/img/services/s4.svg'
import Service5 from '../assets/img/services/s5.svg'
import Service6 from '../assets/img/services/s6.svg'
import Service7 from '../assets/img/services/s7.svg'
import Service8 from '../assets/img/services/s8.svg'

function Header() {

    const services = [
        {
            img: Service1,
            title: 'Лицензирование в ДНР',
            text: 'Поможем оформить или продлить лицензию в разных видах хоз. деятельности.',
            link: '/'
        },
        {
            img: Service2,
            title: 'Бюро переводов',
            text: 'Услуги по переводу (как простому, так и нотариально заверенному) любых текстов',
            link: '/'
        },
        {
            img: Service3,
            title: 'Оформление документов РФ',
            text: 'Посреднические услуги в оформлении Полного пакета документов гражданина РФ',
            link: '/'
        },
        {
            img: Service4,
            title: 'Наследственное право',
            text: 'Вступление в наследство, оспаривание завещания, восстановление срока по наследственным делам.',
            link: '/'
        },
        {
            img: Service5,
            title: 'Корпоративное право',
            text: 'Услуги, связанные с созданием, реорганизацией, легализацией бизнеса. Сопровождение сделок.',
            link: '/'
        },
        {
            img: Service6,
            title: 'Представление в суде ДНР',
            text: 'Весь спектр юридических услуг по защите интересов в судебных разбирательствах',
            link: '/'
        },
        {
            img: Service7,
            title: 'Уголовное право',
            text: 'Представительство адвоката в органах дознания на досудебном следствии, в уголовном процессе.',
            link: '/'
        },
        {
            img: Service8,
            title: 'Семейные споры',
            text: 'Расторжение брака, раздел имущества, взыскание алиментов, родительские права.',
            link: '/'
        },
    ]


    return (
        <section className='services' id='services'>
            <div className="container border_top">
                <h2 className='psuedo_left'>Наши услуги</h2>
                <div className="services_container">
                    {services.map((service, index) => {
                        return (
                            <a key={index} href={service.link} className="services_item">
                                <div className="services_title">
                                    <img src={service.img} alt=""/>
                                    <p>{service.title}</p>
                                </div>
                                <p className='services_content'>
                                    {service.text}
                                </p>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Header