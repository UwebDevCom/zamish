import { wpApi } from "@/app/api/posts/route";

export async function getPost(id: string) {
    const response = await wpApi.get(`/posts/${id}`);
    return response.data;
}

export async function getFeaturedImage(mediaId: number) {
    try {
        const response = await wpApi.get(`/media/${mediaId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export async function getPostById(id: string) {
    const response = await wpApi.get(`/posts/${id}`);
    return response.data;
}
