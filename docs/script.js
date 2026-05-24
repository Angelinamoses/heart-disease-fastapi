const form = document.getElementById("riskForm");
const predictionText = document.getElementById("predictionText");
const probabilityText = document.getElementById("probabilityText");
const resultCard = document.getElementById("resultCard");
const submitBtn = document.getElementById("submitBtn");

const API_URL = "https://heart-disease-fastapi-fycb.onrender.com/predict";

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

    predictionText.textContent = "Analyzing patient data...";
    probabilityText.textContent = "";

    resultCard.classList.remove("show", "high-risk", "low-risk");

    submitBtn.textContent = "Analyzing...";
    submitBtn.disabled = true;

    try {
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

        if (result.prediction.includes("Detected")) {
            resultCard.classList.add("high-risk");
        } else {
            resultCard.classList.add("low-risk");
        }

        setTimeout(() => {
            resultCard.classList.add("show");
        }, 100);

    } catch (error) {
        predictionText.textContent = "Something went wrong.";
        probabilityText.textContent = "Please try again.";

        resultCard.classList.add("show");

        console.error(error);
    } finally {
        submitBtn.textContent = "Assess Risk";
        submitBtn.disabled = false;
    }
});