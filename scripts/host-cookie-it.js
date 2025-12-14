(function () {
  const COOKIE_NAME = "hostNameIT";
  const ONE_YEAR_SEC = 365 * 24 * 60 * 60;

  const form = document.getElementById("host-form");
  const successBox = document.getElementById("success-box");
  const successName = document.getElementById("success-name");
  const btnAgain = document.getElementById("host-again");

  function readCookie(name) {
    const c = document.cookie.split("; ").find((r) => r.startsWith(name + "="));
    return c ? decodeURIComponent(c.split("=")[1]) : null;
  }
  function setCookie(name, value) {
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      "; path=/; max-age=" +
      ONE_YEAR_SEC;
  }
  function eraseCookie(name) {
    document.cookie = name + "=; path=/; max-age=0";
  }

  function showSuccess(name) {
    form?.classList.add("d-none");
    successBox?.classList.remove("d-none");
    if (successName) successName.textContent = name || "";
  }

  function showForm(resetFields) {
    successBox?.classList.add("d-none");
    form?.classList.remove("d-none");
    if (resetFields) form?.reset();
  }

  const saved = readCookie(COOKIE_NAME);
  if (saved) showSuccess(saved);

  form?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = (document.getElementById("input-name")?.value || "").trim();
    setCookie(COOKIE_NAME, name);
    showSuccess(name);
  });

  btnAgain?.addEventListener("click", function () {
    eraseCookie(COOKIE_NAME);
    showForm(true);
  });
})();

