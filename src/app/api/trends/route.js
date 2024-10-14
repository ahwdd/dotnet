import { NextResponse } from 'next/server';
import axios from 'axios';
import { ApiBaseNet } from '@/config/api';

export async function POST(request) {
  try {
    const response = await axios.post(`${ApiBaseNet}/trends`);
    const results = response.data;

    const trendingData = Array.isArray(results) ? results : [];

    return NextResponse.json(trendingData, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
