// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../../../../helpers/DatabaseHelper.js';
import {ValidationInfo, ValidationHelper} from '../../../../helpers/ValidationHelper.js';
import {RequestHelper} from '../../../../helpers/RequestHelper.js';
import {RenderHelper} from '../../../../helpers/RenderHelper.js';
import {DataTableSchema} from '../../../../helpers/SchemaHelper.js';
import {Base} from '../../../Base.js';

// <---Auto[Import]

// Import additional modules here:
// 
import {CodeHelper} from '../../../../helpers/CodeHelper.js';
import {SchemaHelper} from '../../../../helpers/SchemaHelper.js';
import {ProjectConfigurationHelper} from '../../../../helpers/ProjectConfigurationHelper.js';
import {RelationalDatabaseClient} from '../../../../helpers/ConnectionHelper.js'

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
 		
 		for (const item of data) {
      switch (item.validation.name) {
        case 'transferringTime':
          if (item.value && !item.value.match(/^(0[1-9]|[1-2][0-9]|3[0-1])(0[1-9]|1[0-2])(25[6-7][3-9]) ([0-1][0-9]|2[0-3])([0-5][0-9])$/)) {
              throw new Error("กรุณาระบุวันและเวลาที่โอนสำเร็จให้ถูกต้องในรูปแบบ ddmmyyyy hhmm");
          }
          break;
      }
    }
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
              let quoteData = RequestHelper.createInputs({
       		      'Quote.uid': this.request.session.uid,
       		      'Quote.status': 2,
       		      'Quote.Listing.qid': null,
       		      'Quote.Auction.qid': null,
       		      'Quote.Auction.Store.sid': null,
       		      'Quote.Auction.Store.User.id': null,
       		      'Quote.Auction.Substitute.aid': null 
       		    });
       		    let quote = SchemaHelper.getDataTableSchemaFromNotation('Quote', ProjectConfigurationHelper.getDataSchema());
       		    let quoteDatasetA = await DatabaseHelper.retrieve(quoteData, quote, this.request.session, true);
       		    let quoteDatasetB = CodeHelper.clone(quoteDatasetA);
       		    
       		    quoteDatasetA['Quote'].rows[0].relations['Auction'].rows = quoteDatasetA['Quote'].rows[0].relations['Auction'].rows.filter((auction) => {
       		      return auction.relations['Substitute'].rows.every((substitute) => {
       		        return substitute.columns['type'] <= quoteDatasetA['Quote'].rows[0].relations['Listing'].rows.filter(row => row.keys['lid'] == substitute.keys['lid'])[0].columns['substitute'];
       		      });
       		    }).sort((a, b) => {
       		      return (a.columns['price'] < b.columns['price']) ? -1 : 1;
       		    });
       		    quoteDatasetB['Quote'].rows[0].relations['Auction'].rows = quoteDatasetB['Quote'].rows[0].relations['Auction'].rows.filter((auction) => {
       		      return auction.relations['Substitute'].rows.some((substitute) => {
       		        return substitute.columns['type'] > quoteDatasetA['Quote'].rows[0].relations['Listing'].rows.filter(row => row.keys['lid'] == substitute.keys['lid'])[0].columns['substitute'];
       		      });
       		    }).sort((a, b) => {
       		      return (a.columns['price'] < b.columns['price']) ? -1 : 1;
       		    });
       		    
       		    quoteDatasetA['Quote'].rows[0].relations['Auction'].rows = [...quoteDatasetA['Quote'].rows[0].relations['Auction'].rows, ...quoteDatasetB['Quote'].rows[0].relations['Auction'].rows];
       		    
       		    RelationalDatabaseClient.query(`SELECT MIN(Transfer.status) AS status FROM Quote
INNER JOIN Auction ON Quote.qid = Auction.qid
INNER JOIN Payment ON Auction.aid = Payment.aid
INNER JOIN Transfer ON Payment.aid = Transfer.aid
WHERE Auction.bought = 1 AND Quote.qid = 1171
GROUP BY Quote.qid`, [quoteDatasetA['Quote'].rows[0].columns['qid']], async (_error, _results, _fields) => {
         		    quoteDatasetA['Statuses'] = {
                  source: SourceType.Relational,
                	group: 'Statuses',
                  rows: [{
                    keys: {},
                    columns: {
                      'status': _results['status'] || 0
                    },
                    relations: {}
                  }]
                };
         		    
                resolve(quoteDatasetA);
              });
            } catch(error) {
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
    	/* Uncomment to allow insert action of any button on the page. */
      /* try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.insert(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
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
        resolve(await DatabaseHelper.upsert(data, schema, this.request.session));
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
        RelationalDatabaseClient.query(`SELECT MIN(Transfer.status) AS status FROM Quote
INNER JOIN Auction ON Quote.qid = Auction.qid
INNER JOIN Payment ON Auction.aid = Payment.aid
INNER JOIN Transfer ON Payment.aid = Transfer.aid
WHERE Auction.bought = 1 AND Quote.qid = 1171
GROUP BY Quote.qid`, [parseInt(data[0].value)], async (_error, _results, _fields) => {
          resolve({Statuses: {
            source: SourceType.Relational,
          	group: 'Statuses',
            rows: [{
              keys: {},
              columns: {
                'status': _results['status'] || 0
              },
              relations: {}
            }]
          }});
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
    RequestHelper.registerSubmit("473d370d", "bdcbb907", "update", ["c18d1ab2","6e068626","939d2d75"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("473d370d", "c1c0694d", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("473d370d", "d480ae4d", "update", ["c6cd6a36","5cab012e","39c374d3","0c59a0a4","c18d1ab2","6e068626","775b58b9","939d2d75","4b5256da","137c966d"], {initClass: null, crossRelationUpsert: true, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("473d370d", "3d97109b", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("473d370d", "0a5b0022", "retrieve", ["dc7901c9"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
		RequestHelper.registerInput('c18d1ab2', "relational", "Auction", "sid");
		ValidationHelper.registerInput('c18d1ab2', "Hidden 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'c18d1ab2' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('939d2d75', "relational", "Auction", "qid");
		ValidationHelper.registerInput('939d2d75', "Hidden 9", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '939d2d75' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 9 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('6e068626', "relational", "Auction", "bought");
		ValidationHelper.registerInput('6e068626', "Checkbox 1", true, "กรุณาเลือกรายการอย่างน้อยหนึ่ง");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '6e068626' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Checkbox 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('39c374d3', "relational", "Auction.Payment", "gateway");
		ValidationHelper.registerInput('39c374d3', "Hidden 2", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '39c374d3' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('137c966d', "relational", "Auction.Payment", "aid");
		ValidationHelper.registerInput('137c966d', "Hidden 10", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '137c966d' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 10 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('4b5256da', "relational", "Auction.Payment.Transfer", "aid");
		ValidationHelper.registerInput('4b5256da', "Hidden 11", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '4b5256da' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 11 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('775b58b9', "relational", "Auction.Payment.Transfer", "status");
		ValidationHelper.registerInput('775b58b9', "Hidden 5", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '775b58b9' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 5 here:
      // 
      if (input) input.value = 1;
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('c6cd6a36', "relational", "Auction.Payment.Transfer", "time");
		ValidationHelper.registerInput('c6cd6a36', "transferringTime", true, "กรุณากรอกวันและเวลาที่โอนสำเร็จ");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'c6cd6a36' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of transferringTime here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('0c59a0a4', "relational", "Auction.Payment.Transfer", "transferrer");
		ValidationHelper.registerInput('0c59a0a4', "Textbox 2", true, "กรุณากรอกชื่อผู้ที่ได้ทำการโอน");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '0c59a0a4' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 2 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('5cab012e', "relational", "Auction.Payment.Transfer", "origin");
		ValidationHelper.registerInput('5cab012e', "Textbox 3", true, "กรุณากรอกชื่อธนาคารและสาขาต้นทาง");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '5cab012e' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 3 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('dc7901c9', "relational", "Quote", "qid");
		ValidationHelper.registerInput('dc7901c9', "Hidden 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'dc7901c9' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 1 here:
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