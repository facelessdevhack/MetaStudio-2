<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Form</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        .contactFrame {
  border-width: 0px;
    overflow: hidden;
    width: 30vw;
    float: right;
    height: 70vh;
    position: relative;
    top: 24vh;
    right: 7vw;
}
.contactFrameMob {
  border-width: 0px;
    width: 100vw;
    top: 20vh;
    position: relative;
    height: 53vh;
}
    body {
        background: none;
    }
    @font-face {
    font-family: 'rajdhani';
    src: url('../fonts/rajdhani-Bold.woff2') format('woff2'),
        url('../fonts/rajdhani-Bold.woff') format('woff'),
        url('../fonts/rajdhani-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'rajdhani';
    src: url('../fonts/rajdhani-SemiBold.woff2') format('woff2'),
        url('../fonts/rajdhani-SemiBold.woff') format('woff'),
        url('../fonts/rajdhani-SemiBold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  h2 {
    display: inline-block;
    font-family: "rajdhani", "Helvetica Neue", Helvetica, sans-serif;
    font-weight: normal;
    font-style: normal;
    color: #ffffff;
    font-size: 58px;
    line-height: 50px;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 1300px) {
    h2 {
      font-size: 48px;
      line-height: 40px;
    }
  }
  @media screen and (min-width: 580px) and (max-width: 800px) {
    h2 {
      font-size: 48px;
      line-height: 40px;
    }
  }
/* Contact Form Start  */
.form-frame {
    border-width: 0 !important;
    height: 100vh;
  }
  .contact-form {
    position: absolute;
    left: auto;
    right: 20%;
    top: 24vh;
  }
  @media screen and (max-width: 1366px) {
    .contact-form {
      position: absolute;
      left: auto;
      right: 10%;
      top: 20vh;
    }
  }
  .form-control {
      margin-top: 3vh;
    background: none;
    border: 1px solid #fff;
    height: 53px;
    border-radius: 4px;
    padding: 12px 20px;
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .form-control:focus {
    color: #fff;
    background: none;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
  @media screen and (max-width: 1366px) {
    .form-control {
      background: none;
      border: 1px solid #fff;
      height: 53px;
      border-radius: 4px;
      padding: 12px 20px;
      color: #fff;
      font-size: 18px;
      letter-spacing: 2px;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
  }
  .segment {
    margin-bottom: 5%;
  }
  .name {
    width: 100%;
    margin-bottom: 5%;
  }
  .second-line {
    display: flex;
    margin-bottom: 5%;
  }

  .how-find {
    width: 100%;
    margin-left: 23%;
  }
  .text-area {
    width: 100%;
    height: auto !important;
  }
  .describe-check {
    padding-top: 25px;
    display: flex;
  }
  .describe-check label {
    margin-right: 20px;
    font-weight: normal;
    font-size: 15px;
    display: inline-block;
    position: relative;
  }
  .describe-check label input {
    margin-left: 10px;
    opacity: 1;
    background-color: black;
    position: relative;
    z-index: 3;
  }
  .checkboxs {
    width: 66.66666666666666%;
    padding-top: 14px;
  }
  .btn-contact {
    width: 33.333333%;
  }
  .ms-contact .btn-ms {
    display: block;
    background: #a4d1ec;
    font-size: 25px;
    color: #3f3c3c;
    border-radius: 10px;
    height: 57px;
    border: 0;
    width: 100%;
    padding: 0.5em 2em 0.5em 2em;
    letter-spacing: 5px;
    font-family: "sf_compact_displayregular", Arial, Helvetica, sans-serif;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  input[type="radio"],
  input[type="checkbox"] {
    margin: 4px 0 0;
    margin-top: 1px \9;
    line-height: normal;
  }
  
  .input-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .input-group label {
    margin: 0;
    flex: 1;
  }
  
  .tag-line {
    display: block;
    font-size: 14px;
    letter-spacing: 7px;
    font-weight: normal;
    margin-bottom: 75px;
    font-family: "sf_compact_displaythin", Arial, Helvetica, sans-serif;
  }
  .ms-contact {
    width: 595px;
  }
  form {
    display: block;
    margin-top: 0em;
  }
  .ms-contact .form-group {
    margin-bottom: 26px;
  }
  .form-horizontal .form-group {
    margin-right: -15px;
    margin-left: -15px;
  }
  .form-group {
    margin-bottom: 15px;
    width: 110%;
  }
  .col-sm-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 768px) {
    .col-sm-12 {
      width: 100%;
    }
  }
  
  /* Contact Form End  */

  .contact-left-head {
    position: absolute;
    top: 24vh;
    left: 9.9%;
  }
  @media screen and (max-width: 1366px) {
    .contact-left-head {
      position: absolute;
      top: 20vh;
      left: 9.9%;
    }
  }
  .contact-p {
    position: absolute;
    left: 10%;
    top: 31.5vh;
  }
  @media screen and (max-width: 1366px) {
    .contact-p {
      position: absolute;
      left: 10%;
      top: 34.5vh;
    }
  }
  .contact-des {
    position: absolute;
    left: 10%;
    top: 34vh;
    text-transform: none !important;
  }
  @media screen and (max-width: 1366px) {
    .contact-des {
      position: absolute;
      left: 10%;
      top: 38vh;
      text-transform: none !important;
    }
  }
  .contact-us-left-head {
    position: absolute;
    top: 64vh;
    left: 10%;
  }
  @media screen and (max-width: 1366px) {
    .contact-us-left-head {
      position: absolute;
      top: 64vh;
      left: 10%;
    }
  }
  .contact-us-des {
    position: absolute;
    top: 66vh;
    left: 10%;
  }
  @media screen and (max-width: 1366px) {
    .contact-us-des {
      position: absolute;
      top: 69vh;
      left: 10%;
    }
  }
  .mht-position {
    position: absolute;
    top: 15vh;
    right: 20%;
    left: 65%;
  }
  @media screen and (max-width: 1366px) {
    .mht-position {
      position: absolute;
      top: 18vh;
      right: 20%;
      left: 65%;
    }
  }
  .contact-header-title {
    position: absolute;
    left: 65%;
    max-width: 35%;
    top: 21vh;
    color: #fff;
  }</style>
    <style type="text/css">
        input, textarea {
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="row justify-content-start">
            <div class="col-md-6 col-md-offset-3">
<h2>Contact Us_</h2><br><br>
                <input id="name" placeholder="Name" class="form-control">
                <input id="email" placeholder="Email" class="form-control">
                <input id="subject" placeholder="How You Found Us?" class="form-control">
                <textarea class="form-control" id="body" placeholder="Email Address"></textarea>
                <input type="button" onclick="sendEmail()" value="Send" class="btn btn-primary" style="margin-top: 3vh;">
            </div>
        </div>
    </div>

    <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script type="text/javascript">
        function sendEmail() {
            var name = $("#name");
            var email = $("#email");
            var subject = $("#subject");
            var body = $("#body");

            if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(body)) {
                $.ajax({
                   url: 'sendEmail.php',
                   method: 'POST',
                   dataType: 'json',
                   data: {
                       name: name.val(),
                       email: email.val(),
                       subject: subject.val(),
                       body: body.val()
                   }, success: function (response) {
                        if (response.status == "success")
                            alert('Email Has Been Sent!');
                        else {
                            alert('Please Try Again!');
                            console.log(response);
                        }
                   }
                });
            }
        }

        function isNotEmpty(caller) {
            if (caller.val() == "") {
                caller.css('border', '1px solid red');
                return false;
            } else
                caller.css('border', '');

            return true;
        }
    </script>









</body>
</html>