import './Home.css'
const Home = ({animate}) => {
    console.log(animate)
    return (
        <div className='container'>
            <img src={"../../images/dwwm_1.png"} alt="logo" className="logo" />
            <h1>TP React Développeur Web etWeb Mobile</h1>
        </div>
    )
}
export default Home
