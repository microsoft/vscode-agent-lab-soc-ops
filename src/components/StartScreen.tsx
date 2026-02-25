interface StartScreenProps {
  onStartBingo: () => void;
  onStartQuizWizard: () => void;
}

export function StartScreen({ onStartBingo, onStartQuizWizard }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gray-50">
      <div className="text-center max-w-sm w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Soc Ops</h1>
        <p className="text-lg text-gray-600 mb-8">Social Bingo</p>

        <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase font-medium">Choose a mode</p>

        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={onStartBingo}
            className="w-full bg-white border-2 border-gray-200 rounded-lg p-5 text-left active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-gray-900 text-lg">Bingo</span>
              <span className="text-2xl">🎯</span>
            </div>
            <p className="text-sm text-gray-500">5×5 grid • Get 5 in a row to win</p>
          </button>

          <button
            onClick={onStartQuizWizard}
            className="w-full bg-white border-2 border-gray-200 rounded-lg p-5 text-left active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-gray-900 text-lg">Quiz Wizard</span>
              <span className="text-2xl">🃏</span>
            </div>
            <p className="text-sm text-gray-500">One question at a time • Find everyone</p>
          </button>
        </div>

        <p className="text-xs text-gray-400">Find people who match each question</p>
      </div>
    </div>
  );
}
