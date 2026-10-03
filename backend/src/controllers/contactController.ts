import { Request, Response } from "express";
import pool from "../config/db";
import { contactSchema } from "../validators/contactValidation";

export const createContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { error, value } = contactSchema.validate(
      req.body,
      {
        abortEarly: false,
        stripUnknown: true,
      }
    );

    if (error) {
      res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors: error.details.map(
          (detail) => detail.message
        ),
      });

      return;
    }

    const {
      name,
      email,
      subject,
      message,
    } = value;

    const result = await pool.query(
      `
      INSERT INTO contacts
      (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING
        id,
        name,
        email,
        subject,
        created_at
      `,
      [
        name,
        email,
        subject,
        message,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(
      "Contact creation error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to send message.",
    });
  }
};