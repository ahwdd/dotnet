import { NextResponse } from "next/server";
import { ApiBaseNet } from "@/config/api";
import axios from "axios";

export async function POST(request) {
    try {
        const { c = 'EGP' } = await request.json();
        const response = await axios.post(`${ApiBaseNet}/exchange-rates`, { c });
        const results = response.data;

        if (results.base_currency) {
            return NextResponse.json(results, { status: 200 });
        } else {
            return NextResponse.json({ message: "Base currency not found" }, { status: 404 });
        }
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: e.message }, { status: 500 });
    }
}
