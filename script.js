console.log('\nSite developed by: \n-------------------------\nKareem Elsabrouty\nSandeep Rahal \nkareemsab278@gmail.com');

document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('section, h1, h2, h3, p, .service-item, .testimonial-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 1s ease, transform 1s ease';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else {
        entry.target.style.transition = 'opacity 1s ease, transform 1s ease';
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
      }
    });
  }, { threshold: 0.1 });

  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    observer.observe(element);
  });
});

class BeforeAfter {
    constructor(enteryObject) {
        const beforeAfterContainer = document.querySelector(enteryObject.id);
        const before = beforeAfterContainer.querySelector('.bal-before');
        const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
        const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
        const handle = beforeAfterContainer.querySelector('.bal-handle');
        let widthChange = 0;

        beforeAfterContainer.querySelector('.bal-before-inset').style.width = beforeAfterContainer.offsetWidth + 'px';
        window.onresize = function () {
            beforeAfterContainer.querySelector('.bal-before-inset').style.width = beforeAfterContainer.offsetWidth + 'px';
        };
        before.style.width = '50%';
        handle.style.left = '50%';

        beforeAfterContainer.addEventListener("touchstart", () => {
            beforeAfterContainer.addEventListener("touchmove", (e2) => {
                let containerWidth = beforeAfterContainer.offsetWidth;
                let currentPoint = e2.changedTouches[0].clientX;
                let startOfDiv = beforeAfterContainer.offsetLeft;
                let modifiedCurrentPoint = currentPoint - startOfDiv;

                if (modifiedCurrentPoint > 10 && modifiedCurrentPoint < containerWidth - 10) {
                    let newWidth = (modifiedCurrentPoint / containerWidth) * 100;
                    before.style.width = newWidth + "%";
                    afterText.style.zIndex = "1";
                    handle.style.left = newWidth + "%";
                }
            });
        });

        beforeAfterContainer.addEventListener('mousemove', (e) => {
            let containerWidth = beforeAfterContainer.offsetWidth;
            widthChange = e.offsetX;
            let newWidth = (widthChange / containerWidth) * 100;

            if (e.offsetX > 10 && e.offsetX < containerWidth - 10) {
                before.style.width = newWidth + "%";
                afterText.style.zIndex = "1";
                handle.style.left = newWidth + "%";
            }
        });
    }
}

function showPopup() {
    const popupCard = document.getElementById('popupCard');
    if (popupCard) {
        popupCard.style.display = 'block';
        popupCard.style.animation = 'slide-in 0.9s ease forwards';
    } else {
        console.error("Popup card element not found.");
    }
}

function destroyPopUp() {
    const popupCard = document.getElementById('popupCard');
    if (popupCard) {
        popupCard.style.animation = 'slide-out 0.9s ease forwards';
        setTimeout(() => {
            popupCard.style.display = 'none';
        }, 0);
    } else {
        console.error("Popup card element not found.");
    }
}

function sendMail() {
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
    };

    emailjs.send("service_e5lds3m", "template_jog3obz", parms)//l or i???
        .then(() => alert("Thank you for your request!"))
        .catch((error) => console.error("Failed to send email:", error));
}

// (function () {
//     emailjs.init("vRKQs0TU6X5RKgpNx");
// })();
