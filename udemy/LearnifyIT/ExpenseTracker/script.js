let transactions = [];

function addTransaction() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (description === "" || isNaN(amount)) {
        alert("Please fill in all fields correctly");
        return;
    }

    const transaction = {description, amount, type, date: new Date()};
    transactions.push(transaction);

    updateUi();
    updateCharts();
}

function updateUi() {
    const transactionList = document.getElementById("transaction-list");
    const balance = document.getElementById("balance");

    transactionList.innerHTML = "";
    let totalBalance = 0;

    transactions.forEach((txn, index) => {
        const li = document.createElement("li");
        const transactionDate = new Date(txn.date).toLocaleDateString("id-ID");
        li.innerHTML = `${txn.description} - $${txn.amount} - ${transactionDate} <button onclick="removeTransaction(${index})">x</button>`;

        if (txn.type === "income") {
            totalBalance += txn.amount;
            li.style.color = "green";
        } else {
            totalBalance -= txn.amount;
            li.style.color = "red";
        }

        transactionList.appendChild(li);
    });

    balance.textContent = totalBalance.toFixed(2);
}

function removeTransaction(index) {
    transactions.splice(index, 1);
    updateUi();
    updateCharts();
}

const ctx = document.getElementById("expenseChart").getContext("2d");
let chart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Income", "Expense"],
        datasets: [{
            label: "Financial Overview",
            data: [0, 0],
            backgroundColor: ["green", "red"]
        }]
    },
});

function updateCharts() {
    let income = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
    let expense = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
    chart.data.datasets[0].data = [income, expense];
    chart.update();
}


