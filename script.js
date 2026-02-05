const output = document.getElementById("output");
function createPromise(index) {
  const delay = Math.floor(Math.random() * 2000) + 1000; 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: `Promise ${index}`, time: delay / 1000 });
    }, delay);
  });
}

function runResolutionTracker() {
  const startTime = performance.now();

  // Create the 3 promises
  const p1 = createPromise(1);
  const p2 = createPromise(2);
  const p3 = createPromise(3);
  Promise.all([p1, p2, p3]).then((results) => {
    const endTime = performance.now();
    const totalTime = (endTime - startTime) / 1000;
    output.innerHTML = "";
    results.forEach((res) => {
      const row = `<tr>
                    <td>${res.name}</td>
                    <td>${res.time.toFixed(3)}</td>
                  </tr>`;
      output.insertAdjacentHTML("beforeend", row);
    });
    const totalRow = `<tr class="table-info">
                        <td><strong>Total</strong></td>
                        <td><strong>${totalTime.toFixed(3)}</strong></td>
                      </tr>`;
    output.insertAdjacentHTML("beforeend", totalRow);
  });
}
runResolutionTracker();