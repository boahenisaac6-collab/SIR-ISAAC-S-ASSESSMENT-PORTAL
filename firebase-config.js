// Firebase + Cloudinary configuration for Sir Isaac's original complex portal.
// Firebase web keys are public browser keys; do not put private service-account keys here.

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyB6mVaJXyDfTU8gy9euywNIJs3yq1BzDk",
  authDomain: "my-e-classroom.firebaseapp.com",
  projectId: "my-e-classroom",
  storageBucket: "my-e-classroom.firebasestorage.app",
  messagingSenderId: "1046714148337",
  appId: "1:1046714148337:web:c7ad7f2c4d839b5e6c5050"
};

// Cloudinary handles uploaded images/PDFs because Firebase Storage requires billing.
window.CLOUDINARY_CLOUD_NAME = "dpjfvefi7";
window.CLOUDINARY_UPLOAD_PRESET = "amest_uploads";
