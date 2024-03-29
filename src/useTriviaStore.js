import { create } from 'zustand';

const useTriviaStore = create((set) => ({
    score: 0,
    questionIndex: 0,
    answers: [],
    finalScore:0,
    gameOver: false,
    incrementScore: () => set((state) => ({ score: state.score + 1 })),
    setAnswers: (answers) => set((state) => ({ answers })),
    nextQuestion: () => set((state) => ({ questionIndex: state.questionIndex + 1 })),
    setGameOverAndScore: (gameOver, finalScore) => set({ gameOver, finalScore }),
    restartGame: () =>
    set({
        score: 0,
        questionIndex: 0,
        answers: [],
        finalScore: 0,
        gameOver: false,
    }),
}));

export default useTriviaStore;
