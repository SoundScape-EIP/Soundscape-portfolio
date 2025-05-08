import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { email } = request.body;

    if (!email || typeof email !== 'string') {
      return response.status(400).json({ message: 'Email is required and must be a string.' });
    }

    // Add the email to a Vercel KV Set called 'waitlist_emails'
    // Sets automatically handle uniqueness.
    await kv.sadd('waitlist_emails', email);

    return response.status(200).json({ message: 'Email added to waitlist successfully!' });
  } catch (error) {
    console.error('Error adding email to waitlist:', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
} 