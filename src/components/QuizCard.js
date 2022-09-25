
import "../styles/QBlock.css";

export const QuizCard = ({ api, step, variant, setStep, setVariant }) => {

   if (api) {

      const question = api[step].question;
      const answersArray = Object.entries(api[step].answers)
      const answers = Object.entries(api[step].correct_answers);



      const onClickVariant = (index) => {
         if (answers[index][1] === 'true') {
            setVariant(variant + 1)
         }
         setStep(step + 1)
      }


      return (
         <div className="card-dody">
            <div className="card-content">
               <p className="card-content__title">{question}</p>
               <div className="card-content__answers answers">
                  {answersArray.map((i, index) => {
                     if (i[1]) {
                        return (
                           <button
                              onClick={() => onClickVariant(index)}
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