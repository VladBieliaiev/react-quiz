import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { QuizCard } from "./QuizCard"
import { Results } from "./Results";

export const Game = ({ api }) => {
   const [step, setStep] = useState(0);
   const [variant, setVariant] = useState(0);


   return (
      <>
         {api.length !== step ? (
            <QuizCard api={api} step={step} setStep={setStep} variant={variant} setVariant={setVariant} />
         ) : (
            <Results variant={variant} setVariant={setVariant} step={step} setStep={setStep} />
         )}
      </>
   )

}