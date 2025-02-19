import Image from "next/image";
import Link from "next/link";



export default function Post () {
   const blogDetails = [
    {
        author:"John Mark",
        timestamp:"monday, 17 Feb 2025",
        title:"Full stack development",
        body: "Full stack development is the future of tech, And it help youngstars to become techies and contribute positively to society instead being a nuisance of society"
    },
    {
        author:"John Mark",
        timestamp:"monday, 17 Feb 2025",
        title:"Full stack development",
        body: "Full stack development is the future of tech, And it help youngstars to become techies and contribute positively to society instead being a nuisance of society"
    },
    {
        author:"John Mark",
        timestamp:"monday, 17 Feb 2025",
        title:"Full stack development",
        body: "Full stack development is the future of tech, And it help youngstars to become techies and contribute positively to society instead being a nuisance of society"
    },
    {
        author:"John Mark",
        timestamp:"monday, 17 Feb 2025",
        title:"Full stack development",
        body: "Full stack development is the future of tech, And it help youngstars to become techies and contribute positively to society instead being a nuisance of society"
    },
    {
        author:"John Mark",
        timestamp:"monday, 17 Feb 2025",
        title:"Full stack development",
        body: "Full stack development is the future of tech, And it help youngstars to become techies and contribute positively to society instead being a nuisance of society"
    },
    {
        author:"John Mark",
        timestamp:"monday, 17 Feb 2025",
        title:"Full stack development",
        body: "Full stack development is the future of tech, And it help youngstars to become techies and contribute positively to society instead being a nuisance of society"
    },
   ]

    return (
         <main className="min-h-dvh p-2">
             <h1 className="text-center m-3 lg:my-7 text-3xl lg:text-5xl font-bold text-blue-300">LUMINA BLOG</h1>
             <p>Our blogs are written by trusted authors and well known writers so that we can provide you the best blogs and articles tailored to meet your needs</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2 md:p-10">
                {blogDetails.map((blog,index) =>(
                <Link key={index} href={"#"}  className="space-y-2 group">
                 <Image src="/jimmycarter.webp" alt="blogimage" width={200} height={200} />
                  <div className="flex justify-between">
                  <span className="text-blue-400 text-sm">{blog.author}</span>
                  <span className="text-blue-400 text-sm">{blog.timestamp}</span>
                  </div>
                  <h1 className="font-bold text-lg">{blog.title} </h1>
                  <p className="text-sm text-gray-400 line-clamp-1 group-hover:underline">{blog.body}</p>
                </Link>
                ))}
            </div>
         </main>
    )
}