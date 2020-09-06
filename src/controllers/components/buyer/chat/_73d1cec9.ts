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
        let storeData = RequestHelper.createInputs({
 		      'Store.sid': this.request.params.sid
 		    });
 		    let store = SchemaHelper.getDataTableSchemaFromNotation('Store', ProjectConfigurationHelper.getDataSchema());
 		    let storeDataset = await DatabaseHelper.retrieve(storeData, store);
   		    
        resolve({
          title: `คุยกับร้านค้า ${storeDataset['Store'].rows[0].columns['name']}`,
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
        let userDataset = await DatabaseHelper.retrieve(RequestHelper.createInputs({
 		      'User.refID': this.request.params.refID
 		    }), ProjectConfigurationHelper.getDataSchema().tables['User'], {});
     		
     		if (userDataset['User'].rows.length == 0) {
     		  this.response.redirect('/');
     		  resolve({});
     		} else {
  			  let quoteData = RequestHelper.createInputs({
   		      'Quote.filled': null,
   		      'Quote.uid': userDataset['User'].rows[0].keys['id'],
   		      'Quote.Message.sid': this.request.params.sid,
   		      'Quote.Message.qid': this.request.params.qid
   		    });
   		    let quote = SchemaHelper.getDataTableSchemaFromNotation('Quote', ProjectConfigurationHelper.getDataSchema());
   		    let quoteDataset = await DatabaseHelper.retrieve(quoteData, quote, this.request.session, true);
   		    
   		    resolve(quoteDataset);
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
        
        RelationalDatabaseClient.query(`(SELECT C.sid, 0 AS slot, C.total FROM
	(SELECT A.sid, COUNT(B.type) AS total FROM
		(SELECT store.sid, K.qid, K.status, MAX(K.createdAt) AS latest FROM store
		LEFT JOIN (SELECT I.qid, I.sid, I.type, I.createdAt, J.status FROM message AS I
			INNER JOIN quote AS J ON I.qid = J.qid
			WHERE J.status = 1) AS K ON store.sid = K.sid AND K.type = 0
		GROUP BY store.sid, K.qid) AS A
	LEFT JOIN message AS B ON A.sid = B.sid AND B.type = 1 AND B.createdAt > A.latest
	GROUP BY A.sid) AS C
LEFT JOIN notice AS D ON C.sid = D.sid
WHERE (D.notice0 IS NULL AND C.total != 0) OR (D.notice0 IS NOT NULL AND C.total != D.notice0))

UNION

(SELECT C.sid, 1 AS slot, C.total FROM
	(SELECT A.sid, COUNT(B.type) AS total FROM
		(SELECT store.sid, K.qid, K.status, MAX(K.createdAt) AS latest FROM store
		LEFT JOIN (SELECT I.qid, I.sid, I.type, I.createdAt, J.status FROM message AS I
			INNER JOIN quote AS J ON I.qid = J.qid
			WHERE J.status = 2) AS K ON store.sid = K.sid AND K.type = 0
		GROUP BY store.sid, K.qid) AS A
	LEFT JOIN message AS B ON A.sid = B.sid AND B.type = 1 AND B.createdAt > A.latest
	GROUP BY A.sid) AS C
LEFT JOIN notice AS D ON C.sid = D.sid
WHERE (D.notice1 IS NULL AND C.total != 0) OR (D.notice1 IS NOT NULL AND C.total != D.notice1))

UNION

(SELECT C.sid, 2 AS slot, C.total FROM
	(SELECT A.sid, COUNT(B.type) AS total FROM
		(SELECT store.sid, K.qid, K.status, MAX(K.createdAt) AS latest FROM store
		LEFT JOIN (SELECT I.qid, I.sid, I.type, I.createdAt, J.status FROM message AS I
			INNER JOIN quote AS J ON I.qid = J.qid
			WHERE J.status = 3) AS K ON store.sid = K.sid AND K.type = 0
		GROUP BY store.sid, K.qid) AS A
	LEFT JOIN message AS B ON A.sid = B.sid AND B.type = 1 AND B.createdAt > A.latest
	GROUP BY A.sid) AS C
LEFT JOIN notice AS D ON C.sid = D.sid
WHERE (D.notice2 IS NULL AND C.total != 0) OR (D.notice2 IS NOT NULL AND C.total != D.notice2))`, [], async (error, results, fields) => {
          if (results.length != 0) {
            let hash = {};
            
            for (let i=0; i<results.length; i++) {
              hash['Notice.sid[' + i + ']'] = results[i]['sid'];
              hash['Notice.notice' +results[i]['slot'] + '[' + i + ']'] = results[i]['total'];
            }
            
            let messageData = RequestHelper.createInputs(hash);
     		    let message = SchemaHelper.getDataTableSchemaFromNotation('Message', ProjectConfigurationHelper.getDataSchema());
     		    await DatabaseHelper.update(messageData, message);
          }
        });
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
        resolve(await DatabaseHelper.upsert(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async remove(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	try {
        resolve(await DatabaseHelper.delete(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async retrieve(data: Input[], schema: DataTableSchema): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
    	try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.retrieve(data, schema, this.request.session, options.enabledRealTimeUpdate));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async navigate(data: Input[], schema: DataTableSchema): Promise<string> {
    return new Promise(async (resolve, reject) => {
    	try {
      	throw new Error("Not Implemented Error");
        // resolve('/');
      } catch(error) {
        reject(error);
      }
    });
  }
 	
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let schema: DataTableSchema = RequestHelper.getSchema(this.pageId, request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
    RequestHelper.registerSubmit("73d1cec9", "a403abac", "insert", ["4522d52e","a4147a38","d09070d8","7e11119e"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false});
		RequestHelper.registerInput('4522d52e', "relational", "Message", "message");
		ValidationHelper.registerInput('4522d52e', "Textbox 2", true, "กรุณาพิมพ์ข้อความ");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '4522d52e' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Textbox 2 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d09070d8', "relational", "Message", "type");
		ValidationHelper.registerInput('d09070d8', "Hidden 5", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'd09070d8' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 5 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('a4147a38', "relational", "Message", "qid");
		ValidationHelper.registerInput('a4147a38', "Hidden 6", false, "เหมือนห้องนี้จะถูกระงับบริการ");
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, 'a4147a38' + ((i == -1) ? '' : '[' + i + ']'));
    
      // Override data parsing and manipulation of Hidden 6 here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('7e11119e', "relational", "Message", "sid");
		ValidationHelper.registerInput('7e11119e', "Hidden 2", false, undefined);
    for (let i=-1; i<128; i++) {
      input = RequestHelper.getInput(this.pageId, request, '7e11119e' + ((i == -1) ? '' : '[' + i + ']'));
    
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