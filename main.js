// function getMessage(){

//     let name =
//     document.getElementById("name").value;

//     let phone =
//     document.getElementById("phone").value;

//     let product =
//     document.getElementById("product").value;

//     let quantity =
//     document.getElementById("quantity").value;

//     let location =
//     document.getElementById("location").value;

//     let notes =
//     document.getElementById("notes").value;

//     return `New Inquiry

// Name: ${name}

// Phone: ${phone}

// Material: ${product}

// Quantity: ${quantity}

// Location: ${location}

// Notes: ${notes}`;
// }
// function sendSales(){

//     let message = getMessage();

//     let number =
//     "+971564215314";

//     let url =
//     `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

//     window.open(url,"_blank");
// }
// function sendDelivery(){

//     let message = getMessage();

//     let number =
//     "+971555825193";

//     let url =
//     `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

//     window.open(url,"_blank");
// }
// const toggle = document.getElementById("theme-toggle");

// toggle.onclick = function () {

//     document.body.classList.toggle("dark-mode");

//     if(document.body.classList.contains("dark-mode")){
//         toggle.innerHTML = "☀️";
//     }else{
//         toggle.innerHTML = "🌙";
//     }

// };
// const counters = document.querySelectorAll(".counter");

// const observer = new IntersectionObserver((entries) => {

//     entries.forEach(entry => {

//         if (entry.isIntersecting) {

//             counters.forEach(counter => {

//                 const target = +counter.dataset.target;
//                 let current = 0;

//                 const increment = target / 100;

//                 function updateCounter() {

//                     if (current < target) {

//                         current += increment;

//                         counter.innerText = Math.ceil(current);

//                         requestAnimationFrame(updateCounter);

//                     } else {

//                         counter.innerText = target;

//                     }

//                 }

//                 updateCounter();

//             });

//             observer.disconnect();

//         }

//     });

// }, {
//     threshold: 0.4
// });

// observer.observe(document.querySelector(".stats"));


// =========================
// WhatsApp Numbers
// =========================

const SALES_NUMBER = "971564215314";
const DELIVERY_NUMBER = "971555825193";

// =========================
// Get Form Data
// =========================

function getMessage() {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("product").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const location = document.getElementById("location").value.trim();
    const notes = document.getElementById("notes").value.trim();

    if (!name || !phone || !product) {
        alert("Please fill Name, Phone Number and Material Required.");
        return null;
    }

    return `🏗️ New Inquiry

👤 Name: ${name}

📞 Phone: ${phone}

📦 Material: ${product}

📊 Quantity: ${quantity}

📍 Location: ${location}

📝 Notes: ${notes}`;
}

// =========================
// Open WhatsApp
// =========================

function sendWhatsApp(number) {

    const message = getMessage();

    if (!message) return;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}

function sendSales() {
    sendWhatsApp(SALES_NUMBER);
}

function sendDelivery() {
    sendWhatsApp(DELIVERY_NUMBER);
}

// =========================
// Dark Mode
// =========================

const toggle = document.getElementById("theme-toggle");

if (toggle) {

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        toggle.innerHTML =
            document.body.classList.contains("dark-mode")
                ? "☀️"
                : "🌙";

    });

}

// =========================
// Counter Animation
// =========================

const statsSection = document.querySelector(".stats");

if (statsSection) {

    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver((entries, observer) => {

        if (entries[0].isIntersecting) {

            counters.forEach(counter => {

                const target = Number(counter.dataset.target);

                let current = 0;

                const increment = Math.max(1, Math.ceil(target / 100));

               function updateCounter() {

    current += increment;

    if (current >= target) {

        counter.textContent = target;

    } else {

        counter.textContent = current;

        setTimeout(updateCounter, 20);

    }

}

                updateCounter();

            });

            observer.disconnect();

        }

    }, {
        threshold: 0.4
    });

    observer.observe(statsSection);

}