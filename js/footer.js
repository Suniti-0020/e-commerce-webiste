const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = ` <section>
        <div class="col">
            <a href="#"><img class="logo" src="https://i.postimg.cc/x8ncvFjr/logo.png"></a>
            <h4>Contact</h4>
            <p><strong>Address:<strong>GJU, Hisar</p>
            <p><strong>Phone:</strong>+91 987654321</p>
            <div class="follow">
                <h4>Follow Us</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-pinterest-p"></i>
                </div>
            </div>
        </div>

        <div class="sec">
            <div class="col">
                <p style="font-size: 24px;">About</p><br>
                <a href="#">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Condition</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
        <div class="coypright">
            <p> © 2024 All rights reserved! made by Suniti</p>
        </div>
        </section>
    </>`;
}

createFooter();
