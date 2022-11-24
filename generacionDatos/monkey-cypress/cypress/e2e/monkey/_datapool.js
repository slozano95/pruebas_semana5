const https = require('https');
const http = require('http');
const fs = require('fs');
const faker = require('faker');


export const PoolOrigin = {
	APriori: 0,
	Pseudo: 1,
	Random: 2
}
export class DataPool {
    static data = []
    static iterator = -1;

    static async prepare(origin, payload,f) {
        switch (origin) {
            case PoolOrigin.APriori:
                return this.prepareAPrioriOrigin(payload)
                break;
            case PoolOrigin.Pseudo:
                return this.preparePseudoOrigin(payload)
                break;
            case PoolOrigin.Random:
                return this.prepareRandomOrigin(payload)
                break;
        }
    }

    ////EXAMPLE APRIORI
    // cy.readFile('./mocks/31.json').then((fileData) => {
    //     DataPool.prepare(PoolOrigin.APriori, fileData);
    // })
    static async prepareAPrioriOrigin(fileContent) {
        let json = JSON.parse(JSON.stringify(fileContent));
        json.forEach(element => {
            this.data.push(element);
        });
        cy.log("APRIORI DATAPOOL READY TO USE");
        cy.log("Fields available: "+JSON.stringify(this.data[0]));
    }

    ////EXAMPLE PSEUDO
    // try {
    //     await DataPool.prepare(PoolOrigin.Pseudo, mockarooUrl);
    // } catch(e) {
    //     cy.log(e);
    //     return true;
    // }
    static async preparePseudoOrigin(url) {
        return new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let body = "";
                res.on("data", (chunk) => {
                    body += chunk;
                });
                res.on("end", () => {
                    try {
                        let json = JSON.parse(body);
                        json.forEach(element => {
                            this.data.push(element);
                        });
                        cy.log("PSEUDO DATAPOOL READY TO USE");
                        cy.log("Fields available: "+JSON.stringify(this.data[0]));
                        resolve()
                    } catch (error) {
                        console.error(error.message);
                        reject("1 "+error)
                    };
                });
            }).on("error", (error) => {
                console.error(error.message);
                reject("2"+error)
            });
        });
    }

    ////EXAMPLE RANDOM
    // cy.readFile('./mock_structs/31.json').then((fileData) => {
    //     DataPool.prepare(PoolOrigin.Random, fileData);
    // })
    static async prepareRandomOrigin(basicStruct, f) {
        let json = JSON.parse(JSON.stringify(basicStruct));
        json.forEach(element => {
            var data = {}
            Object.entries(element).forEach(entry => {
                const [key, dataType] = entry;
                var components= dataType.split("_");
                var size = components[1] ?? 10;
                var randomData = "";
                switch(components[0]) {
                    case "string":
                        randomData = faker.random.alphaNumeric(size)
                        break;
                    case "integer":
                        randomData = faker.random.number(size)
                        break;
                    default: 
                        randomData = dataType
                        break;
                }
                data[key] = randomData;
            });
            this.data.push(data);
        });
        cy.log("RANDOM DATAPOOL READY TO USE");
        cy.log("Fields available: "+JSON.stringify(this.data[0]));
    }

    static get(fieldName) {
        cy.log('Obtaining from pool: '+fieldName)
        if(this.iterator != -1) {
            return this.data[this.iterator][fieldName];
        } else {
            this.iterator = Math.floor(Math.random() * this.data.length);
            cy.log("SELECTED POOL ENTRY @ "+this.iterator.toString())
            cy.log("TEST DATA "+JSON.stringify(this.data[this.iterator]))
            return this.get(fieldName);
        }
    }
}
