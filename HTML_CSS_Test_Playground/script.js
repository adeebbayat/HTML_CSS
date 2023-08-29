
async function findthatStonk(){
    var closePrice = [];
    var stockData = await fetch("https://api.polygon.io/v2/aggs/ticker/SPY/range/1/minute/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=390&apiKey=Npq9lfTHeBXirHQuuAcbxAD67AynKWWB");
    var data = await stockData.json();
    for(var i = 0; i < data.count;i++){
    closePrice[i] = data.results[i].c
    }
    console.log(closePrice)

    var xaxis = []
    for(var i = 0; i < data.count; i++){
        xaxis[i] = i+1;
    }
    console.log(xaxis)

    var trace1 = {
        x: xaxis,
        y: closePrice,
        type: 'line'
    };
    
    var data = [trace1];
    
    Plotly.newPlot('spyChart', data);
}

findthatStonk()





