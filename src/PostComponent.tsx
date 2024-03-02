import React, { useState } from 'react';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from 'axios';

export function PostComponent() {
  const [question, setQuestion] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer1Boolean, setAnswer1Boolean] = useState(false);
  const [answer2Boolean, setAnswer2Boolean] = useState(false);
  const [answer3Boolean, setAnswer3Boolean] = useState(false);
  const [answer4Boolean, setAnswer4Boolean] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Replace with your actual API endpoint
    const url = 'http://localhost:8089/api/questions';

    try {
      const response = await axios.post(url, {
        question,
        answers: [
          { text: answer1, boolean: answer1Boolean },
          { text: answer2, boolean: answer2Boolean },
          { text: answer3, boolean: answer3Boolean },
          { text: answer4, boolean: answer4Boolean },
        ],
        // Add other form data as needed
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error posting data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Post a question</CardTitle>
          <CardDescription>
            Ask a question and provide possible answers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="question">
              Question
            </Label>
            <Input id="question" placeholder="Question" required value={question} onChange={e => setQuestion(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="answer1">
              Answer 1
            </Label>
            <Input id="answer1" placeholder="Answer 1" required value={answer1} onChange={e => setAnswer1(e.target.value)} />
            <div className="flex items-center gap-2 mt-2">
              <div className="grid gap-2 text-sm">
                <Input
                  aria-describedby="answer1-boolean-help-text"
                  id="answer1-boolean"
                  placeholder="Boolean key"
                  type="checkbox"
                  checked={answer1Boolean}
                  onChange={e => setAnswer1Boolean(e.target.checked)}
                />
                <p
                  className="text-sm- text-gray-500 dark:text-gray-400"
                  id="answer1-boolean-help-text"
                >
                  Is this answer true or false?
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="answer2">
              Answer 2
            </Label>
            <Input id="answer2" placeholder="Answer 2" required value={answer2} onChange={e => setAnswer2(e.target.value)} />
            <div className="flex items-center gap-2 mt-2">
              <div className="grid gap-2 text-sm">
                <Input
                  aria-describedby="answer2-boolean-help-text"
                  id="answer2-boolean"
                  placeholder="Boolean key"
                  type="checkbox"
                  checked={answer2Boolean}
                  onChange={e => setAnswer2Boolean(e.target.checked)}
                />
                <p
                  className="text-sm- text-gray-500 dark:text-gray-400"
                  id="answer2-boolean-help-text"
                >
                  Is this answer true or false?
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="answer3">
              Answer 3
            </Label>
            <Input id="answer3" placeholder="Answer 3" required value={answer3} onChange={e => setAnswer3(e.target.value)} />
            <div className="flex items-center gap-2 mt-2">
              <div className="grid gap-2 text-sm">
                <Input
                  aria-describedby="answer3-boolean-help-text"
                  id="answer3-boolean"
                  placeholder="Boolean key"
                  type="checkbox"
                  checked={answer3Boolean}
                  onChange={e => setAnswer3Boolean(e.target.checked)}
                />
                <p
                  className="text-sm- text-gray-500 dark:text-gray-400"
                  id="answer3-boolean-help-text"
                >
                  Is this answer true or false?
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="answer4">
              Answer 4
            </Label>
            <Input id="answer4" placeholder="Answer 4" required value={answer4} onChange={e => setAnswer4(e.target.value)} />
            <div className="flex items-center gap-2 mt-2">
              <div className="grid gap-2 text-sm">
                <Input
                  aria-describedby="answer4-boolean-help-text"
                  id="answer4-boolean"
                  placeholder="Boolean key"
                  type="checkbox"
                  checked={answer4Boolean}
                  onChange={e => setAnswer4Boolean(e.target.checked)}
                />
                <p
                  className="text-sm- text-gray-500 dark:text-gray-400"
                  id="answer4-boolean-help-text"
                >
                  Is this answer true or false?
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </CardContent>
      </Card>
    </form>
  );
}