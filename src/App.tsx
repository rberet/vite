import { useState } from 'react'
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Checkbox } from "./components/ui/checkbox"
import { Label } from "./components/ui/label"

type Question = {
  question: string
  options: { option: string; scores: { [key: string]: number } }[]
  multiSelect?: boolean
  minSelect?: number
  maxSelect?: number
}

type Answer = {
  questionIndex: number
  selectedOptions: string[]
}

export default function CareerOrientationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [showResult, setShowResult] = useState(false)
  const [scores, setScores] = useState<{ [key: string]: number }>({})

  const questions: Question[] = [
    {
      question: "Which subjects do you like the most in the period 9 - 12 grades? (you can mark a minimum of 1 and a maximum of 2)",
      options: [
        {
          option: "Bulgarian language and literature",
          scores: {
            "MO/POLITICS": 1,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 3,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 1,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 1,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 2,
            "MEDIA COMMUNICATIONS PR": 1,
            "MARKETING PR ADVERTISING EVENTS": 2
          }
        },
        {
          option: "Foreign languages",
          scores: {
            "MO/POLITICS": 2,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 1,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 1,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 1,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 3
          }
        },
        {
          option: "Biology/Chemistry",
          scores: {
            "MO/POLITICS": 3,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 1,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 1,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 1,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 2
          }
        },
        {
          option: "Physics",
          scores: {
            "MO/POLITICS": 1,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 3,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 3,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 2,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 1,
            "MEDIA COMMUNICATIONS PR": 3
          }
        },
        {
          option: "Mathematics",
          scores: {
            "MO/POLITICS": 1,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 2,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 3,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 2,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 3,
            "MEDIA COMMUNICATIONS PR": 1,
            "MARKETING PR ADVERTISING EVENTS": 1,
            "PSYCHOLOGY/SOCIOLOGY/PHILOSOPHY": 1,
            "MILITARY/DEFENSE": 3
          }
        },
        {
          option: "Geography",
          scores: {
            "MO/POLITICS": 1,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 1,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 1,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 2,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 1
          }
        },
        {
          option: "Economics/Entrepreneurship or other similar subjects from commercial and financial vocational high schools",
          scores: {
            "MO/POLITICS": 1,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 3,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 2,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 2,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 1
          }
        },
        {
          option: "History",
          scores: {
            "MO/POLITICS": 2,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 1,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 3,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 1,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 1
          }
        },
        {
          option: "Philosophy/Psychology",
          scores: {
            "MO/POLITICS": 1,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 1,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 3,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 1,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 1,
            "MEDIA COMMUNICATIONS PR": 1
          }
        },
        {
          option: "IT/computer programming or other technology subjects from vocational high schools",
          scores: {
            "MO/POLITICS": 2,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 3,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 1,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 1,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 2,
            "MEDIA COMMUNICATIONS PR": 1,
            "MARKETING PR ADVERTISING EVENTS": 1
          }
        },
        {
          option: "Civic education",
          scores: {
            "MO/POLITICS": 3,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 1,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 1,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 3,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 2
          }
        },
        {
          option: "Arts/design or other similar subjects from vocational art high schools",
          scores: {
            "MO/POLITICS": 1,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 1,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 2,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 3,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 3,
            "MEDIA COMMUNICATIONS PR": 1
          }
        },
        {
          option: "Music/dance/acting",
          scores: {
            "MO/POLITICS": 1,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 1,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 1,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 3
          }
        },
        {
          option: "Physical education and sports",
          scores: {
            "MO/POLITICS": 3,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 1
          }
        }
      ],
      multiSelect: true,
      minSelect: 1,
      maxSelect: 2
    },
    {
      question: "Someone owes you money, but you find them shopping for clothes?",
      options: [
        {
          option: "You'll politely ask him to give them back to me.",
          scores: {
            "MO/POLITICS": 1,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 2,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 2,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 2,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 2,
            "MEDIA COMMUNICATIONS PR": 1,
            "MARKETING PR ADVERTISING EVENTS": 3,
            "PSYCHOLOGY/SOCIOLOGY/PHILOSOPHY": 1,
            "MILITARY/DEFENSE": 2,
            "GOVERNMENT WORK": 2,
            "COSMONAUT/DISCOVERER": 2,
            "ECOLOGY/SUSTAINABILITY/INNOVATION": 2,
            "ARCHITECTURE/CONSTRUCTION": 2,
            "LEGAL PROFESSIONS/JUDGE/NOTARY": 2,
            "WORK IN A GALLERY/MUSEUM/ART": 2,
            "DESIGNERS AND ETC.": 1,
            "ACTORS/MUSICIANS": 2
          }
        },
        {
          option: "I will invite him to lunch/dinner and make him pay.",
          scores: {
            "MO/POLITICS": 2,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 2,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 2,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 1,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 3,
            "MEDIA COMMUNICATIONS PR": 2
          }
        },
        {
          option: "I will post something indirectly on social media.",
          scores: {
            "MO/POLITICS": 3,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 3,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 3,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 3,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 3,
            "MEDIA COMMUNICATIONS PR": 2,
            "MARKETING PR ADVERTISING EVENTS": 3,
            "PSYCHOLOGY/SOCIOLOGY/PHILOSOPHY": 3,
            "MILITARY/DEFENSE": 3,
            "GOVERNMENT WORK": 3,
            "COSMONAUT/DISCOVERER": 1,
            "ECOLOGY/SUSTAINABILITY/INNOVATION": 3,
            "ARCHITECTURE/CONSTRUCTION": 3,
            "LEGAL PROFESSIONS/JUDGE/NOTARY": 1
          }
        },
        {
          option: "I'll meet him and I'll find him there.",
          scores: {
            "MO/POLITICS": 2,
            "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 3,
            "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 3,
            "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 2,
            "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 3
          }
        }
      ]
    }
  ]

  const handleAnswer = (selectedOption: string) => {
    const question = questions[currentQuestion]
    let updatedAnswers = answers.map((answer) => {
      if (answer.questionIndex === currentQuestion) {
        return {
          ...answer,
          selectedOptions: question.multiSelect
            ? [...answer.selectedOptions.filter(opt => opt !== selectedOption), selectedOption]
            : [selectedOption]
        }
      }
      return answer
    })

    if (!updatedAnswers[currentQuestion]) {
      updatedAnswers.push({
        questionIndex: currentQuestion,
        selectedOptions: [selectedOption]
      })
    }

    if (question.multiSelect) {
      const currentAnswer = updatedAnswers[currentQuestion].selectedOptions
      if (currentAnswer.length > question.maxSelect!) {
        updatedAnswers[currentQuestion].selectedOptions = currentAnswer.slice(0, question.maxSelect!)
      }
    }

    setAnswers(updatedAnswers)
  }

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const calculateResult = () => {
    const initialScores: { [key: string]: number } = {
      "MO/POLITICS": 0,
      "BIOLOGY/MEDICINE/NUTRITIONIST/ENVIRONMENTAL": 0,
      "ENGINEERING IT/COMPUTERS/DATA SCIENCE/ROBOTICS": 0,
      "BUSINESS/MANAGEMENT/ENTREPRENEURSHIP/HOSPITALITY": 0,
      "FINANCE/BANKS/COMMODITY EXCHANGES/DATA SCIENCE/ACCOUNTING": 0,
      "MEDIA COMMUNICATIONS PR": 0,
      "MARKETING PR ADVERTISING EVENTS": 0,
      "PSYCHOLOGY/SOCIOLOGY/PHILOSOPHY": 0,
      "MILITARY/DEFENSE": 0,
      "GOVERNMENT WORK": 0,
      "COSMONAUT/DISCOVERER": 0,
      "ECOLOGY/SUSTAINABILITY/INNOVATION": 0,
      "ARCHITECTURE/CONSTRUCTION": 0,
      "LEGAL PROFESSIONS/JUDGE/NOTARY": 0,
      "WORK IN A GALLERY/MUSEUM/ART": 0,
      "DESIGNERS AND ETC.": 0,
      "ACTORS/MUSICIANS": 0
    }

    const finalScores = answers.reduce((acc, answer) => {
      const question = questions[answer.questionIndex]
      answer.selectedOptions.forEach((option) => {
        const optionScore = question.options.find(opt => opt.option === option)?.scores || {}
        Object.keys(optionScore).forEach((category) => {
          acc[category] = (acc[category] || 0) + optionScore[category]
        })
      })
      return acc
    }, initialScores)

    setScores(finalScores)
    setShowResult(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setScores({})
  }

  if (showResult) {
    const maxScoreCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b)
    return (
      <Card className="w-full max-w-2xl mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xl text-center">
            Based on your answers, you might be suited for a career in <strong>{maxScoreCategory}</strong>.
          </p>
          <div className="text-center">
            <Button onClick={resetQuiz}>Take Quiz Again</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (currentQuestion >= questions.length) {
    return (
      <Card className="w-full max-w-2xl mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xl text-center">
            Click the button below to see your results.
          </p>
          <div className="text-center">
            <Button onClick={calculateResult}>See Results</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]
  const currentAnswer = answers.find(answer => answer.questionIndex === currentQuestion)?.selectedOptions || []

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">Career Orientation Quiz</CardTitle>
        <p className="text-gray-500">Question {currentQuestion + 1} of {questions.length}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <h2 className="text-xl font-semibold">{question.question}</h2>
        <div className="grid grid-cols-1 gap-3">
          {question.options.map((option) => (
            <div key={option.option} className="flex items-center space-x-2">
              {question.multiSelect ? (
                <Checkbox
                  id={option.option}
                  checked={currentAnswer.includes(option.option)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      handleAnswer(option.option)
                    } else {
                      handleAnswer(option.option)
                    }
                  }}
                />
              ) : (
                <Checkbox
                  id={option.option}
                  checked={currentAnswer.includes(option.option)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      handleAnswer(option.option)
                    }
                  }}
                />
              )}
              <Label htmlFor={option.option}>{option.option}</Label>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Button
            onClick={nextQuestion}
            disabled={
              currentAnswer.length < (question.minSelect || 1) ||
              currentAnswer.length > (question.maxSelect || 1)
            }
          >
            Next Question
          </Button>
        </div>
      </CardContent>
    </Card>
    
  )
}
