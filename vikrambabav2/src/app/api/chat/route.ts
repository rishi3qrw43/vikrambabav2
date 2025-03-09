import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are an expert AI financial advisor. Your role is to provide clear, accurate, and helpful financial advice while being mindful of the following:
1. Always explain financial concepts in simple terms
2. Provide balanced perspectives on investment options
3. Remind users about risks and the importance of diversification
4. Never make specific investment recommendations or predictions
5. Encourage users to consult with licensed financial professionals for personalized advice
6. Focus on financial education and general principles`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Make a request to the Notbook LLM server
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral',
        prompt: `${SYSTEM_PROMPT}\n\nUser: ${message}\nAssistant:`,
        stream: false,
      }),
    });

    const data = await response.json();
    return NextResponse.json({ response: data.response });
  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 