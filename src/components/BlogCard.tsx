import Avatar from "./Avatar";

export interface IBlogCardProps {
  title: string;
  content: string;
  publishedDate: string;
  authorName: string;
}

export default function BlogCard({
  title,
  content,
  publishedDate,
  authorName,
}: IBlogCardProps) {
 
  return (
    <div className="border-b border-gray-300">
      <div className="p-4 pb-4">
        <div className="mt-2 flex items-center">
          <div>
            <Avatar username={authorName} />
          </div>
          <div className="px-2">{authorName}</div>

          <div className=" text-gray-500 text-sm px-2 w-100">
            {publishedDate}
          </div>
        </div>
        <div className="mt-4">
          <div className="text-xl font-bold">{title}</div>
          <div>{content}</div>
        </div>

        <div className="mt-4 text-gray-500 text-sm">
          <p>5 min read</p>
        </div>
      </div>
    </div>
  );
}
