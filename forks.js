document.addEventListener("DOMContentLoaded", function(event) {

    function updateSize(event) {
      if(event) {
        const input = event.target; // Get the input field that triggered the event
        if (input.classList.contains('autosized-input')) {
          console.log(input);
          const span = input.parentElement.querySelector('.size-calibration');
          span.innerText = input.value;
        }    
      }
    }

    const inputDiabetes = document.querySelector('.diabetesCalculator .autosized-input');

    inputDiabetes.oninput = function() {
      updateSavings();
    };

    const inputTrees = document.querySelector('.c02andTreesCalculator .autosized-input');
    inputTrees.oninput = function() {
      updateCO2eAndTrees();
    }

    updateSize();  
  
    function calculateSavings(employees) {
      const savingsPerEmployeePerYear = 9600;
      const totalSavings = employees * savingsPerEmployeePerYear;
      return totalSavings.toLocaleString();
    }
  
    function updateSavings() {
      const employees = parseInt(document.getElementById("diabetesEmployees").value);
      const totalSavings = calculateSavings(employees);
      document.getElementById("diabetesTotalSavings").textContent = '\u00A0$' + totalSavings + '.';
      updateSize();  
    }

    updateSavings();
  
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
  
    document.getElementById("incrementEmployees").addEventListener("click", () => incrementValue("diabetesEmployees"));
    document.getElementById("decrementEmployees").addEventListener("click", () => decrementValue("diabetesEmployees"));

    // CO2e and Trees
    function calculateCO2eAndTrees(employees, daysPerWeek) {
      // Calculate total CO2e saved annually
      const totalCO2eSaved = Math.round(employees * daysPerWeek * 343.2);
    
      // Calculate equivalent trees planted (assuming 47.5 lbs CO2e per tree)
      const treesPlanted = Math.round(totalCO2eSaved / 47.5);

      return {
        totalCO2eSaved,
        treesPlanted
      };
    }

    function updateCO2eAndTrees() {
      const employees = parseInt(document.getElementById("treesEmployees").value);
      const daysPerWeek = parseInt(document.getElementById("daysPerWeek").value);

      const result = calculateCO2eAndTrees(employees, daysPerWeek);

      document.getElementById("totalCO2eSaved").textContent = result.totalCO2eSaved.toLocaleString() + ' lbs';
      document.getElementById("treesPlanted").textContent = result.treesPlanted.toLocaleString();
    }

    function incrementTreesValue(inputId) {
      const input = document.getElementById(inputId);
      input.value = parseInt(input.value) + 1;
      updateCO2eAndTrees();
    }

    function decrementTreesValue(inputId) {
      const input = document.getElementById(inputId);
      input.value = Math.max(0, parseInt(input.value) - 1);
      updateCO2eAndTrees();
    }

    updateCO2eAndTrees();

    document.getElementById("incrementTreesEmployees").addEventListener("click", () => incrementTreesValue("treesEmployees"));
    document.getElementById("decrementTreesEmployees").addEventListener("click", () => decrementTreesValue("treesEmployees"));
    document.getElementById("incrementDays").addEventListener("click", () => incrementTreesValue("daysPerWeek"));
    document.getElementById("decrementDays").addEventListener("click", () => decrementTreesValue("daysPerWeek"));

    document.getElementById("treesEmployees").addEventListener("input", updateCO2eAndTrees);
    document.getElementById("daysPerWeek").addEventListener("input", updateCO2eAndTrees);

    const containers = document.querySelectorAll('.forksInteractionContainer');

    for (const container of containers) {
      container.addEventListener('input', updateSize);
    }

  });