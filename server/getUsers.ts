// The purpose of this file is to mock server actions / api calls to fetch data from the db.
import usersData from "@/data/users.json";

export async function getUsers(page: number, pageSize: number) {
  const users = new Promise((resolve) => {
    setTimeout(() => {
      // start will be 0, 10, 20, 30, 40, 50 etc...
      // end will be 10, 20, 30, 40, 50, 60 etc...
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const data = usersData.slice(start, end);
      resolve(data);
    }, 1000);
  });

  return {
    users: (await users) as User[], // User type is defined in types.ts and seems to be available globally.
    total: usersData.length,
  };
}
