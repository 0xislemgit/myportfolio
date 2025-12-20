function send() {
    let params = {
        name: document.querySelector(".n").value,
        email: document.querySelector(".email").value,
        message: document.querySelector(".msg").value
    }
    emailjs.send("service_sh4d9ta", "template_qdrynfs", params).then(alert("Message sent!"));
}
