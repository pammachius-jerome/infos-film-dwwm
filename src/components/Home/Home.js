import { useState } from 'react'
import './Home.css'
const Home = () => {
    const [animation, setAnimation] = useState(true)
    const toggleAnimation = () => {
        setAnimation(animation => !animation)
    }
    return (
        <div className="container">
            <img src={"../../images/dwwm_1.png"} alt="logo" className={`logo ${animation && "rotate"}`} />
            <h1>TP React Développeur Web etWeb Mobile</h1>
            <button
                className='App-button'
                onClick={toggleAnimation}>
                Modifier l'animation

            </button>
        </div>
    )
}
export default Home;
