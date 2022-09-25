
import "../styles/QBlock.css";

export const QuizCard = ({ api, step, setStep }) => {

   if (api) {


      const question = api[step].question;
      const answersArray = Object.entries(api[step].answers)
      console.log(answersArray);


      return (
         <div className="card-dody">
            <div className="card-content">
               <p className="card-content__title">{question}</p>
               <div className="card-content__answers answers">
                  {answersArray.map(i => {
                     if (i[1]) {
                        return (
                           <button
                              onClick={() => setStep(step + 1)}
                              key={i[0]} > {i[1]}</button>
                        )
                     }
                  })}
               </div>
            </div>
         </div >
      )

   }
}