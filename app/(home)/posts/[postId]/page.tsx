"use client";

import { getFeaturedImage, getPostById } from "@/app/util/getPostData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    featured_media: number;
    acf: {
        postContentAgent: string;
    };
}

export default function Post() {
    const params = useParams();
    const postId = params.postId as string;
    const [post, setPost] = useState<Post>();
    const [featuredImage, setFeaturedImage] = useState<{ link: string }>();

    useEffect(() => {
        getPostById(postId).then((data) => setPost(data));
    }, [postId]);

    useEffect(() => {
        if (post) {
            document.title = post.title.rendered;

            getFeaturedImage(post?.featured_media as number).then((data) => {
                setFeaturedImage(data);
            });
        }
    }, [post]);

    if (!featuredImage) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }
    return (
        <main className="container mx-auto px-4 py-8 max-w-4xl">
            <Link
                className="text-blue-500 hover:underline mb-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                href="/"
            >
                חזרה
            </Link>
            <div className="w-full h-100 rounded-md overflow-hidden relative">
                {post.featured_media ? (
                    <Image
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={featuredImage.link || ""}
                        alt={post.title.rendered}
                        width={1000}
                        height={100}
                    />
                ) : null}
            </div>
            <article className="bg-white rounded-lg shadow-lg p-8">
                <h1
                    className="text-4xl font-bold mb-6 text-gray-900"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div
                    className="prose prose-lg max-w-none text-gray-700 text-xl"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                <div className="mt-8">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        סיכום ומסקנות של הצט
                    </h2>
                    <div
                        className="prose prose-lg max-w-none text-gray-700 text-xl"
                        dangerouslySetInnerHTML={{
                            __html: post.acf.postContentAgent,
                        }}
                    />
                </div>
            </article>
        </main>
    );
}
