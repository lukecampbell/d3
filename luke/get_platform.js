
function parseResults(results) {
    var table = d3.select('#result_table');
    var tr = table.selectAll('tr').data(results.rows).enter().append('tr');
    var td = tr.selectAll('td').data(function(d) { 
        var lat=0;
        var lon=0;
        if(d.doc.nominal_location && "lat" in d.doc.nominal_location)
            lat = d.doc.nominal_location.lat;
        if(d.doc.nominal_location && "lon" in d.doc.nominal_location)
            lon = d.doc.nominal_location.lon;
        return [d.doc.name, d.doc.model, lat,lon]; 
    }).enter().append('td').text(function(d) { return d; });
}


