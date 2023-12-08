document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("hotelName").dataset.value = "Hotel Serenity Palace";
    document.getElementById("hotelAddress").dataset.value = "Canggu, Denpasar";
    document.getElementById("guideName").dataset.value = "John Doe";
    document.getElementById("guidePrice").dataset.value = "$200";
    document.getElementById("vehicleName").dataset.value = "AVP CAR";
    document.getElementById("policeNumber").dataset.value = "ABC123456";
    document.getElementById("destinationPrice").dataset.value = "$510.00 USD";

    // Populasikan nilai dari atribut data ke dalam elemen input
    document.getElementById("hotelName").value = document.getElementById("hotelName").dataset.value;
    document.getElementById("hotelAddress").value = document.getElementById("hotelAddress").dataset.value;
    document.getElementById("guideName").value = document.getElementById("guideName").dataset.value;
    document.getElementById("guidePrice").value = document.getElementById("guidePrice").dataset.value;
    document.getElementById("vehicleName").value = document.getElementById("vehicleName").dataset.value;
    document.getElementById("policeNumber").value = document.getElementById("policeNumber").dataset.value;
    document.getElementById("destinationPrice").value = document.getElementById("destinationPrice").dataset.value;

    window.printInvoice = function () {
        var fullName = document.querySelector('input[name="fullName"]').value;
        var emailAddress = document.querySelector('input[name="emailAddress"]').value;
        var phoneNumber = document.querySelector('input[name="phoneNumber"]').value;

        var hotelName = document.getElementById("hotelName").value;
        var hotelAddress = document.getElementById("hotelAddress").value;
        var guideName = document.getElementById("guideName").value;
        var guidePrice = document.getElementById("guidePrice").value;
        var vehicleName = document.getElementById("vehicleName").value;
        var policeNumber = document.getElementById("policeNumber").value;
        var destinationPrice = document.getElementById("destinationPrice").value;

        var invoiceText = `
        Invoice
        Full Name: ${fullName}
        Email Address: ${emailAddress}
        Phone Number: ${phoneNumber}
        
        Booking Details
        Hotel Name: ${hotelName}
        Hotel Address: ${hotelAddress}
        Guide Name: ${guideName}
        Guide Price: ${guidePrice}
        Vehicle Name: ${vehicleName}
        Police Number: ${policeNumber}
        
        
        Destination Price: ${destinationPrice}
        `;

       // Encode data untuk URL
    var encodedInvoiceText = encodeURIComponent(invoiceText);

    // Arahkan pengguna ke halaman invoicee.html dengan menggunakan URL parameter
    window.location.href = "invoice?invoiceText=" + encodedInvoiceText;
    }

    

});

// INVOICE

  // Ambil parameter dari URL
  var urlParams = new URLSearchParams(window.location.search);
  var invoiceText = urlParams.get("invoiceText");

  // Tampilkan data di halaman
  if (invoiceText) {
      // Decode data dari URL
      var decodedInvoiceText = decodeURIComponent(invoiceText);
      document.getElementById("invoiceContent").innerHTML = decodedInvoiceText;
  } else {
      console.error("Data invoice tidak ditemukan");
  }

