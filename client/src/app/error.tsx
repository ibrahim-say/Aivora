
"use client";

type Props = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: Props) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-3xl border border-border bg-background p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-foreground">
          حدث خطأ
        </h1>

        <p className="mt-4 leading-7 text-muted-foreground">
          {error.message}
        </p>

        <button
  type="button"
  onClick={() => window.location.reload()}
  className="mt-6 cursor-pointer rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-[#6D28D9]"
>
  حاول مرة أخرى
</button>
      </div>
    </main>
  );
}

