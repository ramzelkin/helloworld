export const mobileIndex = `<!doctype html>
<html>
    <head>
        <title>test</title>
    <link href="./Content/css/style-test-mobile.css" rel="stylesheet">
    <script src="./Content/jquery.min.js"></script>
    </head>
    <body>
    <nav id="mobile_menu" class=" navbar navbar-expand-lg navbar-dark fixed-top bg-secondary">
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#applications" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" >Tuuuuu</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#profile-actions" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
        <span></span>
    </button>

    <div class="navbar-collapse collapse" id="applications" style="">

        <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" >
                        <span >Absence</span>
                    </a>
                </li>

                <li class="nav-item ">
                    <a class="nav-link" >
                            <span>Test 2</span>
                    </a>
                </li>
        </ul>
    </div>

    <div class="navbar-collapse collapse" id="profile-actions" style="">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item nav-link-info">
                <a href="#" class="nav-link e">
                    <span>User</span>
                </a>
            </li>
        </ul>
    </div>
    <div>
        <button id="forMobile">just try it</button>
    </div>
</nav>
    <p>Mobile</p>
    <script>

    function showGood(){
        var targetButton = document.getElementById('forMobile');
        targetButton.addEventListener("click", function(){
             document.getElementsByTagName('body')[0].style.backgroundColor = "lightblue";
        });
    }

    showGood();
    </script>
    </body></html>`;
