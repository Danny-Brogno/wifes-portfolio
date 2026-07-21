const https = require('https');

module.exports = async function (context, req) {
    const apiKey = process.env.SENDGRID_API_KEY;

    if (!apiKey) {
        context.res = {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
            body: { error: "SENDGRID_API_KEY is missing in Azure Portal environment variables." }
        };
        return;
    }

    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
        context.res = {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
            body: { error: "Missing required fields." }
        };
        return;
    }

    const payload = JSON.stringify({
        personalizations: [{ to: [{ email: 'majesca.maclan@gmail.com' }] }],
        from: { email: 'majesca.maclan@gmail.com' },
        reply_to: { email: email },
        subject: `New Portfolio Message from ${name}`,
        content: [
            {
                type: 'text/html',
                value: `
                    <h3>New Portfolio Contact Form Message</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `
            }
        ]
    });

    const options = {
        hostname: 'api.sendgrid.com',
        port: 443,
        path: '/v3/mail/send',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
        }
    };

    return new Promise((resolve) => {
        const sendgridReq = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    context.res = {
                        status: 200,
                        headers: { 'Content-Type': 'application/json' },
                        body: { message: "Email sent successfully!" }
                    };
                } else {
                    context.res = {
                        status: 500,
                        headers: { 'Content-Type': 'application/json' },
                        body: { error: `SendGrid error (${res.statusCode}): ${data}` }
                    };
                }
                resolve();
            });
        });

        sendgridReq.on('error', (err) => {
            context.res = {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
                body: { error: err.message }
            };
            resolve();
        });

        sendgridReq.write(payload);
        sendgridReq.end();
    });
};