import './aboutServices.scss'


export const AboutServices = () => {
    return (
        <div className='aboutServices'>
            <div className='aboutServices-text'>
                <h1 className='aboutServices-text-title'>Мы решаем любые бизнес-задачи</h1>
                <p className='aboutServices-text-description'>Нужно ли вам арендовать виртуальную машину для решения задач ML/DL, высокопроизводительных вычислений (HPC), моделирования сложных процессов, блокчейн-технологий и т.д., нужно ли вам реализовать нестандартное решение вашей задачи из области ИИ, или вам нужен просто удаленное офисное рабочее место, хостинг или файловое хранилище, мы всегда сможем вам помочь!</p>
            </div>
            <div className='aboutServices-cards'>
                <div className='aboutServices-cards-part1'>
                    <div className='aboutServices-cards-part1-card'>
                        <p>Нужно хранить и обрабатывать большой объем данных?</p>
                    </div>
                    <div className='aboutServices-cards-part1-card'>
                        <p>Нужно моделирование,
                        <span>проектирование или создание графики и анимации?</span></p>
                    </div>
                    <div className='aboutServices-cards-part1-card'>
                        <p>НУжен просто удаленный рабочий стол для учебы или работы?</p>
                    </div>
                    <div className='aboutServices-cards-part1-card'>
                        <p>Нужен сервер для потоковой передачи и обработки данных?</p>
                    </div>
                </div>
                <div className='aboutServices-cards-part2'>
                    <div className='aboutServices-cards-part2-card'>
                        <p>Нужны мощности для систем телекоммуникаций, мобильные сетей, сети 5G и т.д.?</p>
                    </div>
                    <div className='aboutServices-cards-part2-card'>
                        <p>Хотите заказать уникальное ИИ решение?</p>
                    </div>
                    <div className='aboutServices-cards-part2-card'>
                        <p>Нужна разработка нейросетей или иных алгоритмов машинного обучения или их инференс на конечных устройствах?</p>
                    </div>
                    <div className='aboutServices-cards-part2-card'>
                        <p>Нужно простое облачное хранилище или хостинг?</p>
                    </div>
                </div>
            </div>
            <div className='aboutServices-div'>
                <button className='aboutServices-div-button'>Все бизнес-кейсы</button>
            </div>
        </div>
    );
}

