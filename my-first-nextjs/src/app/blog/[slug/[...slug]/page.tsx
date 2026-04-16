import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../../../../data/posts";

// 1. SỬA LỖI Ở ĐÂY: Đổi kiểu dữ liệu của slug từ string thành mảng chuỗi (string[])
interface BlogPostPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // 2. SỬA LỖI Ở ĐÂY: Vì slug giờ là mảng, ta lấy phần tử đầu tiên làm mã bài viết
  const postSlug = slug[0];
  const post = getPostBySlug(postSlug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/blog"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>

      {/* Thêm một dòng nhỏ để bạn debug và thấy rõ Catch-all hoạt động thế nào */}
      <p className="text-xs text-red-500 mb-4 font-mono bg-red-50 p-2 rounded">
        Debug - Bạn đang truy cập các cấp độ: {slug.join(" / ")}
      </p>

      <article>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-sm text-gray-400">{post.date}</span>
          <span className="text-sm text-gray-600 font-medium">
            | Tác giả: {post.author}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <div className="prose max-w-none text-gray-700 whitespace-pre-line">
          {post.content}
        </div>
      </article>
    </div>
  );
}

// 3. SỬA LỖI Ở ĐÂY: Trả về mảng cho generateStaticParams
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: [post.slug],
  }));
}
