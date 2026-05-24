const form = document.getElementById("riskForm");
const predictionText = document.getElementById("predictionText");
const probabilityText = document.getElementById("probabilityText");

const API_URL = "https://heart-disease-fastapi-bef9.onrender.com/predict";

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = {
        age: parseInt(document.getElementById("age").value),
        sex: parseInt(document.getElementById("sex").value),
        cp: parseInt(document.getElementById("cp").value),
        trestbps: parseInt(document.getElementById("trestbps").value),
        chol: parseInt(document.getElementById("chol").value),
        fbs: parseInt(document.getElementById("fbs").value),
        restecg: parseInt(document.getElementById("restecg").value),
        thalach: parseInt(document.getElementById("thalach").value),
        exang: parseInt(document.getElementById("exang").value),
        oldpeak: parseFloat(document.getElementById("oldpeak").value),
        slope: parseInt(document.getElementById("slope").value),
        ca: parseFloat(document.getElementById("ca").value),
        thal: parseFloat(document.getElementById("thal").value)
    };

    try {
        predictionText.textContent = "Analyzing...";
        probabilityText.textContent = "";

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        predictionText.textContent = result.prediction;
        probabilityText.textContent = `Risk Score: ${result.probability}%`;

    } catch (error) {
        predictionText.textContent = "Something went wrong.";
        probabilityText.textContent = "Please try again.";
        console.error(error);
    }
});