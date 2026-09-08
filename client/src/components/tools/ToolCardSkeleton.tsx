export default function ToolCardSkeleton() {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
        {/* Screenshot */}
        <div className="relative  aspect-video w-full overflow-hidden bg-muted">
          <div className="absolute inset-0  animate-pulse bg-muted-foreground/10" />
        </div>
  
        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Name */}
          <div className="flex items-center justify-between gap-3">
            <div className="h-7 w-2/3 animate-pulse rounded-lg bg-muted" />
  
            <div className="h-6 w-6 animate-pulse rounded-md bg-muted" />
          </div>
  
          {/* Description */}
          <div className="mt-4 space-y-3">
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
          </div>
  
          {/* Subcategories */}
          <div className="mt-5 flex gap-2">
            <div className="h-7 w-20 animate-pulse rounded-full bg-muted" />
            <div className="h-7 w-24 animate-pulse rounded-full bg-muted" />
          </div>
  
          {/* Footer */}
          <div className="mt-auto flex items-center justify-between pt-6">
            <div className="h-9 w-20 animate-pulse rounded-lg bg-muted" />
  
            <div className="h-10 w-24 animate-pulse rounded-lg bg-muted" />
          </div>
        </div>
      </div>
    );
  }