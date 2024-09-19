<!DOCTYPE html>
<html>

<head>
    <title>SocialBook login and signup</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<style>
body {
    overflow-x: hidden;
}

#centered1 {
    position: absolute;
    font-size: 10vw;
    top: 35%;
    left: 23%;
    transform: translate(-50%, 440%);
}

#centered2 {
    position: absolute;
    font-size: 10vw;
    top: 28%;
    left: 34%;
    transform: translate(-50%, 560%);
}

#centered3 {
    position: absolute;
    font-size: 10vw;
    top: 28%;
    left: 23%;
    transform: translate(-50%, 645%);
}

#signup {
    width: 20%;
    border-radius: 30px;
    background: #b2bec3;
	margin-top: 25px;
}

#signup:hover {
    background: #2d3436;
    color: #dfe6e9;
}

#login {
    width: 20%;
    background-color: #fff;
    border: 1px solid #2d3436;
    color: #000;
    border-radius: 30px;
	margin-top: 20px;
	margin-left: 15px;
}

#login:hover {
    width: 20%;
    background-color: #fff;
    color: #000;
    border: 2px solid #2d3436;
    border-radius: 30px;
}

.well {
    background-color: #2c3e50;
}

.join{
	margin-top: -25px;
}

.horizontal{
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

<body>
    <div class="row">
        <div class="col-sm-12">
            <div class="well">
                <center>
                    <h1 style="color: white;">SocialBook</h1>
                </center>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6" style="left:0.5%;">
            <img src="images/cover.jpeg" class="img-rounded" title="SocialBook" width="650px" height="565px">
        </div>
        <div class="col-sm-6" style="left:8%:">
            <img src="images/logo.png" class="img-rounded" title="SocialBook" width="80px" height="80px">
            <h2><strong>See what's happening in <br> the world right now</strong></h2><br><br>
            <h4 class="join"><strong>Join SocialBook Today.</strong></h4>
            <form method="post" action="" class="horizontal">
                <button id="signup" class="btn btn-lg" name="signup">Sign up</button><br><br>
                <?php
					if(isset($_POST['signup'])){
						echo "<script>window.open('signup.php','_self')</script>";
					}
				?>
                <button id="login" class="btn btn-info btn-lg" name="login">Login</button><br><br>
                <?php
					if(isset($_POST['login'])){
						echo "<script>window.open('signin.php','_self')</script>";
					}
				?>
            </form>
            <div id="centered1" class="centered">
                <h3 style="color:#40739e"><span class="glyphicon glyphicon-search"></span>&nbsp&nbsp<strong>Follow Your
                        Interests.</strong></h3>
            </div>
            <div id="centered2" class="centered">
                <h3 style="color:#40739e;"><span class="glyphicon glyphicon-search"></span>&nbsp&nbsp<strong>Hear what
                        People are talking about.</strong></h3>
            </div>
            <div id="centered3" class="centered">
                <h3 style="color:#40739e;"><span class="glyphicon glyphicon-search"></span>&nbsp&nbsp<strong>Join the
                        Conversation.</strong></h3>
            </div>

        </div>
    </div>
</body>

</html>