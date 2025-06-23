import { wpApi } from "./communication";

export async function getWordpressMainMenu() {
    try {
        const response = await wpApi.get("/menus/3");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
