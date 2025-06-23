import { wpApi } from "@/app/util/communication";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await wpApi.get("/posts?_embed");
        return NextResponse.json(response.data);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch posts" },
            { status: 500 }
        );
    }
}
