import axios from "axios";

export const API_URL =
    process.env.WORDPRESS_API_URL || "http://leadr.local/wp-json/wp/v2";

export const wpApi = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

export async function getWordpressData() {
    try {
        const response = await wpApi.get("/posts?_embed");

        return response.data;
    } catch (error) {
        console.error(error);
    }
}
