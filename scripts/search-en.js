(function () {
  const cityInput = document.getElementById("city-search");
  const searchBtn = document.getElementById("search-btn");

  function doSearch() {
    if (!cityInput) return;

    const raw = cityInput.value || "";
    const key = raw.trim().toLowerCase();

    if (!key) {
      cityInput.focus();
      return;
    }

    if (key === "milan" || key === "milano") {
      window.location.href = "listings-it.html";
    } else {
      window.location.href = "not-available-en.html";
    }
  }

  searchBtn?.addEventListener("click", doSearch);
  cityInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") doSearch();
  });
})();
