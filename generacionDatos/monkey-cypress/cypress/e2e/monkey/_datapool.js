const https = require('https');
const http = require('http');

export class DataPool {
    static data = []
    static iterator = -1;

    static async prepare(url) {
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
                        cy.log("DATAPOOL READY TO USE");
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
