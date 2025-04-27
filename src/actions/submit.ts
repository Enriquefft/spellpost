"use server";
import { db } from "@/db";
import { leads } from "@/db/schema";
export async function submitLeadFormData(formData: {
	challenge: string;
	email: string;
	name: string;
	phone: string;
	platform: string;
	timeline: string;
}) {
	await db.insert(leads).values(formData);
}
