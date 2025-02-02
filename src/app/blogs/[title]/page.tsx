// page
import BlogDetails from "@/components/pages/blogs/blog"
import { notFound } from "next/navigation";

// services
import { getBlogByTitle } from "@/services/blogs/getBlogByTitle";
import { Metadata } from "next";

// baseUrl
import { baseUrl } from '@/utils/baseUrl';


interface IBlogPage {
  params: Promise<{
    title: string;
  }>;
}

// metadata
export async function generateMetadata({ params }: IBlogPage): Promise<Metadata> {

  const { title } = await params

  const data = await getBlogByTitle(title)

  if (!data) {
    return {
      title: "Blog Not Found",
    }
  }

  else {
    return {
      title: data?.title,
      description: data?.description,
      // keywords: "",
      openGraph: {
        type: "article",
        url: `${baseUrl}/blogs/${data?.title}`,
        title: data?.title,
        description: data?.description,
        siteName: "mac-hadis",
        images: [
          { url: data?.imageSrc }
        ]
      },

      twitter: {
        card: "summary_large_image",
        title: data?.title,
        description: data?.description,
        images: data?.imageSrc
      },
      alternates: {
        canonical: `${baseUrl}/blogs/${data?.title}`
      },
      // robots: "index, follow",

    }
  }


}

export default async function BlogDetailsPage({ params }: IBlogPage) {
  const { title } = await params

  // console.log("start")
  // console.log(decodeURI(title))
  // console.log(blogs[29].title)
  // console.log(decodeURI(title) === blogs[29].title)

  const data: BlogPost | undefined = await getBlogByTitle(title)

  if (!data) {
    notFound()
  }

  return <BlogDetails data={data} />
}
