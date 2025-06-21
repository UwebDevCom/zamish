import { getWordpressData } from "@/app/api/posts/route";
import Post from "@/app/components/Post";
import Image from "next/image";

const PostsHomepage = async () => {
    const posts = await getWordpressData();

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
                        בלוג של 4 מנהלים צעירים שרוצים לשפר את עצמם
                    </h1>
                    <p className="text-sm">
                        לומדים ניהול ומדברים על זה, תוך כדי פרויקט
                    </p>
                </div>
            </div>
            {posts.map((post: any) => (
                <Post key={post.id} postData={post} />
            ))}
        </div>
    );
};

export default PostsHomepage;
