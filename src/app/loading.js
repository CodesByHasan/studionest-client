export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[#fbfaf7]">
      <div className="size-10 animate-spin rounded-full border-4 border-[#e8e3dc] border-t-[#a65a3c]" />
      <p className="text-sm font-medium text-[#a65a3c]">
        Preparing your creative space...
      </p>
    </div>
  );
}