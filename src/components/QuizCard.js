import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "../styles/QBlock.css";

export const QuizCard = ({ api, step, setStep }) => {
   // const [step, setStep] = useState(0);

   if (api) {


      const data = api[step];
      const dataAnswers = api[step].answers;
      const answersArray = Object.entries(dataAnswers)
      // console.log(data);
      // console.log(step);

      // console.log(answersArray);
      // console.log(api.length);



      return (
         <div className="card-dody">
            <div className="card-content">
               <p className="card-content__title">{data.question}</p>
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