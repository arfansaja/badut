function cekKuota() {
    const provider = document.getElementById("provider").value;
  
    if (!provider) {
      alert("Pilih provider dulu!");
      return;
    }
  
    if (provider === "xl") {
      window.location.href = "https://my.xl.co.id";
    } else if (provider === "axis") {
      window.location.href = "https://my.axis.co.id";
    }
  }