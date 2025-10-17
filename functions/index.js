// // 1. Import necessary modules
// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const nodemailer = require("nodemailer");

// // 2. Initialize the Firebase Admin SDK
// admin.initializeApp();

// // 3. Get your configured Gmail credentials
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;

// // 4. Configure the email transport using Nodemailer
// const mailTransport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });

// // 5. Define the Cloud Function
// // This function will trigger every time a new document is created in the 'messages' path
// exports.sendContactEmail = functions.database
//     .ref("/messages/{pushId}")
//     .onCreate(async (snapshot, context) => {
//     // Get the data from the form submission
//       const messageData = snapshot.val();
//       const name = messageData.name;
//       const email = messageData.email;
//       const message = messageData.message;

//       try {
//       // Fetch the destination email from the database
//       // This makes it easy to change the recipient without deploying new code
//         const emailSnapshot = await admin
//             .database()
//             .ref("/contactInfo/email")
//             .once("value");
//         const destinationEmail = emailSnapshot.val();

//         if (!destinationEmail) {
//           console.log(
//               "No destination email found in /contactInfo/email. Aborting.",
//           );
//           return null;
//         }

//         // Configure the email options (what the email will contain)
//         const mailOptions = {
//           from: `"${name}" <${gmailEmail}>`, // Display sender's name
//           replyTo: email, // So you can reply directly to the user
//           to: destinationEmail, // Your email address (info@aicyro.com)
//           subject: `New Portfolio Message from ${name}`,
//           html: `
//           <h1>New Contact Form Submission</h1>
//           <p>You have received a new message from your portfolio contact form.</p>
//           <hr>
//           <p><b>Name:</b> ${name}</p>
//           <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
//           <p><b>Message:</b></p>
//           <blockquote style="border-left: 4px solid #ccc; padding-left: 16px;">
//             ${message}
//           </blockquote>
//         `,
//         };

//         // Send the email
//         await mailTransport.sendMail(mailOptions);
//         console.log(`Successfully sent email to ${destinationEmail}`);
//         return null;
//       } catch (error) {
//         console.error("There was an error while sending the email:", error);
//         return null;
//       }
//     });

// 1. Import necessary modules
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// 2. Initialize the Firebase Admin SDK
admin.initializeApp();

// 3. Get your configured Gmail credentials
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

// 4. Configure the email transport using Nodemailer
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// 5. Define the Cloud Function
// This function will trigger every time a new document is created
// FIXED: This line has been broken up for readability
exports.sendContactEmail = functions.database
  .ref("/messages/{pushId}")
  .onCreate(async (snapshot, context) => {
    // Get the data from the form submission
    const messageData = snapshot.val();
    const name = messageData.name;
    const email = messageData.email;
    const message = messageData.message;

    try {
      // Fetch the destination email from the database
      const emailSnapshot = await admin
        .database()
        .ref("/contactInfo/email")
        .once("value");
      const destinationEmail = emailSnapshot.val();

      if (!destinationEmail) {
        console.log(
          "No destination email found in /contactInfo/email. Aborting."
        );
        return null;
      }

      // Configure the email options
      const mailOptions = {
        from: `"${name}" <${gmailEmail}>`, // Display sender's name
        replyTo: email, // So you can reply directly to the user
        to: destinationEmail, // Your email address (info@aicyro.com)
        // FIXED: This line has been broken up to be shorter
        subject: "New Portfolio Message from " + name,
        html: `
          <h1>New Contact Form Submission</h1>
          <p>You have received a new message from your portfolio contact form.</p>
          <hr>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
          <p><b>Message:</b></p>
          <blockquote style="border-left: 4px solid #ccc; padding-left: 16px;">
            ${message}
          </blockquote>
        `,
      };

      // Send the email
      await mailTransport.sendMail(mailOptions);
      console.log(`Successfully sent email to ${destinationEmail}`);
      return null;
    } catch (error) {
      console.error("There was an error while sending the email:", error);
      return null;
    }
  });
