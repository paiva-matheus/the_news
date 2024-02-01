import { Skeleton } from './skeleton';

export function SkeletonList() {
  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-wrap gap-8 mx-auto my-0 p-0 justify-between">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((key: number) => (
          <Skeleton key={key} />
        ))}
      </ul>
    </div>
  );
}
