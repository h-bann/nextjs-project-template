"use server";

import { redirect } from "next/navigation";
import { executeQuery } from "@/lib/database";
import {
  hashPassword,
  verifyPassword,
  generateToken,
  setAuthCookie,
  clearAuthCookie,
  getAuthUser,
} from "@/lib/auth";
import { registerSchema, loginSchema } from "@/lib/validations";

export async function registerAction(prevState, formData) {
  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Validate input
    const validation = registerSchema.safeParse(data);
    if (!validation.success) {
      return {
        message: "Validation failed",
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const { name, email, password } = validation.data;

    // Check if user already exists
    const existingUser = await executeQuery(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return {
        message: "User with this email already exists",
        errors: {},
      };
    }

    // Hash password and create user
    const hashedPassword = await hashPassword(password);
    const result = await executeQuery(
      "INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, NOW())",
      [name, email, hashedPassword]
    );

    // Generate token and set cookie
    const token = generateToken({
      id: result.insertId,
      email,
      name,
    });

    await setAuthCookie(token);
  } catch (error) {
    console.error("Registration error:", error);
    return {
      message: "Something went wrong. Please try again.",
      errors: {},
    };
  }

  redirect("/dashboard");
}

export async function loginAction(prevState, formData) {
  try {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Validate input
    const validation = loginSchema.safeParse(data);
    if (!validation.success) {
      return {
        message: "Validation failed",
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const { email, password } = validation.data;

    // Find user
    const users = await executeQuery(
      "SELECT id, name, email, password FROM users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return {
        message: "Invalid email or password",
        errors: {},
      };
    }

    const user = users[0];

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return {
        message: "Invalid email or password",
        errors: {},
      };
    }

    // Generate token and set cookie
    const token = generateToken({
      id: user.id,
      email: user.email,
      name: user.name,
    });

    await setAuthCookie(token);
  } catch (error) {
    console.error("Login error:", error);
    return {
      message: "Something went wrong. Please try again.",
      errors: {},
    };
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  await clearAuthCookie();
  redirect("/");
}

export async function updateProfileAction(prevState, formData) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return {
        message: "Unauthorized",
        success: false,
      };
    }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    // Basic validation
    if (!data.name || !data.email) {
      return {
        message: "Name and email are required",
        success: false,
      };
    }

    // Check if email is already taken by another user
    const existingUser = await executeQuery(
      "SELECT id FROM users WHERE email = ? AND id != ?",
      [data.email, user.id]
    );

    if (existingUser.length > 0) {
      return {
        message: "Email is already taken by another user",
        success: false,
      };
    }

    // Update user
    await executeQuery("UPDATE users SET name = ?, email = ? WHERE id = ?", [
      data.name,
      data.email,
      user.id,
    ]);

    // Generate new token with updated info
    const token = generateToken({
      id: user.id,
      email: data.email,
      name: data.name,
    });

    await setAuthCookie(token);

    return {
      message: "Profile updated successfully",
      success: true,
    };
  } catch (error) {
    console.error("Profile update error:", error);
    return {
      message: "Something went wrong. Please try again.",
      success: false,
    };
  }
}

export async function changePasswordAction(prevState, formData) {
  try {
    const user = await getAuthUser();
    if (!user) {
      return {
        message: "Unauthorized",
        success: false,
      };
    }

    const data = {
      currentPassword: formData.get("currentPassword"),
      newPassword: formData.get("newPassword"),
      confirmPassword: formData.get("confirmPassword"),
    };

    // Validate passwords
    if (!data.currentPassword || !data.newPassword || !data.confirmPassword) {
      return {
        message: "All password fields are required",
        success: false,
      };
    }

    if (data.newPassword !== data.confirmPassword) {
      return {
        message: "New passwords do not match",
        success: false,
      };
    }

    if (data.newPassword.length < 8) {
      return {
        message: "New password must be at least 8 characters long",
        success: false,
      };
    }

    // Get current user password
    const users = await executeQuery(
      "SELECT password FROM users WHERE id = ?",
      [user.id]
    );

    if (users.length === 0) {
      return {
        message: "User not found",
        success: false,
      };
    }

    // Verify current password
    const isValidPassword = await verifyPassword(
      data.currentPassword,
      users[0].password
    );
    if (!isValidPassword) {
      return {
        message: "Current password is incorrect",
        success: false,
      };
    }

    // Hash and update new password
    const hashedPassword = await hashPassword(data.newPassword);
    await executeQuery("UPDATE users SET password = ? WHERE id = ?", [
      hashedPassword,
      user.id,
    ]);

    return {
      message: "Password changed successfully",
      success: true,
    };
  } catch (error) {
    console.error("Password change error:", error);
    return {
      message: "Something went wrong. Please try again.",
      success: false,
    };
  }
}
