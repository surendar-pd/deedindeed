// ./nextjs-app/app/_components/Posts.tsx
import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
const builder = imageUrlBuilder(client);

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
    return (
        <>
            <section className="w-full h-full bg-green-700">
                <section className="w-full h-[100vh] md:h-[75vh] lg:h-[50vh] p-4 flex flex-col justify-center text-white md:px-16 bg-[url('/assets/bg.svg')] bg-no-repeat bg-contain bg-right lg:max-w-7xl lg:mx-auto">
                    <h1 className="text-4xl font-semibold lg:max-w-2xl">
                        Empowering Change for a Greener Tomorrow: Climate
                        Awareness and Carbon Action !
                    </h1>
                    <p className="mt-4 max-w-4xl">
                        Welcome to our comprehensive platform dedicated to
                        addressing the pressing issue of climate change. Here,
                        we strive to empower individuals, businesses, and
                        communities with the knowledge and tools necessary to
                        navigate the complex landscape of climate challenges and
                        mitigation strategies. Our expertly curated resources
                        delve into the latest insights on climate science,
                        offering a deeper understanding of the impacts we face.
                        From informative articles on achieving net-zero
                        emissions to practical guides on earning carbon credits,
                        we provide actionable steps for a more sustainable
                        future. Join us in embracing the global movement to
                        combat climate change and together, we can pave the way
                        towards a greener, more resilient planet
                    </p>
                    {/* <button className="w-fit transition-all duration-300 bg-[#1f4b97] px-6 py-2 hover:bg-[#1f4b9770] rounded-lg font-medium">
                        Start reading
                    </button> */}
                </section>
            </section>
            <section className="bg-white py-16 lg:py-32 p-4 md:px-16 lg:max-w-7xl lg:mx-auto font-bold w-full h-full">
                <h1 className="text-2xl md:text-4xl font-medium mb-12">
                    Latest Articles
                </h1>
                <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            href={post.slug.current}
                            className="w-full hover:-translate-y-1 z-0 h-[28rem] transition-all duration-300 flex flex-col gap-4"
                            key={post._id}
                        >
                            <div className="w-full h-1/2 overflow-hidden">
                                <Image
                                    unoptimized
                                    className="w-full h-full object-cover rounded-lg"
                                    src={builder.image(post.mainImage).url()}
                                    width={300}
                                    height={300}
                                    alt={post?.mainImage?.alt}
                                />
                            </div>
                            <div className="h-1/2 flex flex-col gap-2">
                                <div className="flex items-center text-sm font-medium gap-2">
                                    {/* <p className="text-[#0b72ff]">
                                        Productivity
                                    </p> */}
                                    <p className="text-[#33383f]">
                                        {new Intl.DateTimeFormat("en-IN", {
                                            dateStyle: "long",
                                            timeZone: "Asia/Kolkata",
                                        }).format(new Date(post.publishedAt))}
                                    </p>
                                </div>
                                <h1 className="text-xl font-medium">
                                    {post.title}
                                </h1>
                                <p className="text-sm font-medium text-slate-500">
                                    {post.description.slice(0, 120) + `...`}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="bg-[#00394d] w-full h-full text-white">
                <div className="py-16 lg:py-32 p-4 md:px-16 lg:max-w-7xl lg:mx-auto w-full h-full">
                    <h1 className="text-2xl md:text-4xl font-medium mb-12">
                        Most Popular Articles
                    </h1>
                    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-rows-3">
                        {posts
                            .filter((p) => p.popularity)
                            .map((post, idx) => (
                                <Link
                                    href={post.slug.current}
                                    className={`w-full ${
                                        idx === 0
                                            ? "col-span-2 lg:col-span-1 lg:row-span-3 lg:flex lg:flex-col lg:h-full"
                                            : "col-span-2 lg:col-span-1"
                                    } hover:-translate-y-1 transition-all duration-300 h-[24rem] md:h-[12rem] flex flex-col md:flex-row gap-4`}
                                    key={post._id}
                                >
                                    <div
                                        className={`h-2/3 w-full md:h-full md:w-1/2 overflow-hidden ${
                                            idx === 0
                                                ? "lg:w-full lg:h-3/4"
                                                : "lg:w-2/5"
                                        }`}
                                    >
                                        <Image
                                            unoptimized
                                            className="w-full h-full object-cover rounded-lg"
                                            src={builder
                                                .image(post.mainImage)
                                                .url()}
                                            width={300}
                                            height={300}
                                            alt={post?.mainImage?.alt}
                                        />
                                    </div>
                                    <div
                                        className={`h-1/3 ${
                                            idx === 0
                                                ? "lg:h-1/4 lg:w-full"
                                                : "lg:w-3/5 "
                                        } w-full md:h-full md:w-1/2 flex flex-col gap-2`}
                                    >
                                        <div className="flex items-center text-sm font-medium gap-2">
                                            {/* <p className="text-[#0b72ff]">
                                        Productivity
                                    </p> */}
                                            <p className="">
                                                {new Intl.DateTimeFormat(
                                                    "en-IN",
                                                    {
                                                        dateStyle: "long",
                                                        timeZone:
                                                            "Asia/Kolkata",
                                                    }
                                                ).format(
                                                    new Date(post.publishedAt)
                                                )}
                                            </p>
                                        </div>
                                        <h1 className="text-xl font-medium">
                                            {post.title}
                                        </h1>
                                        <p
                                            className={`text-sm font-medium ${
                                                idx === 0 ? "block" : "block"
                                            }`}
                                        >
                                            {idx === 0
                                                ? post.description
                                                : post.description.slice(
                                                      0,
                                                      120
                                                  ) + `...`}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
            <section className="py-16 lg:py-32 p-4 md:px-16 lg:max-w-7xl lg:mx-auto w-full h-full">
                <div className=" rounded-lg text-white font-medium p-12 md:p-16 text-center bg-green-700 bg-[url('/assets/card2.svg')] bg-no-repeat bg-fill bg-left w-full">
                    <div className="w-full h-full flex flex-col justify-center items-center gap-6 lg:mx-auto lg:max-w-xl">
                        <h1 className="text-4xl">Stay in the know</h1>
                        <p className="text-xl">
                            Share your email address to receive monthly updates
                            containing valuable insights on climate
                            change / action. Rest assured, we will not inundate
                            your inbox with unwanted messages.
                        </p>
                        <div className="flex flex-col gap-4 w-full md:flex-row">
                            <input
                                placeholder="Enter your email"
                                className="w-full text-slate-600 outline-none px-6 py-2 rounded-lg "
                            ></input>
                            <button className="w-full lg:w-fit transition-all duration-300 bg-green-800 px-6 py-2 hover:bg-green-900 rounded-lg font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
