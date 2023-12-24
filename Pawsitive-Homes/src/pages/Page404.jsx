import Cat404 from '../assets/404.jpg'
import '../styles/Page404.css'


function Page404() {
    return(
        <div className='notFound'>
            <>
                <img src={Cat404} alt="Not Found" />
            </>
            <h2>404 Meowrror: What in the whiskers brought you here? This zone is a </h2> 
            <h2>no-human territory! Meow-ve along, and leave the coding to the cats.</h2> 
        </div>
    )
}

export default Page404