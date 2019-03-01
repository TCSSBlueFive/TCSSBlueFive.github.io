var AM = new AssetManager();

//70 170

function TravelScene2(game, dungeon, opacity){
    this.dungeon = dungeon;
    this.opacity = opacity;
    this.paths = [];
    this.encounters = [];

    this.x = 80;
    this.y = 250;
    this.game = game;
    this.ctx = game.ctx;
    this.yOffset = 150;
    this.currentRoom = 0;
    this.node_center_width = 89/2;
    this.node_center_height = 118/2;

    this.xDist = 300;
    this.NodeDataBase = new NodeDataBase();

};
TravelScene2.prototype.getDistBetweenNodes = function (node1, node2) {
    return Math.sqrt(Math.pow((node2.x - node1.x), 2) + Math.pow((node2.y- node1.y),2))
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntNegOrPos(max) {
    return getRandomInt(max * 2) - max;
}

TravelScene2.prototype.getLowest = function (row) {
    var yMin = 2500;
    for (let i = 0; i < row.length; i++) {
        if (yMin > row[i].y) 
            yMin = row[i].y
    }
    return yMin;
}

TravelScene2.prototype.getMax = function (row) {
    var yMax = 0;
    for (let i = 0; i < row.length; i++) {
        if (yMax < row[i].y) 
            yMax = row[i].y
    }
    return yMax;
}
TravelScene2.prototype.getAllNonLinked = function (row) {
    var returnNodes = [];
    for (let i = 0; i < row.length; i++) {
        if (row[i].linked.length === 0) {
            returnNodes.push(row[i])
        }
    }
    return returnNodes;
}

TravelScene2.prototype.getClosest = function (node, row) {
    yDist = 1000;
    let returnnode = node;
    for (let i = 0; i < row.length; i++) {
        let yHigh = row[i].y;
        let yLow = node.y;
        if (node.y > yHigh){
            yHigh = node.y;
            yLow = row[i].y;
            if (yHigh - yLow < yDist) {
                returnnode = row[i];
            }
        }
    }
    return returnnode;
}

//generates the rest of the encounters.
TravelScene2.prototype.generateEncounters = function () {

    for(let q = 0; q < 6; q++) {
        var myEncounterCount = getRandomInt(3) + 3;
        var num = 950 / (myEncounterCount + 1);

        var encounterRow = [];
        var prevRow = this.encounters[q];
        for (let i = 1; i <= myEncounterCount; i++) {

            var randomNum = getRandomInt(this.NodeDataBase.nodes.length);
            var newNodeInfo = this.NodeDataBase.nodes[randomNum]
            var newTravelNode = new travel_node2(this.game, this, this.dungeon,  0, newNodeInfo.spritesheet, 
                newNodeInfo.fn, prevRow[0].x + this.xDist + getRandomIntNegOrPos(80) , this.yOffset + (num * i)  + getRandomIntNegOrPos(60));
                encounterRow.push(newTravelNode);
        }
        this.encounters.push(encounterRow);

    }

}

//determines starting path # and fills them with encounters
TravelScene2.prototype.generatePaths = function () {
   var myPathCount = getRandomInt(2) + 2;
   var num = 950 / (myPathCount + 1);
   var encounterRow = [];
   for (let i = 1; i <= myPathCount; i++) {
        var randomNum = getRandomInt(this.NodeDataBase.nodes.length);
        var newNodeInfo = this.NodeDataBase.nodes[randomNum]
        var newTravelNode = new travel_node2(this.game, this, this.dungeon, 0, newNodeInfo.spritesheet, 
        newNodeInfo.fn, this.x, this.yOffset + num * i );
        encounterRow.push(newTravelNode);  
    }
    this.encounters.push(encounterRow)

}
TravelScene2.prototype.test = function () {
    for (let i = 0; i < this.encounters.length; i++) {
        //console.log(this.getAllNonLinked(this.encounters[i]))
    }
}

TravelScene2.prototype.drawLinks = function () {
    for (let i = 0; i < this.encounters.length; i++) {
        for (let q = 0; q < this.encounters[i].length; q++) {
            for(let z = 0; z < this.encounters[i][q].linked.length; z++) {
                this.ctx.save();
                this.ctx.strokeStyle = '#ff0000'
                this.ctx.lineWidth = 5;
                
                this.ctx.beginPath(); 
                this.ctx.setLineDash([10, 15]);

                this.ctx.moveTo(this.encounters[i][q].x + this.node_center_width, this.encounters[i][q].y + this.node_center_height);
                // End point (180,47)
                this.ctx.lineTo(this.encounters[i][q].linked[z].x + this.node_center_width, this.encounters[i][q].linked[z].y + this.node_center_height);
                // Make the line visible
                this.ctx.stroke();
                this.ctx.restore();
            }
        }
    }
}

TravelScene2.prototype.connectPaths = function () {
    //do this for all rows 
    for (let i = 1; i < this.encounters.length; i++) {
        var prevRow = this.encounters[i - 1]
        
        var currentRow = this.encounters[i];
        //for each node in the row
        for (let q = 0; q < currentRow.length; q++) {
            var closestDist = 1000;
            var prevNode;
            for (let z = 0; z < prevRow.length; z++) {
                var newNum = this.getDistBetweenNodes(prevRow[z], currentRow[q])
                if (newNum < closestDist) {
                    closestDist = newNum;
                    prevNode = prevRow[z];
                }
            }
            //currentRow[q].linked.push(prevNode);
            prevNode.linked.push(currentRow[q]);
        }

        var unlinkedNodes = this.getAllNonLinked(prevRow);


        for(let t = 0; t < unlinkedNodes.length; t++) {
            var closestDist2 = 1000;
            var theNode;
            for (let v = 0; v < currentRow.length; v++) {
                var newNum1 = this.getDistBetweenNodes(unlinkedNodes[t],currentRow[v])
                if (newNum1 < closestDist2) {
                    closestDist2 = newNum1;
                    theNode = currentRow[v];
                }
            }
            unlinkedNodes[t].linked.push(theNode);
        }
    }
}

TravelScene2.prototype.draw = function () {
    this.drawLinks();    
    for(let i = 0; i < this.encounters.length; i++) {
        for (let j = 0; j < this.encounters[i].length; j++) {
            this.encounters[i][j].draw();
        }
    }
};

TravelScene2.prototype.update = function () {     
    for (let i = 0; i < this.encounters.length; i++) {
        for (let j = 0; j < this.encounters[i].length; j++) {
            this.encounters[i][j].update();
        }
    }
};