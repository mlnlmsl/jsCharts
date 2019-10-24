class Graph {

    /**
     * 
     * @param {DOM element} elem  parent where chart lies
     */
    constructor(elem) {
        this.parentElement = elem;
        this.ctx = _createCanvas(this.parentElement);
        // console.log(this.ctx.canvas);
    }


    /**
     * 
     * @param {object} config configuration for the chart
     */
    createChart(config) {
        if (config.type.toLowerCase() === pie) {
            new PieChart(config, this.ctx);
        }
        else if (config.type.toLowerCase() === bar) {
            new BarChart(config, this.ctx);
        }

    }
}



class StackChart { }

class LineChart { }

