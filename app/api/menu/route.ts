// http://leadr.local/wp-json/wp/v2/menus/3

import { wpApi } from "@/app/api/posts/route";
import { NextResponse } from "next/server";

export async function getWordpressMainMenu() {
    try {
        const response = await wpApi.get("/menus/3");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function GET() {
    try {
        const menuData = await getWordpressMainMenu();
        return NextResponse.json(menuData);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch menu" },
            { status: 500 }
        );
    }
}
