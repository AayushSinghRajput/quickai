import sql from "../configs/db.js";

export const submitContactMessage = async (req, res) => {
    try {
        const { firstName, lastName, email, subject, message } = req.body;
        
        // Validation
        if (!email || !message) {
            return res.status(400).json({ success: false, message: "Email and message are required" });
        }
        
        // First, ensure the table exists
        try {
            await sql`
                CREATE TABLE IF NOT EXISTS contact_messages (
                    id SERIAL PRIMARY KEY,
                    first_name VARCHAR(100),
                    last_name VARCHAR(100),
                    email VARCHAR(255) NOT NULL,
                    subject VARCHAR(255),
                    message TEXT NOT NULL,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                    is_read BOOLEAN DEFAULT FALSE
                )
            `;
        } catch (tableError) {
            console.error("Error creating table:", tableError);
            // Continue with the insertion anyway
        }
        
        // Store in database
        await sql`
            INSERT INTO contact_messages 
            (first_name, last_name, email, subject, message) 
            VALUES 
            (${firstName}, ${lastName}, ${email}, ${subject}, ${message})
        `;
        
        res.status(201).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error submitting contact message:", error);
        
        // Provide more specific error messages based on the error type
        if (error.code === '23505') {
            // Duplicate key error
            res.status(400).json({ success: false, message: "This message has already been submitted." });
        } else if (error.code === '42P01') {
            // Relation does not exist
            res.status(500).json({ success: false, message: "Database setup issue. Please contact support." });
        } else if (error.code === '23502') {
            // Not null violation
            res.status(400).json({ success: false, message: "Missing required fields." });
        } else {
            // Generic error
            res.status(500).json({ 
                success: false, 
                message: "Failed to send message. Please try again later.",
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    }
};