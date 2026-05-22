\# Heart Disease Prediction API 🫀



A machine learning API built with FastAPI that predicts heart disease risk using a trained Logistic Regression model.



\## Project Overview



This project demonstrates an end-to-end machine learning deployment workflow:



\- Data collection from UCI Machine Learning Repository

\- Data preprocessing

\- Missing value handling

\- Feature scaling

\- Logistic Regression model training

\- Model evaluation

\- Model serialization with Joblib

\- FastAPI API development

\- Interactive API documentation with Swagger UI

\- Git/GitHub version control



\---



\## Tech Stack



\- Python

\- FastAPI

\- Scikit-learn

\- Pandas

\- Joblib

\- Uvicorn

\- Jupyter Notebook



\---



\## Model Details



Dataset: UCI Heart Disease Dataset



Features used:



\- age

\- sex

\- cp

\- trestbps

\- chol

\- fbs

\- restecg

\- thalach

\- exang

\- oldpeak

\- slope

\- ca

\- thal



Target:



\- 0 = No Heart Disease

\- 1 = Heart Disease Detected



Model:



\- Logistic Regression

\- Scikit-learn Pipeline

\- Median Imputation

\- Standard Scaling



Performance:



\- Accuracy: 86%

\- Strong recall for disease detection



\---



\## Project Structure



```bash

heart\_disease\_fastapi/

│

├── main.py

├── schemas.py

├── heart\_disease\_model.pkl

├── model\_training.ipynb

├── requirements.txt

├── README.md

└── .gitignore

