import {useState, ChangeEvent, FormEvent, KeyboardEvent, useEffect} from 'react';
import "./contactUs.scss";
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUs ({ content }) {

    if (!content || content?.acf?.c_visible == 'false') {
        console.log('data fetching')
        return
    }

    useEffect(() => {
        AOS.init();
    }, [])

    const email = content?.acf?.email;
    const [isCopied, setIsCopied] = useState(false);
    const [form, setForm] = useState({
        name: "",
        contact: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const patterns = {
        tel: {
            pattern: /^\+?[0-9\s-]{8,}$/,
            keyPattern: /^[0-9+\s-]$/
        },
        text: {
            pattern: /^[a-zA-Zа-яА-Я0-9\s@\-_]+$/,
            keyPattern: /^[a-zA-Zа-яА-Я0-9\s@\-_]$/
        },
        textarea: {
            pattern: /^[a-zA-Zа-яА-Я0-9\s@\-_]+$/,
            keyPattern: /^[a-zA-Zа-яА-Я0-9\s@\-_]$/
        }
    };

    const validateField = (value, type) => {
        if (type === "textarea" && !value) {
            return true;
        }
        return patterns[type]?.pattern.test(value);
    };

    const handleChange = (event) => {
        setSuccessMessage("");
        const { name, value, type } = event.target;
        const isValid = validateField(value, type);
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: !isValid }));
    };

    const handleKeyDown = (event) => {
        setSuccessMessage("");
        const { key, type, ctrlKey, metaKey } = event;
        const pattern = patterns[type]?.keyPattern;

        if (
            pattern &&
            !pattern.test(key) &&
            !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"].includes(key) &&
            !ctrlKey &&
            !metaKey
        ) {
            event.preventDefault();
        }
    };

    const handleCopy = (event) => {
        const emailToCopy = event.currentTarget.getAttribute("data-mail");

        navigator.clipboard.writeText(emailToCopy).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 3000);
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isValidForm = Object.keys(form).every((key) => {
            if (key === "contact") {
                return validateField(form[key], "tel");
            } else if (key === "message") {
                if (form[key].trim() === "") {
                    return true;
                } else {
                    return validateField(form[key], "textarea");
                }
            } else {
                return validateField(form[key], "text");
            }
        });

        if (!isValidForm || !form.contact) {
            setErrors({
                name: !validateField(form.name, "text"),
                contact: !validateField(form.contact, "tel"),
            });
            setSuccessMessage("");
            return;
        }

        try {
            const loader = document.querySelector(".loader");
            if (loader) loader.style.display = "block";

            await emailjs.send(
                "service_oysd6so",
                "template_vtpcpgo",
                {
                    from_name: form.name,
                    to_name: "nikisshlife@gmail.com",
                    subject: "Новая заявка с сайта Jurist-Stalnaya.ru",
                    message: `Имя: ${form.name}\nКонтакт: ${form.contact}\nСообщение: ${form.message}`,
                },
                { publicKey: "8VMs9CNZgMrnhOttL" }
            );

            if (loader) loader.style.display = "none";
            setSuccessMessage("Спасибо за запрос, мы свяжемся с Вами!");
            setForm({ name: "", contact: "", message: "" });
            setErrors({});
        } catch (error) {
            const loader = document.querySelector(".loader");
            if (loader) loader.style.display = "none";
            setErrors({ form: "Что-то пошло не так, письмо не отправлено" });
        }
    };

    return (
        <section className='contactUs' id='contacts'>
            <div className="container">
                <h2 className='psuedo_center'>{content?.acf?.c_title}</h2>
                <div className="contactUs_container">
                    <div className="contactUs_info" data-aos="fade-right">
                        <div className="contactUs_item schedule">
                            <p>График работы:</p>
                            <p>{content?.acf?.schedule?.schedule_f}</p>
                            <p>{content?.acf?.schedule?.schedule_s}</p>
                        </div>

                        <div className="contactUs_item tel">
                            <a href={`tel:${content?.acf?.phons?.phon_f}`}>{content?.acf?.phons?.phon_f} (Viber)</a>
                            <a href={`tel:${content?.acf?.phons?.phon_s}`}>{content?.acf?.phons?.phon_s} (Telegram, WhatsApp)</a>
                        </div>

                        <div className="contactUs_item mail">
                            <p className='mail_copy' data-mail={email} onClick={handleCopy}>
                                {email}
                                <span className={`copyed ${isCopied ? 'active' : ''}`}>Почта скопирована</span>
                            </p>
                        </div>

                        <div className="contactUs_item adress">
                            <p>{content?.acf?.adress?.adress_f}</p>
                            <p>{content?.acf?.adress?.adress_s}</p>
                            <a href={content?.acf?.adress?.adress_map} target='_blank'>Построить маршрут</a>
                        </div>
                    </div>

                    <div className="contactUs_form" data-aos="fade-left">

                        <form className='contact_us' id='contact_us' onSubmit={handleSubmit} noValidate>

                            <h2 className='psuedo_center form_title_mob'>Оставьте заявку</h2>

                            <label htmlFor="name">
                                <p className='required'>Ваше имя*</p>
                                <input
                                    type="text"
                                    value={form.name}
                                    name="name"
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className={errors.name ? 'error' : ''}
                                />
                            </label>

                            <label htmlFor="phone">
                                <p className='required'>Номер телефона*</p>
                                <input
                                    type="tel"
                                    name="contact"
                                    value={form.contact}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className={errors.contact ? 'error' : ''}
                                />
                            </label>

                            <label htmlFor="message">
                                <p>Ваш вопрос:</p>
                                <textarea
                                    rows={4}
                                    value={form.message}
                                    name="message"
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    className='message'
                                />
                            </label>
                            <label className='personal_data'>
                                <input type="checkbox" name="scales" defaultChecked/>
                                <span>Я согласен на обработку персональных данных</span>
                            </label>

                            {Object.values(errors).some(error => error) &&
                                <p className="error_message">Заполните поля корректно</p>}
                            {successMessage && <p className="success_message">{successMessage}</p>}

                            <button type='submit' disabled={successMessage ? true : false}>
                                Заказать звонок
                                <span className="loader"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;
