# EmailJS Setup Guide

## Template Configuration

Your EmailJS template should use these variable names to match the contact form:

### Template Variables

In your EmailJS template editor, use these variables:

```
{{user_name}}      - The name of the person sending the message
{{user_email}}     - The email address of the sender
{{message}}        - The message content
{{to_name}}        - Your name (Wendy AB Boateng)
{{reply_to}}       - Reply-to email address (same as user_email)
```

### Example Email Template

Here's a sample template you can use in EmailJS:

**Subject Line:**
```
New Contact Form Message from {{user_name}}
```

**Email Body:**
```
Hello {{to_name}},

You have received a new message from your portfolio website.

From: {{user_name}}
Email: {{user_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{user_name}}.
```

## Setup Steps

1. **Go to EmailJS Dashboard**
   - Visit https://dashboard.emailjs.com/

2. **Create/Edit Email Template**
   - Go to "Email Templates"
   - Click on your template: `template_ssjyep9`
   - Make sure the template uses the variable names listed above

3. **Configure Template Settings**
   - **To Email**: Your email address (where you want to receive messages)
   - **From Name**: `{{user_name}}`
   - **Reply To**: `{{reply_to}}` or `{{user_email}}`
   - **Subject**: `New Contact Form Message from {{user_name}}`

4. **Test the Template**
   - Use the "Test it" button in EmailJS dashboard
   - Fill in sample values for all variables
   - Check if you receive the test email

## Common Issues & Solutions

### 422 Error (Unprocessable Content)

**Cause**: Template variable names don't match

**Solution**: 
- Check your EmailJS template uses: `user_name`, `user_email`, `message`, `to_name`, `reply_to`
- Make sure all required variables in your template are being sent from the form

### Environment Variables Not Loading

**Cause**: `.env` file not being read or dev server not restarted

**Solution**:
1. Stop the dev server (Ctrl+C)
2. Restart it: `npm run dev`
3. Check browser console for any errors

### CORS Errors

**Cause**: EmailJS service not properly configured

**Solution**:
- Make sure your EmailJS service is active
- Check that the service ID matches: `service_0n5afjn`

## Debugging

Open browser console (F12) and check for:
- `EmailJS Response:` - Shows successful send
- `EmailJS Error:` - Shows error details
- Check if environment variables are loaded

## Alternative: Hardcoded Values (for testing)

If you want to test without environment variables, temporarily replace in `Contact.jsx`:

```javascript
const serviceId = 'service_0n5afjn';
const templateId = 'template_ssjyep9';
const publicKey = 'NTid6sm4cxA3INQRP';
```

Remember to switch back to environment variables before deploying!