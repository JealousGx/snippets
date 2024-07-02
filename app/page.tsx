import { getUsers } from "@/server/getUsers";

import { TablePagination } from "@/components/table-pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader as TableHead,
  TableHead as TableHeading,
  TableRow,
} from "@/components/ui/table";

const ROWS_PER_PAGE = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: { p: string; l: string };
}) {
  const { p, l } = searchParams;

  const page = p ? Number(p) : 1;
  const pageSize = l ? Number(l) : 10;

  const data = await getUsers(page, pageSize);

  return (
    <main className="container my-8">
      <h1 className="text-2xl font-semibold text-center mb-4">Users</h1>

      <div className="border rounded-md">
        <Table>
          <TableHead className="w-full">
            <TableRow>
              <TableHeading>ID.</TableHeading>
              <TableHeading>Full Name</TableHeading>
              <TableHeading>Job Type</TableHeading>
              <TableHeading>Job Title</TableHeading>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!data.users?.length &&
              data.users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell className="flex items-center gap-x-3 font-medium">
                    <Avatar>
                      <AvatarImage
                        className="rounded-lg"
                        src={user.avatar || ""}
                      />

                      <AvatarFallback className="rounded-lg">
                        {user.fullName?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {user.fullName}
                  </TableCell>
                  <TableCell>{user.jobType}</TableCell>
                  <TableCell>{user.jobTitle}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {!data.users?.length && (
          <p className="py-8 text-center">No users found!</p>
        )}
      </div>

      <TablePagination
        total={data.total}
        currPage={page}
        itemsPerPage={ROWS_PER_PAGE}
      />
    </main>
  );
}
