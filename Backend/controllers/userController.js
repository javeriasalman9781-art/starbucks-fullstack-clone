const User = require('../models/user');
const bcrypt = require('bcryptjs'); 


exports.registerUser = async (req, res) => {
    console.log("📩 Request received:", req.body); 
    try {
        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("🔒 Password scrambled!");

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        
        console.log("✅ User saved to Atlas!"); 
        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        console.log("❌ Error:", err.message);
        res.status(400).json({ error: err.message });
    }
};
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

      
        const user = await User.findOne({ email });

  
        if (!user) {
            console.log("❌ Login failed: Email not found in database");
            return res.status(404).json({ error: "No account found with this email." });
        }

        
        if (!user.password) {
            console.log("❌ Login failed: User has no password saved");
            return res.status(500).json({ error: "Data error: Password missing in database." });
        }

       
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid password." });
        }

      
        res.status(200).json({ 
            message: "Login successful!", 
            name: user.name 
        });

    } catch (err) {
        console.error("🔥 Server Error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};
