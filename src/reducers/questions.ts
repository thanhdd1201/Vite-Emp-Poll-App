import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Answer, Question, Questions } from "../types";

const initialState: Questions = {};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    allQuestions: (state, action: PayloadAction<Questions>) => ({
      ...state,
      ...action.payload,
    }),
    addQuestion: (state, action: PayloadAction<Question>) => ({
      ...state,
      [action.payload.id]: action.payload,
    }),
    addAnswerQuestion: (state, action: PayloadAction<Answer>) => ({
      ...state,
      [action.payload.questionId]: {
        ...state[action.payload.questionId],
        [action.payload.answer]: {
          ...state[action.payload.questionId][action.payload.answer],
          votes: state[action.payload.questionId][
            action.payload.answer
          ].votes.concat(action.payload.authorId),
        },
      },
    }),
  },
});

export const selectQuestions = (state: RootState) => state.questions;

export default questionsSlice.reducer;
export const { allQuestions, addQuestion, addAnswerQuestion } =
  questionsSlice.actions;
