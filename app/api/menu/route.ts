// http://leadr.local/wp-json/wp/v2/menus/3

import { wpApi } from "@/app/api/posts/route";

export async function getWordpressMainMenu() {
    try {
        const response = await wpApi.get("/menus/3");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
