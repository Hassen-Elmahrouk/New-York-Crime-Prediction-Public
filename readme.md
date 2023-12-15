# Crime Predictor Web Application

## Overview

Welcome to the Crime Predictor web application! This project aims to provide users with a simple yet effective tool to predict crime probability in New York City based on user information, location, and time. Leveraging the NYPD Complaint Data Historic Dataset, the application utilizes machine learning techniques to analyze and predict potential crime occurrences.

## Dataset

The foundation of this project is the NYPD Complaint Data Historic Dataset, a comprehensive collection of valid felony, misdemeanor, and violation crimes reported to the New York City Police Department (NYPD) spanning from 2006 to 2019. With a total of 6,901,167 complaints and 35 columns, this dataset encompasses spatial and temporal information about crime occurrences, along with detailed descriptions and penal classifications.

## Setup

To get started with the Crime Predictor web application, follow these simple setup instructions:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/crime-predictor.git
   cd crime-predictor
   ```

2. Set up a virtual environment:

   ```bash
   python -m venv nyc
   ```

3. Activate the virtual environment:

   - For Windows:

     ```bash
     nyc\Scripts\activate
     ```

   - For Unix or MacOS:

     ```bash
     source nyc/bin/activate
     ```

4. Install project dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Navigate to the back-end directory:

   ```bash
   cd back-end
   ```

6. Run the application using Uvicorn:

   ```bash
   uvicorn main:app --reload
   ```



Feel free to explore the various features and functionalities provided by the application, and don't hesitate to provide feedback or contribute to the project.
