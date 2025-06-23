// http://leadr.local/wp-json/wp/v2/menus/3

import { getWordpressMainMenu } from "@/app/util/getMainMenu";
import { NextResponse } from "next/server";

export async function GET() {
    const menu = await getWordpressMainMenu();
    return NextResponse.json(menu);
}
