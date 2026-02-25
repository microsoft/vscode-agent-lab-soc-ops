import { useState } from 'react';
import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';
import { QuizWizardScreen } from './components/QuizWizardScreen';

function App() {
  const [quizWizardActive, setQuizWizardActive] = useState(false);

  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  if (quizWizardActive) {
    return <QuizWizardScreen onReset={() => setQuizWizardActive(false)} />;
  }

  if (gameState === 'start') {
    return (
      <StartScreen
        onStartBingo={startGame}
        onStartQuizWizard={() => setQuizWizardActive(true)}
      />
    );
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={resetGame}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
