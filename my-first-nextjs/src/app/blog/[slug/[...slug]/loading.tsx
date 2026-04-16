export default function PostLoading() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Nút quay lại Skeleton */}
      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-8"></div>

      <article>
        {/* Meta info (Category, Date, Author) Skeleton */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-6 w-20 bg-blue-100 rounded animate-pulse"></div>
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Title Skeleton */}
        <div className="h-10 bg-gray-200 rounded animate-pulse mb-8 w-full"></div>
        <div className="h-10 bg-gray-200 rounded animate-pulse mb-10 w-3/4"></div>

        {/* Content Skeleton (Nhiều dòng mô phỏng văn bản) */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-100 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-100 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-gray-100 rounded animate-pulse w-full"></div>
          <div className="h-4 bg-gray-100 rounded animate-pulse w-4/6"></div>

          <div className="pt-4 space-y-4">
            <div className="h-4 bg-gray-100 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-100 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4"></div>
          </div>
        </div>
      </article>

      <p className="text-center mt-10 text-gray-400 text-sm animate-bounce">
        Đang tải bài viết của Gia Bảo...
      </p>
    </div>
  );
}
