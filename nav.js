"use strict";

const navbar = document.createElement("div");
navbar.setAttribute("id", "nav-background");
navbar.innerHTML = `
        <nav id="navigation">
            <div id="crest-img">
                <a href="https://lambdathetadelta.github.io/">
                    <img src="imgs/LTDCrestWhiteV1.png" alt="Crest of Lambda Theta Delta" id="crest-img">
                </a>
            </div>
            <a href="https://lambdathetadelta.github.io/" id="ltd-text">
                <span id="top-text">
                    Lambda Theta Delta
                </span><br>
                <span id="bottom-text">
                    Loyalty. Trust. Diversity.
                </span>
            </a>
            <div class="nav-button">
                <button class="nav-button">
                    <a href="https://lambdathetadelta.github.io/about.html" class="nav-button">About</a>
                </button>
                <div class="dropdown-content">
                    <a href="https://lambdathetadelta.github.io/history.html">History</a>
                    <a href="https://lambdathetadelta.github.io/philanthropy.html">Philanthropy</a>
                </div>
            </div>

            <div class="nav-button">
                <button class="nav-button">
                    <a href="https://www.ltdfraternity.com/rush" class="nav-button">Rush</a>
                </button>
                <div class="dropdown-content">
                    <a href="https://www.ltdfraternity.com/anti-hazing">Anti-Hazing</a>
                    <a href="https://www.ltdfraternity.com/program">Program</a>
                    <a href="https://www.ltdfraternity.com/interest-form">Interest Form</a>
                </div>
            </div>

            <button class="nav-button">
                <a href="https://lambdathetadelta.github.io#contact" class="nav-button">Contact</a>
            </button>

            <div id="instagram-img">
                <a href="https://www.instagram.com/lambdathetadelta" target="_blank">
                    <img src="imgs/instagram.png" alt="Instagram Logo" id="instagram-img">
                </a>
            </div>

            <label id="hamburger">
                <input type="checkbox">
            </label>
        </nav>

        <nav id="mobile-navigation">
            <div>
                <a class ="mobile-main-buttons" href="https://lambdathetadelta.github.io/about.html">About</a>
                <label class="mobile-exp">
                    <input type="checkbox">
                </label>
                <div class="mobile-sub-button-container">
                    <a class="mobile-sub-buttons" href="https://lambdathetadelta.github.io/history.html">History</a>
                    <a class="mobile-sub-buttons" href="https://lambdathetadelta.github.io/philanthropy.html">Philanthropy</a>
                </div>
            </div>
            <div>
                <button class="mobile-main-buttons">
                    <a href="https://lambdathetadelta.github.io/rush.html">Rush</a>
                </button>
                <label class="mobile-exp">
                    <input type="checkbox">
                </label>
                <div class="mobile-sub-button-container">
                    <a class="mobile-sub-buttons" href="https://lambdathetadelta.github.io/anti-hazing.html">Anti-Hazing</a>
                    <a class="mobile-sub-buttons" href="https://lambdathetadelta.github.io/program.html">Program</a>
                    <a class="mobile-sub-buttons" href="https://lambdathetadelta.github.io/interest-form.html">Interest Form</a>
                </div>
            </div>
            <div> 
                <a class="mobile-main-buttons" href="https://lambdathetadelta.github.io/index.html#contact">Contact</a>
            </div>
        </nav>

    </div>
</nav>`;

const body = document.body;
body.insertBefore(navbar, body.firstChild);
