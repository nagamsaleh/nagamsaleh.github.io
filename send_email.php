<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    
    // Set up email parameters
    $to = "treeland@live.ca"; // Change this to your desired email address
    $subject = "New Estimate Request";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your request. We will contact you shortly.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
