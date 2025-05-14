// ShowNotification("Header", "Opis!");

    const NotificationElements = {
        header: document.getElementById("notification_header"),
        content: document.getElementById("notification_content"),
        body: document.getElementById("notifications")
    };

    let statusDefaultHeader = "Domyślny Header";
    let statusDefaultText = "Domyślny opis";

    let status = 0;

    function CheckStatus() {
        if (status !== 1) {
            ShowNotification(statusDefaultHeader, statusDefaultText);
        }

        return status;
    }

    function ShowNotification(header, text) {
        status = 1;

        NotificationElements.header.innerText = header;
        NotificationElements.content.innerText = text;
        NotificationElements.body.classList.add("show");

        console.log("status: " + status);

        setTimeout(() => {
            NotificationElements.body.classList.add("close");
            status = 0;
            console.log("status: " + status);
        }, 3500);
    }

// Test powiadomienia
    $(document).ready(function () {
        ShowNotification("Essa", "Operacja zakończona sukcesem!");
    });
