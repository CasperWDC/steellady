import { useState, ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import "./contactUs.scss";
import emailjs from '@emailjs/browser';

interface FormState {
    name: string;
    contact: string;
    message: string;
}

interface ErrorsState {
    name?: boolean;
    contact?: boolean;
    message?: boolean;
    form?: string;
}

function ContactUs() {
    const email = "jurist.stalnaya@gmail.com";
    const [isCopied, setIsCopied] = useState(false);
    const [form, setForm] = useState<FormState>({
        name: "",
        contact: "",
        message: ""
    });
    const [errors, setErrors] = useState<ErrorsState>({});
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

    const validateField = (value: string, type: string) => {
        if (type === 'textarea' && !value) {
            return true;
        }
        return patterns[type as keyof typeof patterns]?.pattern.test(value);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSuccessMessage('');
        const { name, value, type } = event.target;
        const isValid = validateField(value, type);
        setForm(prevForm => ({ ...prevForm, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: !isValid }));
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSuccessMessage('');
        const { key, type, ctrlKey, metaKey } = event;
        const pattern = patterns[type as keyof typeof patterns]?.keyPattern;

        if (
            pattern && !pattern.test(key) &&
            !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"].includes(key) &&
            !ctrlKey && !metaKey
        ) {
            event.preventDefault();
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 3000);
        });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const isValidForm = Object.keys(form).every(key => {
            if (key === 'contact') {
                return validateField(form[key as keyof FormState], 'tel');
            } else if (key === 'message') {
                if (form[key as keyof FormState].trim() === '') {
                    return true;
                } else {
                    return validateField(form[key as keyof FormState], 'textarea');
                }
            } else {
                return validateField(form[key as keyof FormState], 'text');
            }
        });

        if (!isValidForm || !form.contact) {
            setErrors({
                name: !validateField(form.name, 'text'),
                contact: !validateField(form.contact, 'tel')
            });
            setSuccessMessage('');
            return;
        }

        try {
            const loader = document.querySelector('.loader') as HTMLElement;
            loader.style.display = 'block';

            await emailjs.send(
                'service_oysd6so',
                'template_vtpcpgo',
                {
                    from_name: form.name,
                    to_name: 'nikisshlife@gmail.com',
                    subject: 'Новая заявка с сайта Jurist-Stalnaya.ru',
                    message: `Имя:${form.name}\n Контакт: ${form.contact}\nСообщение: ${form.message}`
                },
                { publicKey: '8VMs9CNZgMrnhOttL' }
            );

            loader.style.display = 'none';
            setSuccessMessage('Спасибо за запрос, мы свяжемся с Вами!');
            setForm({ name: "", contact: "", message: "" });
            setErrors({});
        } catch (error) {
            const loader = document.querySelector('.loader') as HTMLElement;
            loader.style.display = 'none';
            setErrors({ form: 'Что-то пошло не так, письмо не отправлено' });
        }
    };

    return (
        <section className='contactUs'>
            <div className="container">
                <h2 className='psuedo_center'>Свяжитесь с нами</h2>
                <div className="contactUs_container">
                    <div className="contactUs_info">
                        <div className="contactUs_item schedule">
                            <p>График работы:</p>
                            <p>ПН.-ЧТ. с <b>9:00</b> до <b>17:00</b></p>
                            <p>ПТ. с <b>9:00</b> до <b>16:00</b></p>
                        </div>

                        <div className="contactUs_item tel">
                            <a href="tel:+7(949) 501-22-20">+7(949) 501-22-20 (Viber)</a>
                            <a href="tel:+3 8(095) 096-79-11">+3 8(095) 096-79-11 (Telegram, WhatsApp)</a>
                        </div>

                        <div className="contactUs_item mail">
                            <p className='mail_copy' data-mail={email} onClick={handleCopy}>
                                {email}
                                <span className={`copyed ${isCopied ? 'active' : ''}`}>Почта скопирована</span>
                            </p>
                        </div>

                        <div className="contactUs_item adress">
                            <p></p>г. Донецк, пр-т Мира, 15.
                            <p></p>БЦ «Centaur Plaza 1», 9 этаж, офис №92
                            <a href="https://yandex.ru/maps/-/CDtOnD3p" target='_blank'>Построить маршрут</a>
                        </div>
                    </div>

                    <div className="contactUs_form">
                        <form className='contact_us' id='contact_us' onSubmit={handleSubmit} noValidate>
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

                            {Object.values(errors).some(error => error) && <p className="error_message">Заполните поля корректно</p>}
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
