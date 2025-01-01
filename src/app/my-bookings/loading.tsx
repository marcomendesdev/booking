import { SkeletonCard } from "@/components/SkeletonCard";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div>
      <h1 className="text-2xl font-bold py-10 text-left">Tables</h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        <Card>
          <SkeletonCard />
        </Card>
        <Card>
          <SkeletonCard />
        </Card>
        <Card>
          <SkeletonCard />
        </Card>
        <Card>
          <SkeletonCard />
        </Card>
        <Card>
          <SkeletonCard />
        </Card>
        <Card>
          <SkeletonCard />
        </Card>
      </div>
    </div>
  );
}