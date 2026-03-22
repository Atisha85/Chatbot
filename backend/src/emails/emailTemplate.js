export const createWelcomeEmailTemplate = (name, clientURL) => {
  return `
  <div style="font-family: Arial; background:#f4f4f4; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:white; border-radius:10px; overflow:hidden;">
      
      <!-- Header -->
      <div style="background: linear-gradient(90deg,#00c6ff,#0072ff); padding:20px; text-align:center; color:white;">
        <h1>Welcome to Chatify!</h1>
      </div>

      <!-- Content -->
      <div style="padding:20px;">
        <h2 style="color:#4a6cf7;">Hello ${name},</h2>

        <p>
          We're excited to have you join our messaging platform!
        </p>

        <div style="background:#f9f9f9; padding:15px; border-left:4px solid #00c6ff;">
          <h3>Get started:</h3>
          <ul>
            <li>Set up profile</li>
            <li>Add contacts</li>
            <li>Start chatting</li>
          </ul>
        </div>

        <!-- Button -->
        <div style="text-align:center; margin:30px 0;">
          <a href="${clientURL}" 
             style="background: linear-gradient(90deg,#00c6ff,#0072ff);
                    color:white; padding:12px 25px; border-radius:25px;
                    text-decoration:none;">
            Open Chatify
          </a>
        </div>

        <p>Happy messaging! 🎉</p>
      </div>

    </div>
  </div>
  `;
};