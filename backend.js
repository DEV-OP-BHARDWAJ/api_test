const express=require("express");
const app=express();
app.use(express.json());
app.post('/bfhl',(req, res)=>{
    if (!req.body || !req.body.data || !Array.isArray(req.body.data)){
        return res.status(400).json({ is_success: false, message: "Invalid"});
    }
    let data=req.body.data;
    let numbers=[];
    let alphabets=[];
    for (let i=0;i<data.length;i++) {
        if (!isNaN(data[i])) {
            numbers.push(data[i]); 
        } else if (typeof data[i] === "string" && data[i].length === 1 && /[a-zA-Z]/.test(data[i])) {
            alphabets.push(data[i]);
        }
    }
    let highestAlphabet=[];
    if (alphabets.length>0) {
        highestAlphabet.push(alphabets.reduce((max,char)=>char.toLowerCase()>max.toLowerCase()?char:max,alphabets[0]));
    }
    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});
app.get('/bfhl',(req,res)=>{
    res.json({ operation_code: "BFHL_2025" });
});
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});
