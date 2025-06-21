import Link from "next/link";
import { getFeaturedImage, getPost } from "../api/posts/[id]/route";

const Post: React.FC<any> = async ({ postData }) => {
    const post = await getPost(postData.id);
    console.log({ post });

    const featuredImage = await getFeaturedImage(post.featured_media);
    console.log({ featuredImage });

    return (
        <div
            className="bg-white max-w-2xl mx-auto shadow-[0_1px_10px_#AEAEAE29] p-6 rounded-md m-4 mb-10 border border-[#F2F2F2]"
            key={post.id}
        >
            <Link href={`/posts/${post.id}`}>
                <div className="w-full h-100 rounded-md overflow-hidden relative">
                    {post.featured_media ? (
                        <img
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={featuredImage.link}
                            alt={post.title.rendered}
                        />
                    ) : null}
                </div>

                <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-2">
                        {post.title.rendered}
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.content.rendered,
                        }}
                    />
                    {post.acf["postContentAgent"]}
                </div>
            </Link>
        </div>
    );
};

export default Post;
