// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../../../helpers/DatabaseHelper.js';
import {ValidationInfo, ValidationHelper} from '../../../helpers/ValidationHelper.js';
import {RequestHelper} from '../../../helpers/RequestHelper.js';
import {RenderHelper} from '../../../helpers/RenderHelper.js';
import {DataTableSchema} from '../../../helpers/SchemaHelper.js';
import {Base} from '../../Base.js';

// <---Auto[Import]

// Import additional modules here:
// 
import {SchemaHelper} from '../../../helpers/SchemaHelper.js';
import {ProjectConfigurationHelper} from '../../../helpers/ProjectConfigurationHelper.js';
import {RelationalDatabaseClient} from '../../../helpers/ConnectionHelper.js'

// Auto[Declare]--->
/*enum SourceType {
  Relational,
  PrioritizedWorker,
  Document,
  VolatileMemory
}
enum ActionType {
  Insert,
  Update,
  Upsert,
  Delete,
  Retrieve,
  Popup,
  Navigate
}
enum ValidationInfo {
  name: string;
  required: boolean;
  customMessage: string;
}*/
// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
/*interface HierarchicalDataTable {
	source: SourceType;
	group: string;
  rows: HierarchicalDataRow[];
  notification?: string;
}
interface HierarchicalDataRow {
  keys: {[Identifier: string]: any};
  columns: {[Identifier: string]: any};
  relations: {[Identifier: string]: HierarchicalDataTable};
}
interface Input {
  target: SourceType;
  group: string;
  name: string;
  value: any;
  guid: string;
  validation: ValidationInfo;
}*/
// <---Auto[Interface]

// Declare or extend interfaces here:
//

