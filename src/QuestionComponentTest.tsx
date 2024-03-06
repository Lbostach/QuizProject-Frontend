import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { PostComponent } from 'src/PostComponent.tsx'; // Update with your actual import path

jest.mock('axios');

describe('PostComponent', () => {
  it('submits the form with question and answers', async () => {
    const mockResponse = { data: { message: 'Success' } };
    jest.fn().mockResolvedValueOnce(mockResponse);

    const { getByPlaceholderText, getByText } = render(<PostComponent />);

    const questionInput = getByPlaceholderText('Question');
    const answer1Input = getByPlaceholderText('Answer 1');
    const answer1Checkbox = getByText('Is this answer true or false?').closest('input');

    if (answer1Checkbox) {
      fireEvent.click(answer1Checkbox);
    }

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith('http://localhost:8089/api/questions', {
      question: 'Test question?',
      answers: [
        { text: 'Test answer 1', boolean: true },
        // Add checks for other answers here...
      ],
    });
  });
});