"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { Pagination } from "@/components/pagination";
import { appendSearchParams } from "@/lib/utils";

interface Props {
  total: number;
  itemsPerPage: number;
  currPage: number;
}

export const TablePagination = ({
  total,
  itemsPerPage = 10,
  currPage,
}: Props) => {
  const router = useRouter();

  const setNewPage = (newPage: number) => {
    let newPath = `/`;

    if (newPage !== 1) {
      newPath += `?p=${newPage}`;
    }

    if (itemsPerPage !== 1) {
      newPath = appendSearchParams(newPath, `l=${itemsPerPage}`);
    }

    router.push(newPath);
  };

  return (
    <Pagination
      totalCount={total}
      perPage={itemsPerPage}
      currPage={currPage}
      setPage={setNewPage}
      className={{ container: "mt-4" }}
    />
  );
};
