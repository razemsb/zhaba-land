const tooltip = document.getElementById('tooltip');
document.querySelectorAll('.cls-3').forEach(dom => {
  dom.addEventListener('mouseover', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = rect.left + (rect.width / 2);
    const y = rect.top + (rect.height / 2);
    tooltip.style.top = `${y}px`;
    tooltip.style.left = `${x}px`;
    tooltip.style.display = 'block';
    tooltip.innerHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${e.target.dataset.name}</h5>
          <p class="card-text">${e.target.dataset.description}</p>
          <p class="card-text"><small class="text-muted">${e.target.dataset.price} BYN</small></p>
        </div>
      </div>
    `;
  });
  dom.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
});