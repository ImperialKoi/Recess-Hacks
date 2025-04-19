"use server";

import { encodeBase32LowerCaseNoPadding } from "@oslojs/encoding";
import { db } from "@/lib/database";
import { createEmailUser, CreateEmailUserRow, updateDBUserPassword } from "@/lib/sqlc/auth_sql";
import bcrypt from "bcryptjs"; // <-- Import bcrypt

export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

interface userData {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

/**
 * @throws {Error}
 */
export async function createUser(userData: userData): Promise<CreateEmailUserRow | null> {
    const { email, password, firstName, lastName } = userData;

    const hashedPassword = await hashPassword(password);
    return await createEmailUser(db, {
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName
    });
}

/**
 * @throws {Error}
 */
const updateUserPassword = async (userId: number, password: string): Promise<void> => {
    const hashedPassword = await hashPassword(password);
    await updateDBUserPassword(db, {
        id: userId,
        password: hashedPassword
    });
};

export async function generateSessionToken(): Promise<string> {
    const bytes = new Uint8Array(24);
    crypto.getRandomValues(bytes);
    return encodeBase32LowerCaseNoPadding(bytes);
}

export async function generateToken(): Promise<string> {
    const bytes = new Uint8Array(32);
    crypto.getRandomValues(bytes);
    return encodeBase32LowerCaseNoPadding(bytes);
}