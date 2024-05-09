import { useState } from "react"
import "./content.css"

export function Password(){

   const[length,setLength] = useState(8);
   const[includeUppercase, setIncludeUppercase] = useState (true);
   const[includeLowercase, setIncludeLowercase] = useState(true);
   const[includeNumbers, setIncludeNumbers] = useState(true);
   const[includeSymbols, setIncludeSymbols] = useState(true);
   const[password,setPassword] = useState("");

   const generatePassword = ()=>{
    
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()-_=+";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math. floor (Math.random() * charset.length);
        generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
   }

   const copyClipboard = ()=>{
    navigator.clipboard.writeText(password);
    alert("Password Copied")
   }

    return(
        <>
         <div className="password-generator">
            <h2>Strong Password Generator</h2>
            <div className="input-group">
              <label>Password Length:</label>
              <input type="number" id="number" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="cupper" checked={includeUppercase} onChange={(e)=> setIncludeUppercase(e.target.checked)} />
                <label>Include Uppercase Letters</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="lower" checked= {includeLowercase} onChange={(e)=> setIncludeLowercase(e.target.checked)} />
                <label>Include Lowercase Letters</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="number" checked = {includeNumbers} onChange={(e)=> setIncludeNumbers(e.target.checked)} />
                <label>Include Numbers</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="symbols" checked = {includeSymbols} onChange={(e)=> setIncludeSymbols(e.target.checked)} />
                <label>Include Symbols</label>
            </div>
            <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
            <div className="generated-password">
                <input type="text" id="readonly" value={password} />
                <button className="copy-btn" onClick={copyClipboard}>Copy</button>
            </div>
         </div>
        </>
    )
}