document.getElementById('addGoalBtn').addEventListener('click', function() {
    document.getElementById('goalForm').style.display = 'block';
  });
  
  document.getElementById('cancelGoalBtn').addEventListener('click', function() {
    document.getElementById('goalForm').style.display = 'none';
  });
  
  document.getElementById('saveGoalBtn').addEventListener('click', function() {
    const goalInput = document.getElementById('goalInput').value;
    if (goalInput.trim()) {
      const goalItem = document.createElement('div');
      goalItem.classList.add('goal-item');
      goalItem.textContent = goalInput;
  
      const goalList = document.getElementById('goalList');
      goalList.appendChild(goalItem);
  
      // Clear input and hide form
      document.getElementById('goalInput').value = '';
      document.getElementById('goalForm').style.display = 'none';
    }
  });
  