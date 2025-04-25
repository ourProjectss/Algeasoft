import './aboutUs.scss'
import people from '../../../shared/aboutPageImg/Rectangle 16.png'


export const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className='aboutUs-text'>
                <h1 className='aboutUs-text-title'>О нас</h1>
                <p className='aboutUs-text-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fames hendrerit vivamus facilisis risus. Sed leo nibh amet ridiculus gravida elit tincidunt. Massa adipiscing turpis eget proin placerat amet at tortor, ullamcorper. Eu bibendum fermentum arcu tempus in scelerisque amet cras. Neque, nunc, faucibus scelerisque nulla ut suspendisse. Enim, id ut ullamcorper fringilla donec hendrerit nulla ullamcorper nulla. Aliquam in facilisi sit amet. Sed neque elit in quis tristique magna. Natoque arcu elit, molestie suspendisse arcu enim congue lorem. Hac non phasellus nulla iaculis sed. Dui diam arcu, id vel turpis potenti molestie pellentesque est. Odio placerat in neque, tortor ultricies volutpat.</p>
                <p className='aboutUs-text-description'>Ultricies dui pulvinar vel, duis consectetur a enim amet. Ut habitant aliquet bibendum et enim in vulputate dignissim aliquam. Vel tristique ipsum ultrices eget consequat nunc, quis sed ut. Sed ornare id metus, semper gravida amet faucibus tortor. Feugiat dolor eget donec tempus, vel. Lorem aliquet hac aliquam velit mi et sit elementum. Amet semper cursus gravida elit nam aliquet condimentum. Mauris pellentesque phasellus tristique nulla vitae senectus et risus non. Ac et mauris praesent enim sed. Interdum nullam in scelerisque risus urna magna. Laoreet malesuada at dictum est. Volutpat neque at enim quam eu pellentesque mauris, integer ornare. Neque, morbi in commodo sagittis, eget at non.</p>
            </div>
            <div className='aboutUs-img'>
                <img src={people} alt="" />
            </div>
        </div>
    );
}

