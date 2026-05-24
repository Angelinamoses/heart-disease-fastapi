from fastapi import FastAPI
import joblib
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

from schemas import HeartDiseaseInput


app = FastAPI(
    title="Heart Disease Prediction API",
    description="Predicts heart disease risk using a trained logistic regression model",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"]
)
title="Heart Disease Prediction API",
description="Predicts heart disease risk using a trained logistic regression model",
version="1.0.0"


model = joblib.load("heart_disease_model.pkl")

@app.get("/")
def home():
    return {"message": "Heart Disease Prediction API is running"}


@app.post("/predict")
def predict(data: HeartDiseaseInput):
    input_data = pd.DataFrame([data.model_dump()])

    prediction = model.predict(input_data)[0]
    probability = model.predict_proba(input_data)[0][1]

    result = "Heart Disease Detected" if prediction == 1 else "No Heart Disease Detected"

    return {
        "prediction": result,
        "probability": round(float(probability) * 100, 2)
    }