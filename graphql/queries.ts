export const getYieldcurveData = `
    query getYieldcurveData($name: String!) {   
        getYieldcurves(name: $name) {
          yearstomaturity
          yield
          name
        }
  }`;

export const getListYieldcurveData = `
    query getListYieldcurveData {      
        listYieldcurves {
            items {
                curve_date
                data
                name
              }
        }    
}`;

export const listyieldCurves =`
query listyieldCurves($name : String!, $date: String!){
    listYieldcurves{
        items{
          name curve_date data
        }
      }
  
}`;