import { useState } from "react";
import { useQuery } from "react-query";
import { Game } from "./Game";
import { QuizCard } from "./QuizCard";

const api = "vo5O2CreZ0931joAzBsOsm9nHeDENwpF3ltjIjHa"

export const API = () => {


   const { isLoading, error, data } = useQuery('quiz', () => {
      return fetch(`https://quizapi.io/api/v1/questions?apiKey=${api}&category=code&difficulty=Easy&limit=10&tags=HTML`)
         .then(res => res.json())
   })





   if (isLoading) {
      return <h1>Loading...</h1>
   }
   if (error) {
      return <h1>Opss..</h1>
   }
   if (data) {

      return (
         <>
            <Game api={data} />
         </>
      )
   }
}