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
<strong><i> The goal for this project is to train machine learning models to predict All Homes For-Sale Inventory and Median Sale Price in Top 5 Metro Areas in the United States for future buyers and real estate professionals evaluating the market. </i></strong>

## Prerequisites 
* Getting Started 
  ```
  git clone https://github.com/emmayianpan/Zillow_Analysis.git
  ```  
## Built With
* [Python Pandas](https://pandas.pydata.org/) 
* [Python SQLAlchemy](https://www.sqlalchemy.org/) 
* [PostgreSQL](https://www.postgresql.org/) 
* [JavaScript Plotly](https://plotly.com/javascript/) 
* [JavaScript Leaflet](https://leafletjs.com/)
* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)
* [Python Flask](https://flask.palletsprojects.com/en/1.1.x/) 
* [Heroku](https://www.heroku.com/)

## Data Sources
* [Taiwan Hotels Database](https://taiwanstay.net.tw/) - The website, which is operated under Tourism Bureau, Ministry of Transportation and Communications provides month-end overall performace of Taiwan hotels. The reports can be download as PDF or ODF files.

## ETL Process
* Pull raw data from [Taiwan Hotels Database](https://taiwanstay.net.tw/) and downloaded reports as ODF files. Organized raw data for the first step.
* Transfered into csv files, cleaned/sorted data with correct formatting and created new columns by calculation including RevPAR, Demand, etc. to complete data processing.
* Loaded data onto PostgreSQL and merged monthly data.
* Created another dataset for area performance by using combined data to calculate on Jupyter Notebook. 
* Manually input data "Hotle English Name", "Address", "Longtitude", "Latitude" and "Website" from Google for Hotel Map.
* Exported all data into csv files while the ETL processing was completed.

## Data Visualization 
The website is presented with the visulization of: 
* Taiwan Hotel Market Overall Performance 
* Taiwan Hotel Area Performance
* Taiwan Hotel Individual Performance
* Hotel Location and Information 

## Created by 
Yi An Pan (Emma)
* [Linkedin](https://www.linkedin.com/in/emmayianpan/) 
* [GitHub](https://github.com/emmayianpan)

## 
The website template was designed by [baotm](https://github.com/baotm/admindek)
