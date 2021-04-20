<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://zillow-metro-analysis.herokuapp.com/">
    <img src="static/image/housing.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Housing Analysis and Forecasting in Top 5 Metro Areas in the U.S.</h3>
  <p align="center">
    <a href="https://zillow-metro-analysis.herokuapp.com/"><strong>Explore the Website »</strong></a>
  </p>
</p>

## About The Project
<a href="https://zillow-metro-analysis.herokuapp.com/">
  <img src="static/image/screenshot.JPG" alt="Webpage Screenshot" width="900" height="450">
</a>
<br>
<strong><i> The goal of this project is to train machine learning models to predict All Homes For-Sale Inventory and Median Sale Price in Top 5 Metro Areas in the United States for future buyers and real estate professionals evaluating the market. </i></strong>

## Prerequisites 
* Getting Started 
  ```
  git clone https://github.com/emmayianpan/Zillow_Analysis.git
  ```  
## Built With
* [Python Pandas](https://pandas.pydata.org/) 
* [Python Matplotlib](https://matplotlib.org/) 
* [Python Machine Learning - statsmodels](https://www.statsmodels.org/stable/index.html)
* [JavaScript Plotly](https://plotly.com/javascript/) 
* [JavaScript Chart](https://www.chartjs.org/)
* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)
* [Bootstrap](https://getbootstrap.com/)
* [Python Flask](https://flask.palletsprojects.com/en/1.1.x/) 
* [Heroku](https://www.heroku.com/)

## Data Sources
* [Zillow Housing Data](https://www.zillow.com/research/data/)
* [Statista](https://www.statista.com/statistics/183600/population-of-metropolitan-areas-in-the-us/) - Population of the Largest Metropolitan Areas in the U.S.

## Project Details
* Pull data from [Zillow Housing Data](https://www.zillow.com/research/data/). 
* Process the data by using `Python Pandas`
* Create a number of machine learning statsmodels including <ins>ARIMA</ins>, <ins>Moving Average</ins>, <ins>Naïve</ins>, <ins>Simple Exponential Smoothing</ins> and <ins>Holt Winter (Additive)</ins> to predict current For-Sale Inventory and Median Sale Price and to visualize the results by using `Python Matplotlib` 
* Define the model - **Simple Exponential Smoothing** for this project and forecast future trend
* Visualize the actual/forecast data by using `Plotly.js` and `Chart.js`
* Present and Publish on the website by using `HTML/CSS`, `Flask` and `Heroku`

## Conclusion
The real estate market for these five metro areas is significantly affected by COVID-19 situation in 2020, that the For-Sale Inventory is much lower than historical data. Therefore, we used Simple Exponential Smoothing model (which also has lowest RMSE in average after testing) to predict future trend as the prediction is a weighted sum of past observations, but the model explicitly uses an exponentially decreasing weight for past observations without using its historical trend and seasonality.

## Created by 
Yi An Pan (Emma)
* [Linkedin](https://www.linkedin.com/in/emmayianpan/) 
* [GitHub](https://github.com/emmayianpan)
