"use client";

import { useEffect } from "react";
import { incrementToolViews } from "@/services/tool.service";

type ToolViewTrackerProps = {
  toolId: string;
};

export default function ToolViewTracker({
  toolId,
}: ToolViewTrackerProps) {
  useEffect(() => {
    incrementToolViews(toolId).catch(() => {});
  }, [toolId]);

  return null;
}