import "../styles/QBlock.css";
import logo from "../img/5651387.png"

export const Results = ({ variant, setVariant, setStep }) => {



   return (
      <div className="card-dody">
         <div className="card-content">
            <div className="results">
               <img src={logo} className="results__icon" />
               <p className="results__score">{variant}</p>
            </div>
         </div>
         <button onClick={() => {
            setStep(0)
            setVariant(0)
         }}>AGAIN !</button>
      </div>
   )
}