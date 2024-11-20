import { NextRequest } from 'next/server'
import astra from '../../astra'
 
export const maxDuration = 60

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name');
  const topic = searchParams.get('topic');
  
  try {
    const astraResponse = await astra('message');
    console.log('Astra Response:', astraResponse);
    
    return Response.json({ message: `Hello ${name}, today you will learn ${topic}` })
  } catch (error) {
    console.error('Astra Error:', error);
    return Response.json({ message: `Failed to get content from Astra` }, { status: 500 })
  }
}