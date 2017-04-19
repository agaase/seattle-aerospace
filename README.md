# seattle-aerospace

This project visualizes the kinds of companies that comprise Seattle's aerospace industry.
**[[LIVE DEMO]](https://agaase.github.io/seattle-aerospace/)**


## Code and Installation
This is a normal web project. If you clone this repo to a server directory, you can open your localhost to see it working.
The **DEMO** can also be seen at https://agaase.github.io/seattle-aerospace/

## Design Approach

### Data Analysis
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
    
### Insights
There is an interesting relationship in terms of the actual number of companies that were doing one particular activity or involved with one particular object as well as at the intersect of those two which actually defines the business the company is in.

***With this I wanted to highlight the opportunities across segments by showing where there is more concentration of business and where its still vacant and could be explored***.
For example there could be a case where there are lot of companies in Manufacturing but few deal with avionics manufacturing. As such it is important to show the count of industries available across different variables.

As such with I wanted to highlight some important things with the design
1. Give a sense of how many companies were involved in an activity.
2. Give a sense of how many companies were involved in an object.
3. Also, identify the number of companies at the intersection of activity and object.

### Visual Design
1. The axis represents the activity and object. They are also quantified by having bars to show the number of companies in that variable.
2. The intersection of a matrix at a point is showing using a circle. The radius of the circle shows the number of company involved in that particular activity and object.

