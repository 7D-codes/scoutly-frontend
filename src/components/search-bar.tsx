"use client";

import { Input } from "@/components/ui/input";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function SearchBar() {
  const quick_search_suggestions = [
    {
      text: "When was @stripe founded",
      category: "Founding",
    },
    {
      text: "What is @openai's latest valuation",
      category: "Funding",
    },
    {
      text: "Who are the founders of @figma",
      category: "Team",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-[33%] gap-4">
      <div className="flex items-center justify-center w-full bg-white/80 backdrop-blur-md rounded-2xl border shadow-lg p-2">
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="flex flex-row items-center justify-center w-full gap-3">
            <Input
              type="text"
              placeholder="ask anything about any Startup"
              className="border-[1px] shadow-none border-gray-200 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500"
            />
            <Button
              size="icon"
              className="bg-gradient-to-tr from-gray-700 to-gray-800 hover:from-gray-500 hover:to-gray-600"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center w-full gap-2">
            <p className="text-[12px] text-gray-500 text-center">
              Results might take a few seconds to load, information might be
              inaccurate.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {quick_search_suggestions.map((suggestion) => (
          <Button
            size="sm"
            variant="outline"
            key={suggestion.text}
            className="flex flex-row items-center justify-center w-fit px-2 py-1 hover:bg-transparent"
          >
            <p className="text-[12px] text-gray-500">{suggestion.text}</p>
          </Button>
        ))}
      </div>
    </div>
  );
}
