import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


export function PostComponent() {
  return (
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
          <Input id="question" placeholder="Question" required />
        </div>
        <div className="space-y-2">
          <Label className="text-sm" htmlFor="answer1">
            Answer 1
          </Label>
          <Input id="answer1" placeholder="Answer 1" required />
          <div className="flex items-center gap-2 mt-2">
            
            <div className="grid gap-2 text-sm">
              <Input
                aria-describedby="answer1-boolean-help-text"
                id="answer1-boolean"
                placeholder="Boolean key"
                type="text"
              />
              <p
                className="text-sm- text-gray-500 dark:text-gray-400"
                id="answer1-boolean-help-text"
              >
                Enter the key for this answer.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm" htmlFor="answer2">
            Answer 2
          </Label>
          <Input id="answer2" placeholder="Answer 2" required />
          <div className="flex items-center gap-2 mt-2">
            
            <div className="grid gap-2 text-sm">
              <Input
                aria-describedby="answer2-boolean-help-text"
                id="answer2-boolean"
                placeholder="Boolean key"
                type="text"
              />
              <p
                className="text-sm- text-gray-500 dark:text-gray-400"
                id="answer2-boolean-help-text"
              >
                Enter the key for this answer.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm" htmlFor="answer3">
            Answer 3
          </Label>
          <Input id="answer3" placeholder="Answer 3" required />
          <div className="flex items-center gap-2 mt-2">
            
            <div className="grid gap-2 text-sm">
              <Input
                aria-describedby="answer3-boolean-help-text"
                id="answer3-boolean"
                placeholder="Boolean key"
                type="text"
              />
              <p
                className="text-sm- text-gray-500 dark:text-gray-400"
                id="answer3-boolean-help-text"
              >
                Enter the key for this answer.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-sm" htmlFor="answer4">
            Answer 4
          </Label>
          <Input id="answer4" placeholder="Answer 4" required />
          <div className="flex items-center gap-2 mt-2">
            
            <div className="grid gap-2 text-sm">
              <Input
                aria-describedby="answer4-boolean-help-text"
                id="answer4-boolean"
                placeholder="Boolean key"
                type="text"
              />
              <p
                className="text-sm- text-gray-500 dark:text-gray-400"
                id="answer4-boolean-help-text"
              >
                Enter the key for this answer.
              </p>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
