import { PrismaClient } from "@prisma/client";
import { UserTypes } from "../src/resources/userType/userType.constants";


const prisma = new PrismaClient();

const main = async () => {
  return await prisma.userType.createMany({
    data: [
      {
        id: UserTypes.admin,
        label: "admin"
      },
      {
        id: UserTypes.client,
        label: "client"
      }
    ],
    skipDuplicates: true
  });
};

main().then(() => {
  prisma.$disconnect();
}).catch((error) => {
  console.error(error);
  prisma.$disconnect();
});