# Crime Prediction Web Application

## Overview

This project is a simple web application designed to predict crime probability in New York City based on user-provided information, location, and time. Leveraging the NYPD Complaint Data Historic Dataset, the application utilizes a predictive model to estimate the likelihood of different types of crimes occurring in specific scenarios. The dataset spans from 2006 to 2019, containing 6,901,167 complaints and 35 columns, providing comprehensive spatial and temporal information about crime occurrences, along with detailed descriptions and penal classifications.

## Dataset

The core of this project relies on the NYPD Complaint Data Historic Dataset, encompassing valid felony, misdemeanor, and violation crimes reported to the New York City Police Department over a span of 14 years. The dataset serves as a robust foundation, offering insights into the dynamics of crime in the city and facilitating the development of a predictive model to enhance public safety awareness.

## Setup

To run this web application locally, follow these setup instructions:

1. Create a virtual environment named 'nyc':

```bash
python -m venv nyc
```

2. Activate the virtual environment:

```bash
nyc\Scripts\activate
```

3. Navigate to the 'back-end' directory:

```bash
cd back-end
```

4. Run the application using Uvicorn with automatic reload:

```bash
uvicorn main:app --reload
```

These steps ensure a clean and isolated environment for running the project, and the Uvicorn command initiates the backend server with automatic reloading for a smooth development experience.

## Usage

Once the setup is complete, access the web application through your browser. Provide user information, location, and time to receive crime probability predictions based on the trained model.

