document.addEventListener("DOMContentLoaded", function(event) { 

    function updateSize() {
        const span = document.querySelector('.size-calibration');
        const input = document.querySelector('.autosized-input')
        span.innerText = input.value;
      }
      document.addEventListener('DOMContentLoaded', () => {
        const input = document.querySelector('.autosized-input');
        input.oninput = updateSize;    
        updateSize();
      })
    
      function calculateSavings(employees) {
        const savingsPerEmployeePerYear = 9600;
        const totalSavings = employees * savingsPerEmployeePerYear;
        return totalSavings.toLocaleString();
      }
    
      function updateSavings() {
        const employees = parseInt(document.getElementById("employees").value);
    
        const totalSavings = calculateSavings(employees);
    
        document.getElementById("totalSavings").textContent = totalSavings;
        updateSize();
    
      }
    
      function incrementValue(inputId) {
        const input = document.getElementById(inputId);
        input.value = parseInt(input.value) + 1;
        updateSavings();
      }
    
      function decrementValue(inputId) {
        const input = document.getElementById(inputId);
        input.value = Math.max(0, parseInt(input.value) - 1);
        updateSavings();
      }
    
      // Call the update function on page load
      window.onload = updateSavings;
    
      document.getElementById("incrementEmployees").addEventListener("click", () => incrementValue("employees"));
      document.getElementById("decrementEmployees").addEventListener("click", () => decrementValue("employees"));
    
});
