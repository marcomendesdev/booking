"use client";

export default function Error() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold">Error</h1>
      <p className="text-lg">An error occurred while fetching the data.</p>
    </div>
  );
}
