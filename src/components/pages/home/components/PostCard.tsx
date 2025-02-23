import Image from "next/image";
import Link from "next/link";

interface IPostCardProps {
  title: string;
  imageSrc: string;
  description: string;
  className?: string;
}

const PostCard = ({
  title,
  imageSrc,
  description,
  className,
}: IPostCardProps) => {
  return (
    <Link href={`/blogs/${title}`} className={`w-[325px] ${className}`}>
      <Image
        src={imageSrc}
        alt={title}
        width={352}
        height={200}
        unoptimized
        loading="lazy"
        className="w-full h-[200px] object-cover"
      />
      <h3 className="my-4 lg:mb-[22px] text-[20px] leading-[30px] text-[#B81122] font-black text-start truncate">
        {title}
      </h3>
      <p className="text-[16px] leading-[32px] line-clamp-2">{description}</p>
    </Link>
  );
};

export default PostCard;
