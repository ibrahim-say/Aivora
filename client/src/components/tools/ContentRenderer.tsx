import React from "react";

/* =========================
   Types
========================= */

type ContentTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "ul"
  | "ol"
  | "table"
  | "blockquote"
  | "pre";

interface ContentBlock {
  _id?: string;
  tag: ContentTag | string;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

interface ContentRendererProps {
  content?: ContentBlock[];
}

/* =========================
   Component
========================= */

function ContentRenderer({
  content = [],
}: ContentRendererProps) {
  if (!Array.isArray(content) || content.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6 sm:space-y-7 text-foreground">
      {content.map((block, index) => {
        if (!block || !block.tag) {
          return null;
        }

        const tag = block.tag.toLowerCase();

        const key =
          block._id ??
          `${tag}-${index}`;

        /* =========================
           H1
        ========================= */

        if (tag === "h1") {
          return (
            <h2
              key={key}
              className="mt-8 text-2xl font-extrabold leading-tight text-foreground sm:mt-10 sm:text-3xl lg:text-4xl"
            >
              {block.text}
            </h2>
          );
        }

        /* =========================
           H2
        ========================= */

        if (tag === "h2") {
          return (
            <h2
              key={key}
              className="mt-8 border-b border-border pb-3 text-2xl font-bold leading-tight text-foreground sm:mt-10 sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }

        /* =========================
           H3
        ========================= */

        if (tag === "h3") {
          return (
            <h3
              key={key}
              className="mt-7 text-xl font-bold leading-relaxed text-foreground sm:mt-8 sm:text-2xl"
            >
              {block.text}
            </h3>
          );
        }

        /* =========================
           H4
        ========================= */

        if (tag === "h4") {
          return (
            <h4
              key={key}
              className="mt-6 text-lg font-bold leading-relaxed text-foreground sm:mt-7 sm:text-xl"
            >
              {block.text}
            </h4>
          );
        }

        /* =========================
           H5 / H6
        ========================= */

        if (tag === "h5" || tag === "h6") {
          return (
            <h5
              key={key}
              className="mt-5 text-base font-bold leading-relaxed text-foreground sm:mt-6 sm:text-lg"
            >
              {block.text}
            </h5>
          );
        }

        /* =========================
           Paragraph
        ========================= */

        if (tag === "p") {
          return (
            <p
              key={key}
              className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            >
              {block.text}
            </p>
          );
        }

        /* =========================
           UL
        ========================= */

        if (tag === "ul") {
          if (
            !Array.isArray(block.items) ||
            block.items.length === 0
          ) {
            return null;
          }

          return (
            <ul
              key={key}
              className="space-y-2.5 rounded-2xl border border-border bg-card p-4 pr-8 sm:space-y-3 sm:p-5 sm:pr-10"
            >
              {block.items.map(
                (item, itemIndex) => (
                  <li
                    key={`${key}-${itemIndex}`}
                    className="list-disc text-base leading-7 text-muted-foreground sm:text-lg"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          );
        }

        /* =========================
           OL
        ========================= */

        if (tag === "ol") {
          if (
            !Array.isArray(block.items) ||
            block.items.length === 0
          ) {
            return null;
          }

          return (
            <ol
              key={key}
              className="space-y-2.5 rounded-2xl border border-border bg-card p-4 pr-8 sm:space-y-3 sm:p-5 sm:pr-10"
            >
              {block.items.map(
                (item, itemIndex) => (
                  <li
                    key={`${key}-${itemIndex}`}
                    className="list-decimal text-base leading-7 text-muted-foreground sm:text-lg"
                  >
                    {item}
                  </li>
                )
              )}
            </ol>
          );
        }

        /* =========================
           Blockquote
        ========================= */

        if (tag === "blockquote") {
          return (
            <blockquote
              key={key}
              className="rounded-2xl border-r-4 border-primary bg-secondary px-4 py-4 text-sm font-medium leading-7 text-muted-foreground sm:px-6 sm:py-5 sm:text-base sm:leading-8"
            >
              {block.text}
            </blockquote>
          );
        }

        /* =========================
           PRE / CODE
        ========================= */

        if (tag === "pre") {
          return (
            <pre
              key={key}
              dir="ltr"
              className="overflow-x-auto rounded-2xl bg-card p-4 text-xs leading-6 text-card-foreground sm:p-5 sm:text-sm sm:leading-7"
            >
              <code>
                {block.text}
              </code>
            </pre>
          );
        }

        /* =========================
           TABLE
        ========================= */

        if (tag === "table") {
          const headers =
            Array.isArray(block.headers)
              ? block.headers
              : [];

          const rows =
            Array.isArray(block.rows)
              ? block.rows
              : [];

          if (
            headers.length === 0 &&
            rows.length === 0
          ) {
            return null;
          }

          return (
            <div
              key={key}
              className="my-6 overflow-x-auto rounded-2xl border border-border sm:my-8"
            >
              <table className="w-full min-w-[600px] border-collapse text-right">
                {headers.length > 0 && (
                  <thead className="bg-secondary">
                    <tr>
                      {headers.map(
                        (
                          header,
                          headerIndex
                        ) => (
                          <th
                            key={`${key}-header-${headerIndex}`}
                            className="border-b border-border px-4 py-3 text-base font-bold text-primary sm:px-5 sm:py-4 sm:text-xl"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                )}

                {rows.length > 0 && (
                  <tbody>
                    {rows.map(
                      (row, rowIndex) => {
                        if (
                          !Array.isArray(row)
                        ) {
                          return null;
                        }

                        return (
                          <tr
                            key={`${key}-row-${rowIndex}`}
                            className="border-b border-border last:border-b-0 hover:bg-muted"
                          >
                            {row.map(
                              (
                                cell,
                                cellIndex
                              ) => (
                                <td
                                  key={`${key}-${rowIndex}-${cellIndex}`}
                                  className="px-4 py-3 text-sm leading-6 text-muted-foreground sm:px-5 sm:py-4 sm:text-lg sm:leading-7"
                                >
                                  {cell}
                                </td>
                              )
                            )}
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                )}
              </table>
            </div>
          );
        }

        /* =========================
           Unknown tag
        ========================= */

        if (block.text) {
          return (
            <p
              key={key}
              className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            >
              {block.text}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}

export default ContentRenderer;