import { NextResponse } from 'next/server';
import axios from 'axios';
import { ApiBaseNet } from '@/config/api';

export async function POST(request) {
  try {
    const { s: searchValue = '', for: searchFor = '', i: perPage, p: currentPage } = await request.json();
    const response = await axios.post(`${ApiBaseNet}/search`, { s: searchValue, for: searchFor, i: perPage, p: currentPage });
    const results = response.data?.results;

    return NextResponse.json(results, { status: 200 });
  } catch (e) {
    console.log('e', e)
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}