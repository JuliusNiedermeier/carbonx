"use server";

import { Company } from "@/app/_database/schema";
import { db } from "@/app/_services/postgres";
import { eq } from "drizzle-orm";

export const getCompany = async (ID: number) => await db.query.Company.findFirst({ where: eq(Company.id, ID) });