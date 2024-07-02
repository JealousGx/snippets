"use client";

import React from "react";

import {
  Pagination as PaginationComp,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { cn } from "@/lib/utils";

export const Pagination = ({
  totalCount,
  perPage,
  currPage,
  setPage,
  maxPageNum = 5, // max number of pages to display
  className,
}: {
  totalCount: number;
  perPage: number;
  currPage: number;
  setPage: (page: number) => void;
  maxPageNum?: number;
  className?: { container?: string };
}) => {
  if (!totalCount || totalCount <= perPage) return;

  const pages: number[] = [];
  const pageNumLimit = Math.floor(maxPageNum / 2); // curr page should be in middle

  for (let i = 1; i <= Math.ceil(totalCount / perPage); i++) {
    pages.push(i);
  }

  const activePages = pages.slice(
    Math.max(0, currPage - 1 - pageNumLimit),
    Math.min(currPage - 1 + pageNumLimit + 1, pages.length),
  );

  const handleNextPage = () => {
    if (currPage < pages.length) {
      setPage(currPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currPage > 1) {
      setPage(currPage - 1);
    }
  };

  return (
    <PaginationComp className={cn(className?.container)}>
      <PaginationContent>
        <PaginationItem
          className={cn(
            "cursor-pointer",
            currPage === 1 ? "pointer-events-none opacity-50" : "",
          )}
        >
          <PaginationPrevious onClick={handlePrevPage} />
        </PaginationItem>

        {renderPagination(activePages, currPage, setPage, pages)}

        <PaginationItem
          className={cn(
            "cursor-pointer",
            currPage === pages.length ? "pointer-events-none opacity-50" : "",
          )}
        >
          <PaginationNext onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </PaginationComp>
  );
};

const renderPagination = (
  activePages: number[],
  currPage: number,
  setPage: (num: number) => void,
  pages: number[],
) => {
  const renderedPageNums = activePages.map((page, index) => (
    <PaginationItem
      key={index}
      className={cn(
        "cursor-pointer",
        currPage === page ? "bg-neutral-100 rounded-md" : "",
      )}
    >
      <PaginationLink onClick={() => setPage(page)}>{page}</PaginationLink>
    </PaginationItem>
  ));

  // ellipsis at start
  if (activePages[0] > 1) {
    renderedPageNums.unshift(
      <PaginationEllipsis
        key="ellipsis-start"
        onClick={() => setPage(activePages[0] - 1)}
      />,
    );
  }

  // ellipsis at end
  if (activePages[activePages.length - 1] < pages.length) {
    renderedPageNums.push(
      <PaginationEllipsis
        key="ellipsis-end"
        onClick={() => setPage(activePages[activePages.length - 1] + 1)}
      />,
    );
  }

  return renderedPageNums;
};
