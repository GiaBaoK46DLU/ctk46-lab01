export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string; // Đã thêm trường author
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt:
      "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: "Next.JS là một React framework mạnh mẽ...",
    date: "2025-01-15",
    category: "Công nghệ",
    author: "Đinh Lâm Gia Bảo",
  },
  {
    slug: "huong-dan-typescript",
    title: "Làm chủ TypeScript trong 10 phút",
    excerpt: "Tại sao bạn nên dùng TypeScript thay vì JavaScript thuần?",
    content:
      "TypeScript giúp bắt lỗi ngay khi code thông qua hệ thống kiểu dữ liệu mạnh mẽ...",
    date: "2025-02-10",
    category: "Lập trình",
    author: "Đinh Lâm Gia Bảo",
  },
  {
    slug: "bi-quyet-hoc-ai",
    title: "Sử dụng AI trong phát triển phần mềm",
    excerpt: "Cách tận dụng GitHub Copilot và ChatGPT để tăng 200% năng suất.",
    content:
      "AI không thay thế lập trình viên, nhưng lập trình viên biết dùng AI sẽ thay thế người không biết...",
    date: "2025-02-15",
    category: "AI",
    author: "Đinh Lâm Gia Bảo",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
