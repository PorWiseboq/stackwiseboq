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
     		        return substitute.columns['type'] != 3;
     		      });
     		    }).sort((a, b) => {
     		      return (a.columns['price'] < b.columns['price']) ? -1 : 1;
     		    });
     		    quoteDatasetB['Quote'].rows[0].relations['Auction'].rows = quoteDatasetB['Quote'].rows[0].relations['Auction'].rows.filter((auction) => {
     		      return auction.relations['Substitute'].rows.some((substitute) => {
     		        return substitute.columns['type'] == 3;
     		      });
     		    }).sort((a, b) => {
     		      return (a.columns['price'] < b.columns['price']) ? -1 : 1;
     		    });
     		    
     		    let results = {
     		      Quote: {
       		      source: SourceType.Relational,
              	group: 'Quote',
                rows: [
                  quoteDatasetA['Quote'].rows[0],
                  quoteDatasetB['Quote'].rows[0]
                ]
     		      }
     		    };
     		    
            resolve(results);
          } catch(error) {
            reject(error);
          }
        });
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
    	/* Uncomment to allow update action of any button on the page. */
      /* try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.update(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async upsert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	/* Uncomment to allow update action of any button on the page. */
      /* try {
        resolve(await DatabaseHelper.upsert(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
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
    	/* Uncomment to allow retrieve action of any button on the page. */
      /* try {
        resolve(await DatabaseHelper.retrieve(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
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
    RequestHelper.registerSubmit("473d370d", "bdcbb907", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("473d370d", "c1c0694d", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("473d370d", "d480ae4d", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
    RequestHelper.registerSubmit("473d370d", "3d97109b", null, [], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
		RequestHelper.registerInput('6e068626', "relational", "Auction", "bought");
		ValidationHelper.registerInput('6e068626', "Checkbox 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '6e068626' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Checkbox 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('c6cd6a36', "relational", "Auction.Payment.Transfer", "time");
		ValidationHelper.registerInput('c6cd6a36', "Textbox 1", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'c6cd6a36' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 1 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('0c59a0a4', "relational", "Auction.Payment.Transfer", "transferrer");
		ValidationHelper.registerInput('0c59a0a4', "Textbox 2", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '0c59a0a4' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 2 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('5cab012e', "relational", "Auction.Payment.Transfer", "origin");
		ValidationHelper.registerInput('5cab012e', "Textbox 3", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '5cab012e' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 3 here:
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