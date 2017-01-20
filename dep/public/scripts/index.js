function documentReady(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

function onReady() {

  // Setup containers
  const headerContainer = newDomElem('div', 'headerContainer', 'bodySegment');
  const mainContainer = newDomElem('div', 'mainContainer', 'bodySegment');
  const footerContainer = newDomElem('div', 'footerContainer', 'bodySegment');

  // Populate containers
  // Populate headerContain
  const mainTitleContainer = newDomElem('div', 'mainTitleContainer');
  const menuContainer = newDomElem('div', 'menuContainer');

  headerContainer.appendChild(mainTitleContainer);
  headerContainer.appendChild(menuContainer);

  // Handle header content
  mainTitleContainer.appendChild(newDomElem('h1', null, null, 'Patrick is a Full Stack Software Engineer.'));

  // Handle menu content
  menuContainer.appendChild(newDomElem('div', 'homeLink', 'menuLinks', "<p>app.get('<strong>/home</strong>', homeController);</p>"));
  menuContainer.appendChild(newDomElem('div', 'aboutLink', 'menuLinks', "<p>app.get('<strong>/about</strong>', aboutController);</p>"));
  menuContainer.appendChild(newDomElem('div', 'blogLink', 'menuLinks', "<p>app.get('<strong>/blog</strong>', blogController);</p>"));

  // Handle main content
  mainContainer.appendChild(newDomElem('canvas', 'myChart')); //<canvas id="myChart" width="700" height="300"></canvas>
  mainContainer.appendChild(newDomElem('p', null, null, 'Charts made with <a href="http://www.chartjs.org/"><strong>Chart.js</strong></a>')); //<canvas id="myChart" width="700" height="300"></canvas>

  // Handle footer content
  footerContainer.appendChild(newDomElem('div', 'footerContent', 'menuLinks', "<p><strong>#purejs #noframework</strong></p>"));

  // Append containers to DOM
  const pageHook = document.getElementById('content');
  pageHook.appendChild(headerContainer);
  pageHook.appendChild(mainContainer);
  pageHook.appendChild(footerContainer);

  // LOAD CHART TEST
  var ctx = document.getElementById("myChart");
  var data = {
    labels: ["Honest", "Hard Working", "Patient", "Kind", "Attractive ;)"],
    datasets: [{
      label: "Character",
      backgroundColor: [
        // 'lightcoral',
        // 'lightblue',
        // '#ECE5B6', //'lightyellow',
        // 'lightgreen',
        // '#C38EC7',
        // 'rgba(255, 159, 64, 0.2)'
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      data: [5, 5, 4, 5, 5]
    }]
  };
  var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      title: {
        display: true,
        text: 'Character',
        position: 'top',
        fontSize: 16
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
            max: 5,
            min: 1,
            fixedStepSize: 1,
            callback: function (value, index, values) {
              const map = {
                1: 'Needs Work',
                2: 'Some exposure',
                3: 'I can figure it out',
                4: "Easy",
                5: 'Expert',
              }
              return map[value];
            }
          },
          display: true
        }]
      },
      responsive: false,

      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

      maintainAspectRatio: true,
      legend: {
        display: false
      }
    }
  });
}

// Custom DOM element creator
function newDomElem(type, id, classes, content) {
  const newElem = document.createElement(type);
  if (id) {
    newElem.setAttribute('id', id);
  }
  if (classes) {
    newElem.setAttribute('class', classes);
  }
  if (content) {
    newElem.innerHTML = content;
  }
  return newElem;
}

// Execute load
documentReady(onReady);