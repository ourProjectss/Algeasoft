import './votes.scss'
import ava1 from '../../shared/features/images (2).jpeg'


export const Votes = () => {
    return (
        <div className='votes'>
            <h1 className='votes-title'>Наши отзывы</h1>
            <div className='votes-cards'>
                <div className='votes-cards-card'>
                    <div className='votes-cards-card-first'>
                        <div>
                            <img src={ava1} alt="" />
                        </div>
                        <div>
                            <h3>Абдылдаев Бекислам</h3>
                            <p>Воин</p>
                        </div>
                    </div>
                    <div>
                        <p>Воображение важнее знания. Знание ограничено, а воображение охватывает весь мир, стимулирует прогресс, рождает эволюцию. Наука без воображения — всего лишь набор фактов. Но именно способность представить невозможное позволяет человечеству делать открытия, менять будущее и выходить за рамки привычного мышления.</p>
                    </div>
                    <button>Подробнее</button>
                </div>
            </div>
        </div>
    );
}
