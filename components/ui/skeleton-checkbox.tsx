import { Skeleton } from './skeleton';

function SkeletonCheckBox() {
  return (
    <div className='flex items-center space-x-2 mb-4 shrink-0'>
      <Skeleton className='h-6 w-6 rounded-[8px]' />
      <Skeleton className='h-5 flex-1 rounded-[8px]' />
    </div>
  );
}

export { SkeletonCheckBox };
