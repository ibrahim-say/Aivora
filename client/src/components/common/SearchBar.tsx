
"use client";

import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

type SearchBarProps = {
  onSearch?: (value: string) => void;
  initialSearch?: string;
};

export default function SearchBar({
  onSearch,
  initialSearch = "",
}: SearchBarProps) {
  const [value, setValue] = useState(initialSearch);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const searchValue = value.trim();

    onSearch?.(searchValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-2xl"
    >
      <div
        className="
          flex
          w-full
          flex-row
          items-center
          gap-2
          rounded-2xl
          border
          border-border
          bg-background
          p-2
          shadow-lg
          transition-all
          duration-300
          focus-within:border-primary
          focus-within:shadow-[0_0_25px_rgba(124,58,237,0.25)]
          sm:gap-3
          sm:p-3
        "
      >
        <div className="relative min-w-0 flex-1">
          <Search
            size={20}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-muted-foreground
              sm:right-4
            "
          />

          <input
            type="text"
            value={value}
            onChange={(event) =>
              setValue(event.target.value)
            }
            placeholder="ابحث عن أداة، وظيفة، أو استخدام..."
            className="
              h-12
              w-full
              min-w-0
              rounded-xl
              border-none
              bg-transparent
              pr-11
              pl-2
              text-sm
              outline-none
              sm:h-14
              sm:pr-12
              sm:pl-4
              sm:text-base
            "
          />
        </div>

        <button
          type="submit"
          className="
            h-12
            shrink-0
            rounded-xl
            bg-primary
            px-4
            text-sm
            font-semibold
            text-primary-foreground
            transition
            hover:opacity-90
            sm:h-14
            sm:px-8
            sm:text-base
            cursor-pointer
          "
        >
          بحث
        </button>
      </div>
    </form>
  );
}

