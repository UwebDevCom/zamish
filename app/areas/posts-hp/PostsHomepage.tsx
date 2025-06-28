import Post, { PostData } from "@/app/components/Post";
import Image from "next/image";

export const dynamic = "force-dynamic";

const PostsHomepage = async () => {
    const response = await fetch(`${process.env.CUSTOM_BASE_URL}/api/posts`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    const postsData = await response.json();
    console.log({ postsData });
    return (
        <div>
            <div className="text-center flex flex-col items-center justify-center p-10 mb-20">
                <div className="h-[500px] overflow-hidden absolute top-18 left-0 w-full">
                    <Image
                        className="w-full h-full object-cover z-[-1] "
                        src="/images/Four_friends.webp"
                        alt="Blog Image"
                        layout="fill"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center top-0 relative z-2 rounded-md bg-white">
                <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">
                        מדברים על מיומניות ניהול
                    </h1>
                    <p className="text-sm">לומדים ניהול ומדברים על זה</p>
                </div>
            </div>
            {postsData &&
                postsData.map((post: PostData) => (
                    <Post key={post.id} postData={post} />
                ))}
        </div>
    );
};

export default PostsHomepage;
