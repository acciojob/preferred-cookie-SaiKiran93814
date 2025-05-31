//your JS code here. If required.
 function getCookie(name) {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

    // Apply preferences from cookies if available
    window.addEventListener("DOMContentLoaded", () => {
      const savedFontSize = getCookie("fontsize");
      const savedFontColor = getCookie("fontcolor");

      if (savedFontSize) {
        document.documentElement.style.setProperty("--fontsize", `${savedFontSize}px`);
        document.getElementById("fontsize").value = savedFontSize;
      }

      if (savedFontColor) {
        document.documentElement.style.setProperty("--fontcolor", savedFontColor);
        document.getElementById("fontcolor").value = savedFontColor;
      }
    });

    // Save preferences to cookies on form submit
    document.getElementById("preferencesForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const fontSize = document.getElementById("fontsize").value;
      const fontColor = document.getElementById("fontcolor").value;

      // Save cookies
      document.cookie = `fontsize=${fontSize}; path=/; max-age=31536000`; // 1 year
      document.cookie = `fontcolor=${fontColor}; path=/; max-age=31536000`;

      // Apply changes immediately
      document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
      document.documentElement.style.setProperty("--fontcolor", fontColor);
    });