<?php   
if (mail('knophayieko@gmail.com', 'Test Email', 'This is a test email.')) {
    echo 'Mail sent successfully.';
} else {
    echo 'Mail failed: ' . error_get_last()['message'];
}
?>
