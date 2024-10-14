import { NextResponse } from 'next/server';
import axios from 'axios';
import { ApiBaseNet } from '@/config/api';

export async function POST(request) {
  try {
    const { lat, long } = await request.json();
    const response = await axios.post(`${ApiBaseNet}/weather`, { lat, long });
    const results = response.data;

    const weatherData = {
      current: {
        temp: results?.current?.temperature,
        wind: results?.current?.wind_speed?.toFixed(2),
      },
      day: results?.day?.map((d) => {
        const date = new Date(d?.time);
        return {
          time: date.getHours(),
          temp: d?.temperature,
          wind: d?.wind_speed?.toFixed(2),
        };
      }),
    };

    return NextResponse.json(weatherData, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
