/* JS Document */

jQuery(document).ready(function($) {
    initContact();

    function initContact() {
        var name = $('#form_name');
        var email = $('#form_email');
        var message = $('#form_message');
        var nameFocus = $('.name_focus');
        var emailFocus = $('.email_focus');

        /* hide placeholder text on focus and show it again on lost focus */
        name.on('focus', function() {
            name.attr("placeholder", "");
            nameFocus.css({ 'visibility': "visible", 'opacity': "1", 'transition': "all 0.5s ease" });
        });

        name.on('blur', function() {
            name.attr("placeholder", "Name");
            nameFocus.css({ 'visibility': "hidden", 'opacity': "0", 'transition': "all 0.5s ease" });
        });

        email.on('focus', function() {
            email.attr("placeholder", "");
            emailFocus.css({ 'visibility': "visible", 'opacity': "1", 'transition': "all 0.5s ease" });
        });

        email.on('blur', function() {
            email.attr("placeholder", "Email");
            emailFocus.css({ 'visibility': "hidden", 'opacity': "0", 'transition': "all 0.5s ease" });
        });

        message.on('focus', function() {
            message.attr("placeholder", "");
        });

        message.on('blur', function() {
            message.attr("placeholder", "Your Message");
        });
    }
});