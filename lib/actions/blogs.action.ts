"use server";
import { databases, DATABASE_ID, BLOGS_ID } from "../appwrite.config";

export const getBlogData = async () => {
    console.log(process.env.DATABASE_ID, process.env.BLOGS_ID)
    try {
        const response = await databases.listDocuments(DATABASE_ID!, BLOGS_ID!);
        return response.documents;
    } catch (error) {
        console.error('Error fetching data from Appwrite:', error);
        return [];
    }
};