<section id="nav-area">
    <nav class="navbar-container">
        <div class="navbar-container-left">
            <div class="navbar-logo">
                <img id="navbar-logo-img" src="{{ asset('images/IHCC-CSDC.png') }}" alt="IHCC CSDC LOGO">
            </div>
            <span>IHCC CSDC</span>
        </div>
        <div class="navbar-container-right">
            <button id="navbar-menu-btn" onclick="subNavExtend()">
                <image src="{{ asset('icons/hamburger.svg') }}"></image>
            </button>
        </div>
    </nav>

    <!--This div is hidden under normal circumstances, until button is pressed-->
    <div id="sub-nav-menu">
        <button id="close-sub-nav-menu" onclick="subNavClose()">
            <image src="{{ asset('icons/cross.svg') }}"></image>
        </button>
        <ol>
            <li><a href="#">Announcements</a></li>
            <li><a href="#">Meeting Sign-In</a></li>
            <li><a href="#">ByteJam 2024</a></li>
            <li><a href="#">Sign Up</a></li>
        </ol>
    </div>
</section>

<script>
    let delayInMilliseconds = 20; // 1 second delay
    let subNavBar = document.getElementById('sub-nav-menu');
    let navArea = document.getElementById('nav-area');
    let navContainer = document.getElementsByClassName('navbar-container');

    function subNavExtend() {
        subNavBar.style.display = "block";

        setTimeout(function() {
            subNavBar.style.opacity = "100";
        }, delayInMilliseconds);
    }

    function subNavClose() {
        subNavBar.style.opacity = "0";
        setTimeout(function() {
            subNavBar.style.display = "none";
        }, 200); //half a second of delay
    }

    //scroll listener for navbar blur
    // Function to change the element's style when not at the top
    function handleScroll() {
        if (window.scrollY > 30) {
            navArea.style.background = 'rgba(210, 210, 210, .5)';
            navArea.style.backgroundFilter = 'blur(10px)';
        } else {
            navArea.style.background = 'rgba(210, 210, 210, .0)';
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Call the function once to set initial state
    handleScroll();
</script>
