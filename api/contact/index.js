// Azure Function endpoint handling form submissions
module.exports = async function (context, req) {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
        context.res = {
            status: 400,
            body: { error: "Missing required form fields." }
        };
        return;
    }

    try {
        // TODO: Plug in SendGrid or Azure Communication Services API here to dispatch emails
        
        context.res = {
            status: 200,
            body: { message: "Email sent successfully!" }
        };
    } catch (err) {
        context.res = {
            status: 500,
            body: { error: "Failed to dispatch email." }
        };
    }
};