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
    <div className="space-y-7 text-foreground">
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
              className="mt-10 text-4xl font-extrabold leading-tight text-foreground"
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
              className="mt-10 border-b border-border pb-3 text-3xl font-bold leading-tight text-foreground"
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
              className="mt-8 text-2xl font-bold leading-relaxed text-foreground"
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
              className="mt-7 text-xl font-bold leading-relaxed text-foreground"
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
              className="mt-6 text-lg font-bold leading-relaxed text-foreground"
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
              className="text-lg leading-8 text-muted-foreground"
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
              className="space-y-3 rounded-2xl border border-border bg-card p-5 pr-10"
            >
              {block.items.map(
                (item, itemIndex) => (
                  <li
                    key={`${key}-${itemIndex}`}
                    className="list-disc text-lg leading-7 text-muted-foreground"
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
              className="space-y-3 rounded-2xl border border-border bg-card p-5 pr-10"
            >
              {block.items.map(
                (item, itemIndex) => (
                  <li
                    key={`${key}-${itemIndex}`}
                    className="list-decimal text-lg leading-7 text-muted-foreground"
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
              className="rounded-2xl border-r-4 border-primary bg-secondary px-6 py-5 text-[16px] font-medium leading-8 text-muted-foreground"
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
              className="overflow-x-auto rounded-2xl bg-card p-5 text-sm leading-7 text-card-foreground"
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
              className="my-8 overflow-x-auto rounded-2xl border border-border"
            >
              <table className="w-full min-w-[600px] border-collapse text-right">
                {/* Headers */}

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
                            className="border-b border-border px-5 py-4 text-xl font-bold text-primary"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                )}

                {/* Rows */}

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
                                  className="px-5 py-4 text-lg leading-7 text-muted-foreground"
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
              className="text-lg leading-8 text-muted-foreground"
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