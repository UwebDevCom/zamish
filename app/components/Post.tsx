import Link from "next/link";
import Image from "next/image";
import { getFeaturedImage } from "../util/getPostData";
import { getPost } from "../util/getPostData";
export interface PostData {
    id: string;
    featured_media: string;
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

const Post: React.FC<{ postData: PostData }> = async ({ postData }) => {
    const post = await getPost(postData.id);
    const featuredImage = await getFeaturedImage(post.featured_media);
    console.log(featuredImage);

    return (
        <div
            className="bg-white max-w-2xl mx-auto shadow-[0_1px_10px_#AEAEAE29] p-6 rounded-md m-4 mb-10 border border-[#F2F2F2]"
            key={post.id}
        >
            <Link href={`/posts/${post.id}`}>
                <div className="w-full h-100 rounded-md overflow-hidden relative">
                    {post.featured_media ? (
                        <Image
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={featuredImage.guid.rendered || ""}
                            alt={post.title.rendered}
                            width={1000}
                            height={100}
                        />
                    ) : null}
                </div>

                <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-2">
                        {post.title.rendered}
                    </h2>
                    <div
                        className="text-md"
                        dangerouslySetInnerHTML={{
                            __html: post.content.rendered.slice(0, 100) + "...",
                        }}
                    />
                    {/* {post.acf["postContentAgent"]} */}
                    <div className="flex justify-end">
                        <Link
                            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            href={`/posts/${post.id}`}
                        >
                            קראו עוד
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Post;