// Auto[ClassBegin]--->
class Controller extends Base {
  constructor(request: Request, response: Response, template: string) {
  	super(request, response, template);
  	try {
	    let [action, schema, data] = this.initialize(request);
	    this.perform(action, schema, data);
   	} catch(error) {
	  	RenderHelper.error(response, error);
	  }
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected validate(data: Input[]): void {
  	// The message of thrown error will be the validation message.
  	//
 		ValidationHelper.validate(data);
 		
  }
  
  protected async accessories(data: Input[]): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve({
          title: null,
          description: null,
          keywords: null,
          language: null,
          contentType: null,
          revisitAfter: null,
          robots: null,
          linkUrl: null,
          imageUrl: null,
          itemType: null,
          contentLocale: null
        });
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async get(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return new Promise(async (resolve, reject) => {
 		  try {
        if (!this.request.session || !this.request.session.uid) {
          this.response.redirect('/authentication');
        } else {
          RelationalDatabaseClient.query(`UPDATE Quote SET status = 2
WHERE DATE_ADD(createdAt, interval IF(hours = NULL, 24, hours) hour) < now() AND status =  1`, [], async (_error, _results, _fields) => {
            try {
              let schemata = ProjectConfigurationHelper.getDataSchema();
              let inputs = RequestHelper.createInputs({
                'Store.oid': this.request.session.uid
              });
              let results = await DatabaseHelper.retrieve(inputs, schemata.tables['Store'], this.request.session);
              
              if (results['Store'].rows.length == 0) {
                this.response.redirect('/authentication/role/bidder');
              } else {
                this.request.session.sid = results['Store'].rows[0].keys['sid'];
                this.request.session.save(async () => {
        				  let quoteData = RequestHelper.createInputs({
           		      'Quote.status': 1,
           		      'Quote.Auction.qid': null,
           		      'Quote.Auction.sid': this.request.session.sid,
           		      'Quote.Auction.Substitute.aid': null
           		    });
           		    let quote = SchemaHelper.getDataTableSchemaFromNotation('Quote', ProjectConfigurationHelper.getDataSchema());
           		    let quoteDataset = await DatabaseHelper.retrieve(quoteData, quote, this.request.session, true);
           		    
           		    let listingData = RequestHelper.createInputs({
           		      'Listing.qid': (quoteDataset['Quote'].rows.length == 0) ? null : quoteDataset['Quote'].rows[0].keys['qid']
           		    });
           		    let listing = SchemaHelper.getDataTableSchemaFromNotation('Listing', ProjectConfigurationHelper.getDataSchema());
           		    let listingDataset = await DatabaseHelper.retrieve(listingData, listing, this.request.session, true);
           		    
           		    for (let i=0; i<quoteDataset['Quote'].rows.length; i++) {
           		      if (i == 0) {
             		      quoteDataset['Quote'].rows[i].relations['Listing'] = listingDataset['Listing'];
             		    } else {
             		      quoteDataset['Quote'].rows[i].relations['Listing'] = {
             		        source: SourceType.Relational,
                      	group: 'Listing',
                        rows: []
             		      };
             		    }
           		    }
           		    
           		    if (quoteDataset['Quote'].rows.length != 0) {
             		    let message = SchemaHelper.getDataTableSchemaFromNotation('Message', ProjectConfigurationHelper.getDataSchema());
             		    let messageData = RequestHelper.createInputs({
             		      'Message.aid': (quoteDataset['Quote'].rows.length == 0 || quoteDataset['Quote'].rows[0].relations['Auction'].rows.length == 0) ? -1 : quoteDataset['Quote'].rows[0].relations['Auction'].rows[0].columns['aid']
             		    });
             		    let messageDataset = await DatabaseHelper.retrieve(messageData, message, this.request.session, true);
             		    
             		    quoteDataset['Quote'].rows[0].relations['Message'] = messageDataset['Message'];
           		    }
           		    
           		    let rank = SchemaHelper.getDataTableSchemaFromNotation('Rank', ProjectConfigurationHelper.getDataSchema());
           		    let rankDataset = await DatabaseHelper.retrieve(null, rank, this.request.session, true);
           		    
           		    resolve(Object.assign({}, quoteDataset, rankDataset));
        			  });
              }
            } catch (error) {
              reject(error);
            }
          });
        }
 		  } catch(error) {
 		    reject(error);
 		  }
 		});
  }
  
  protected async post(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.post(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async put(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.put(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async delete(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.delete(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async insert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
      try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.insert(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async update(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.update(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async upsert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	try {
        if (schema && schema.group == 'Auction') {
          let auctionData = data.filter(input => input.name == 'qid' || input.name == 'sid');
   		    let auction = SchemaHelper.getDataTableSchemaFromNotation('Auction', ProjectConfigurationHelper.getDataSchema());
   		    let auctionDataset = await DatabaseHelper.retrieve(auctionData, auction, this.request.session, true);
   		    
          let priceData = data.filter(input => input.name == 'price' && input.group == 'Auction');
          let price = parseFloat(priceData[0].value);
          
          if (isNaN(price)) {
            throw new Error('กรุณากรอกราคาต่อหน่วยให้ครบ');
          }
          
          if (price <= 0) {
            throw new Error('กรุณาเสนอราคาที่สูงกว่าศูนย์บาท');
          }
          
          if (auctionDataset['Auction'].rows.length != 0 && (price + 100) > auctionDataset['Auction'].rows[0].columns['price']) {
            throw new Error('กรุณาเสนอราคาใหม่ที่ต่ำกว่าราคาเดิมอย่างน้อย 100 บาท');
          }
          
      	  let upsertResults = await DatabaseHelper.upsert(data, schema, this.request.session);
      	  let rank = SchemaHelper.getDataTableSchemaFromNotation('Rank', ProjectConfigurationHelper.getDataSchema());
          
          const qid = upsertResults[0].keys['qid'];
          
          RelationalDatabaseClient.query(`SELECT Auction.aid, Auction.qid, Auction.price
FROM Auction
INNER JOIN Substitute ON Auction.aid = Substitute.aid
INNER JOIN Listing ON Listing.lid = Substitute.lid
INNER JOIN Quote ON Auction.qid = Quote.qid
WHERE Auction.qid = ?
GROUP BY Auction.aid
HAVING Max(Substitute.type) <= Max(Listing.substitute)
ORDER BY Auction.price ASC`, [qid], async (error, results, fields) => {
            let wholeSetRankInput = [];
            let wholeSetRankCount = 0;
            
            for (const result of results) {
              wholeSetRankInput = [...wholeSetRankInput, ...[{
                target: SourceType.Relational,
                group: 'Rank',
                name: 'aid',
                value: result['aid'],
                guid: `[${wholeSetRankCount}]`,
                validation: null
              }, {
                target: SourceType.Relational,
                group: 'Rank',
                name: 'qid',
                value: result['qid'],
                guid: `[${wholeSetRankCount}]`,
                validation: null
              }, {
                target: SourceType.Relational,
                group: 'Rank',
                name: 'price',
                value: result['price'],
                guid: `[${wholeSetRankCount}]`,
                validation: null
              }, {
                target: SourceType.Relational,
                group: 'Rank',
                name: 'rank',
                value: wholeSetRankCount + 1,
                guid: `[${wholeSetRankCount}]`,
                validation: null
              }]];
              wholeSetRankCount++;
            }
            
            await DatabaseHelper.upsert(wholeSetRankInput, rank, this.request.session);
  
            RelationalDatabaseClient.query(`SELECT Auction.aid, Auction.qid, Auction.price
FROM Auction
INNER JOIN Substitute ON Auction.aid = Substitute.aid
INNER JOIN Listing ON Listing.lid = Substitute.lid
INNER JOIN Quote ON Auction.qid = Quote.qid
WHERE Auction.qid = ?
GROUP BY Auction.aid
HAVING Max(Substitute.type) > Max(Listing.substitute)
ORDER BY Auction.price ASC`, [qid], async (error, results, fields) => {
              let partialSetRankInput = [];
              let partialSetRankCount = 0;
              
              for (const result of results) {
                partialSetRankInput = [...partialSetRankInput, ...[{
                  target: SourceType.Relational,
                  group: 'Rank',
                  name: 'aid',
                  value: result['aid'],
                  guid: `[${partialSetRankCount}]`,
                  validation: null
                }, {
                  target: SourceType.Relational,
                  group: 'Rank',
                  name: 'qid',
                  value: result['qid'],
                  guid: `[${partialSetRankCount}]`,
                  validation: null
                }, {
                  target: SourceType.Relational,
                  group: 'Rank',
                  name: 'price',
                  value: result['price'],
                  guid: `[${partialSetRankCount}]`,
                  validation: null
                }, {
                  target: SourceType.Relational,
                  group: 'Rank',
                  name: 'rank',
                  value: partialSetRankCount + 1,
                  guid: `[${partialSetRankCount}]`,
                  validation: null
                }]];
                partialSetRankCount++;
              }
              
              await DatabaseHelper.upsert(partialSetRankInput, rank, this.request.session);
              
              resolve(upsertResults);
        		});
      		});
        } else {
      	  let upsertResults = await DatabaseHelper.upsert(data, schema, this.request.session);
      	  
          resolve(upsertResults);
        }
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async remove(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	/* Uncomment to allow delete action of any button on the page. */
      /* try {
        resolve(await DatabaseHelper.delete(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async retrieve(data: Input[], schema: DataTableSchema): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
    	try {
    	  RelationalDatabaseClient.query(`UPDATE Quote SET status = 2
WHERE DATE_ADD(createdAt, interval IF(hours = NULL, 24, hours) hour) < now() AND status =  1`, [], async (_error, _results, _fields) => {
          try {
            let options = RequestHelper.getOptions(this.pageId, this.request);
            
            if (schema.group == 'Quote') {
    				  let quoteData = RequestHelper.createInputs({
       		      'Quote.status': data.filter(item => item.name == 'status')[0].value,
       		      'Quote.Auction.qid': null,
       		      'Quote.Auction.sid': this.request.session.sid,
       		      'Quote.Auction.Substitute.aid': null,
       		      'Quote.Listing.qid': null
       		    }); 
       		    let quote = SchemaHelper.getDataTableSchemaFromNotation('Quote', ProjectConfigurationHelper.getDataSchema());
       		    let quoteDataset = await DatabaseHelper.retrieve(quoteData, quote, this.request.session, true);
           		
       		    if (quoteDataset['Quote'].rows.length != 0) {
         		    let message = SchemaHelper.getDataTableSchemaFromNotation('Message', ProjectConfigurationHelper.getDataSchema());
         		    let messageData = RequestHelper.createInputs({
         		      'Message.aid': (quoteDataset['Quote'].rows.length == 0 || quoteDataset['Quote'].rows[0].relations['Auction'].rows.length == 0) ? -1 : quoteDataset['Quote'].rows[0].relations['Auction'].rows[0].columns['aid']
         		    });
         		    let messageDataset = await DatabaseHelper.retrieve(messageData, message, this.request.session, true);
         		    
         		    quoteDataset['Quote'].rows[0].relations['Message'] = messageDataset['Message'];
       		    }
           		    
       		    let rank = SchemaHelper.getDataTableSchemaFromNotation('Rank', ProjectConfigurationHelper.getDataSchema());
       		    let rankDataset = await DatabaseHelper.retrieve(null, rank, this.request.session, true);
       		    
     		      resolve(Object.assign({}, quoteDataset, rankDataset, messageDataset));
            } else {
              resolve(await DatabaseHelper.retrieve(data, schema, this.request.session, options.enabledRealTimeUpdate));
            }
          } catch(error) {
            reject(error);
          }
        });
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async navigate(data: Input[], schema: DataTableSchema): Promise<string> {
    return new Promise(async (resolve, reject) => {
    	/* Uncomment to allow navigate action of any button on the page. */
      /* try {
        resolve('/');
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let schema: DataTableSchema = RequestHelper.getSchema(this.pageId, request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
    RequestHelper.registerSubmit("7e709334", "108bb2b9", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "4a579143", "retrieve", ["1ae8405a","0856c24b"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: true});
    RequestHelper.registerSubmit("7e709334", "c05b11c1", "retrieve", ["4cade2e7","93ab7a0b"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: true});
    RequestHelper.registerSubmit("7e709334", "833e4eb9", "retrieve", ["d24ed774","6d57beb9"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: true});
    RequestHelper.registerSubmit("7e709334", "e9c9b721", "retrieve", ["d1920261","c192b978"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: true});
    RequestHelper.registerSubmit("7e709334", "e76846ad", "retrieve", ["31c75169"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "802159d0", "retrieve", ["72aecc3a"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "8cbc5b17", "retrieve", ["e8656190"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "323ba37c", "retrieve", ["95270ad9"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "9868a6d5", "upsert", ["1832b944","b91e2739","03aab0e5","957c1568","9c338431","c22ec668","d913e6a1","c03d6613","d30aa93b","ae7e2437","a5b102c4","1382e4c9"], {initClass: null, crossRelationUpsert: true, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "d3e31c36", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "2b2a0681", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("7e709334", "c788d322", "insert", ["b16eadbb","208c3d23","8d1ec385"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
		RequestHelper.registerInput('1ae8405a', "relational", "Quote", "status");
		ValidationHelper.registerInput('1ae8405a', "Hidden 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '1ae8405a' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('4cade2e7', "relational", "Quote", "status");
		ValidationHelper.registerInput('4cade2e7', "Hidden 2", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '4cade2e7' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d24ed774', "relational", "Quote", "status");
		ValidationHelper.registerInput('d24ed774', "Hidden 3", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd24ed774' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 3 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d1920261', "relational", "Quote", "status");
		ValidationHelper.registerInput('d1920261', "Hidden 4", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd1920261' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 4 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('31c75169', "relational", "Listing", "qid");
		ValidationHelper.registerInput('31c75169', "Hidden 5", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '31c75169' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 5 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('72aecc3a', "relational", "Listing", "qid");
		ValidationHelper.registerInput('72aecc3a', "Hidden 6", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '72aecc3a' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 6 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('e8656190', "relational", "Listing", "qid");
		ValidationHelper.registerInput('e8656190', "Hidden 7", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'e8656190' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 7 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('95270ad9', "relational", "Listing", "qid");
		ValidationHelper.registerInput('95270ad9', "Hidden 8", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '95270ad9' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 8 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('1832b944', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('1832b944', "Radio 5", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '1832b944' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 5 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('b91e2739', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('b91e2739', "Radio 4", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'b91e2739' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 4 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('03aab0e5', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('03aab0e5', "Radio 3", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '03aab0e5' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 3 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('957c1568', "relational", "Auction.Substitute", "type");
		ValidationHelper.registerInput('957c1568', "Radio 6", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '957c1568' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Radio 6 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('1382e4c9', "relational", "Auction.Substitute", "price");
		ValidationHelper.registerInput('1382e4c9', "Price", false, "");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '1382e4c9' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Price here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('9c338431', "relational", "Auction.Substitute", "title");
		ValidationHelper.registerInput('9c338431', "Name", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '9c338431' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Name here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d913e6a1', "relational", "Auction.Substitute", "size");
		ValidationHelper.registerInput('d913e6a1', "Size", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd913e6a1' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Size here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('c22ec668', "relational", "Auction.Substitute", "quantity");
		ValidationHelper.registerInput('c22ec668', "Quantity", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'c22ec668' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Quantity here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('ae7e2437', "relational", "Auction.Substitute", "lid");
		ValidationHelper.registerInput('ae7e2437', "Hidden 3", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'ae7e2437' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 3 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('c03d6613', "relational", "Auction", "price");
		ValidationHelper.registerInput('c03d6613', "Textbox 5", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'c03d6613' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 5 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d30aa93b', "relational", "Auction", "sid");
		ValidationHelper.registerInput('d30aa93b', "Hidden 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd30aa93b' + ((i == -1) ? '' : '[' + i + ']'));
      if (input) input.value = request.session['sid'];
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('a5b102c4', "relational", "Auction", "qid");
		ValidationHelper.registerInput('a5b102c4', "Hidden 2", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'a5b102c4' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('8d1ec385', "relational", "Message", "message");
		ValidationHelper.registerInput('8d1ec385', "Textbox 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '8d1ec385' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('b16eadbb', "relational", "Message", "aid");
		ValidationHelper.registerInput('b16eadbb', "Hidden 1", true, "คุณต้องเคาะประมูลราคาก่อนที่จะสามารถคุยกับลูกค้าได้");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'b16eadbb' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('208c3d23', "relational", "Message", "type");
		ValidationHelper.registerInput('208c3d23', "Hidden 2", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '208c3d23' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
      if (input != null) data.push(input);
    }

	  // <---Auto[Merging]
	  
	  // Auto[MergingEnd]--->
	  
  	let action: ActionType = RequestHelper.getAction(this.pageId, request);
	  return [action, schema, data];
	}
  // <---Auto[MergingEnd]
  
  // Auto[ClassEnd]--->
}
// <---Auto[ClassEnd]

// Export variables here:
//
export default Controller;

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.