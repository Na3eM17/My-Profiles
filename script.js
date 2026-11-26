
document.addEventListener("DOMContentLoaded", () => {

    const showProfileButton =
        document.getElementById("showProfileBtn");

    const profileCard =
        document.querySelector(".jarvis-panel");

    const modal =
        document.getElementById("modal");


    // SHOW PROFILE AFTER BUTTON CLICK

    if (showProfileButton && profileCard) {

        showProfileButton.addEventListener("click", () => {

            profileCard.classList.add("show-profile");

            showProfileButton.classList.add("hide-button");

        });

    }


    // OPEN IMAGE MODAL

    window.openImage = function () {

        if (modal) {

            modal.classList.add("modal-open");

            modal.setAttribute("aria-hidden", "false");

        }

    };


    // CLOSE IMAGE MODAL

    window.closeImage = function () {

        if (modal) {

            modal.classList.remove("modal-open");

            modal.setAttribute("aria-hidden", "true");

        }

    };


    // CLOSE MODAL USING ESCAPE KEY

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            window.closeImage();

        }

    });

});
