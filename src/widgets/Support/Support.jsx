import './suppot.scss'

export const Support = () => {
    return (
        <div className="support container">
            <div className="support-text">
                <h1 className='support-text-title'>Техническая поддержка</h1>
                <p className='support-text-description'>Если у Вас есть технические или финансовые вопросы заполните форму ниже.</p>
            </div>
            <div className="support-inputs">
                <input className='support-inputs-input' type="text" placeholder="Имя *" />
                <input className='support-inputs-input' type="text" placeholder="Ваш e-mail"/>
                <input className='support-inputs-input' type="text" placeholder="Телефон"/>
                <input className='support-inputs-input support-inputs-input-message' type="text" placeholder="Ваше сообщение"/>

            </div>
            <button className='support-button'>Заказать звонок</button>

        </div>
    );
}

