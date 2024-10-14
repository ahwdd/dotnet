import { NextResponse } from 'next/server';
import axios from 'axios';
import { ApiBaseNet } from '@/config/api';

export async function POST(request) {
  try {
    const response = await axios.post(`${ApiBaseNet}/shorts`);
    const results = response.data;

    return NextResponse.json(results, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
