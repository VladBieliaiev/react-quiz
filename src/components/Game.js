import { QuizCard } from "./QuizCard"

export const Game = ({ api, step, setStep }) => {

   return (
      <QuizCard api={api} step={step} setStep={setStep} />

   )
}