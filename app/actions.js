'use server'

import astra from "./astra";

export async function getJourneyContent(topic) {
  try {
    const response = await astra(topic);
    return response;
  } catch (error) {
    console.error('Server Action Error:', error);
    throw error;
  }
} 