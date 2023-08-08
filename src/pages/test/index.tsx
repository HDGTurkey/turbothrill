import React, { useState, useEffect } from "react";
import Breadcrumb from "@/app/components/breadcrumb";

const questions = [
  "Soru 1",
  "Soru 2",
  "Soru 3",
  // Diğer soruları burada tanımlayabilirsiniz
];

const Test: React.FC = () => {
  const [answers, setAnswers] = useState<Array<string | null>>(
    Array(questions.length).fill(null),
  );
  const [scrollToQuestion, setScrollToQuestion] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);

    if (index < questions.length - 1) {
      setScrollToQuestion(index + 1);
    }
  };

  const totalYesCount = answers.filter((answer) => answer === "yes").length;

  const finishTest = () => {
    setShowResult(true);
  };

  const getResultMessage = () => {
    if (totalYesCount > questions.length) {
      return "Tebrikler, tüm soruları doğru cevapladınız!";
    } else {
      return `Toplam doğru cevap sayınız: ${totalYesCount} / ${questions.length}`;
    }
  };

  useEffect(() => {
    if (showResult && typeof window !== "undefined") {
      const resultElement = document.getElementById("test-result");
      if (resultElement) {
        resultElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [showResult]);

  return (
    <>
      <Breadcrumb title={"Test"} />
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <p>{question}</p>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name={`question-${index}`}
                value="yes"
                checked={answers[index] === "yes"}
                onChange={() => handleAnswerChange(index, "yes")}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name={`question-${index}`}
                value="no"
                checked={answers[index] === "no"}
                onChange={() => handleAnswerChange(index, "no")}
                className="form-radio h-5 w-5 text-red-500"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
      ))}
      <button
        className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow"
        onClick={finishTest}
      >
        Testi Bitir
      </button>
      {showResult && (
        <div
          id="test-result"
          className="mt-4 text-xl font-semibold text-green-500"
        >
          {getResultMessage()}
        </div>
      )}
      <style jsx>{`
        div {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

export default Test;
