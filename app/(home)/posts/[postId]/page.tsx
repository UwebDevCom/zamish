"use client";

import { getPostById } from "@/app/util/getPostData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Post {
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    acf: {
        postContentAgent: string;
    };
}

export default function Post() {
    const params = useParams();
    const postId = params.postId as string;
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        getPostById(postId).then((data) => setPost(data));
    }, [postId]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }
    return (
        <main className="container mx-auto px-4 py-8 max-w-4xl">
            <article className="bg-white rounded-lg shadow-lg p-8">
                <h1
                    className="text-3xl font-bold mb-6 text-gray-900"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                        כותרת מקור
                    </h2>
                    <div
                        className="prose prose-lg max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{
                            __html: post.acf.postContentAgent,
                        }}
                    />
                </div>
            </article>
        </main>
    );
}
