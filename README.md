# seattle-aerospace

This project visualizes the kinds of companies that comprise Seattle's aerospace industry.

## Design 

The first step as part of this visualization itself was to understand the data itself. I analysed the data by importing it in python ([see python notebook here](https://github.com/agaase/seattle-aerospace/blob/master/analysis.ipynb)) and looked at the fields as well as some basic analysis to understand the basic quantitative relationship. 
I could understand following things - 

* An **activity** uniquely identifies the actual function or process the company has to do. It can be for example
   * Manufacturing
   * Distribution
   * Maintenenance
  
* An **object** uniquely identifies something which the activities involves or works with . It can be for example
   * Logistics
   * People
   * Parts of flight
  
Also the there was an interesting relationship in terms of the actual number of companies that were doing one particular activity or involved with one particular object as well as at the intersect of those two which actually defines the business the company is in.

***With this I wanted to highlight the opportunities across segments by showing where there is more concentration of business and where its still vacant and could be explored***.
For example there could be a case where there are lot of companies in Manufacturing but few deal with avionics manufacturing. As such it is important to show the count of industries available across different variables.

As such with I wanted to highlight some important things with the design
1. Give a sense of how many companies were involved in an activity.
2. Give a sense of how many companies were involved in an object.
3. Also, identify the number of companies at the intersection of activity and object.


