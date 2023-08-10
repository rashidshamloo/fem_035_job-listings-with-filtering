// next/server
import { NextResponse } from 'next/server';

// data
import data from '@/app/data/data.json';

export async function GET(req: Request, res: Response) {
  // return the data with cors headers
  return new NextResponse(JSON.stringify(data), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
}
