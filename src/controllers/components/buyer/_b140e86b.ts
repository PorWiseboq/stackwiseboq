// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../../helpers/DatabaseHelper.js';
import {ValidationInfo, ValidationHelper} from '../../helpers/ValidationHelper.js';
import {RequestHelper} from '../../helpers/RequestHelper.js';
import {RenderHelper} from '../../helpers/RenderHelper.js';
import {DataTableSchema} from '../../helpers/SchemaHelper.js';
import {Base} from '../Base.js';

// <---Auto[Import]

// Import additional modules here:
// 
import {SchemaHelper} from '../../helpers/SchemaHelper.js';
import {ProjectConfigurationHelper} from '../../helpers/ProjectConfigurationHelper.js';
import * as line from '@line/bot-sdk';

const client = new line.Client({
  channelAccessToken: '1sIVgsH0LNlIMu2aiw5XThF4vstGl9PHNuj3YaO5zl4Rk+2ndA3pKKbVpPhdiUHtF1eABThT+9uW/84S63GJ4yz0AaouOhcansstmr/QGbnhVBCXEfajsZWjtjLt0uPwzT+/exYDRnSsBZnuzWi7UgdB04t89/1O/w1cDnyilFU=',
  channelSecret: '4874e1491d737db97a3756fbf1e3c0d9'
});

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
      /* try {
        resolve(await super.get(data));
      } catch(error) {
        reject(error);
      } */
      resolve({});
    });
  }
  
  protected async post(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      try {
        const json = this.request.body;
        let results: any = null;
        
        for (let event of json.events) {
          switch (event.type) {
            case 'postback':
              if (event.postback.data == list) {
                if (event.source.userId) {
                  results = await DatabaseHelper.retrieve(RequestHelper.createInputs({
           		      'User.lineID': event.source.userId
           		    }), ProjectConfigurationHelper.getDataSchema().tables['User'], {});
                }
                
                if (results && results['User'].rows.length != 0) {
                  let quoteDataset = await DatabaseHelper.retrieve(RequestHelper.createInputs({
           		      'Quote.uid': results['User'].rows[0].keys['id'],
           		      'Quote.filled': null,
           		      'Quote.Auction.qid': null,
           		      'Quote.Auction.Store.sid': null
           		    }), ProjectConfigurationHelper.getDataSchema().tables['Quote'], {});
         		    
                  let actions = quoteDataset['Quote'].rows[0].relations['Auction'].rows.map((auction) => {
                    return {
                      "type": "template",
                      "altText": "สิ่งที่คุณสามารถทำได้ในตอนนี้",
                      "template": {
                        "type": "buttons",
                        "text": `ร้าน ${auction.relations['Store'].rows[0].columns['name']}`,
                        "actions": [{
                          "type": "postback",
                          "label": "คุยกับตัวแทนของร้าน",
                          "data": "s" + auction.relations['Store'].rows[0].keys['sid'].toString()
                        }]
                      }
                    }
                  });
                  
                  for (const action of actions) {
                    await client.replyMessage(event.replyToken, action);
                  }
                }
                break;
              }
            case 'message':
              if (event.source.userId) {
                results = await DatabaseHelper.retrieve(RequestHelper.createInputs({
         		      'User.lineID': event.source.userId
         		    }), ProjectConfigurationHelper.getDataSchema().tables['User'], {});
              }
              
              if (results && results['User'].rows.length != 0) {
                let quoteDataset = await DatabaseHelper.retrieve(RequestHelper.createInputs({
         		      'Quote.uid': results['User'].rows[0].keys['id'],
         		      'Quote.filled': null,
         		      'Quote.Auction.qid': null,
         		      'Quote.Auction.Store.sid': null
         		    }), ProjectConfigurationHelper.getDataSchema().tables['Quote'], {});
                
                if (quoteDataset['Quote'].rows.length == 0) {
                  await client.replyMessage(event.replyToken, {
                    "type": "template",
                    "altText": "สิ่งที่คุณสามารถทำได้ในตอนนี้",
                    "template": {
                      "type": "buttons",
                      "text": "เนื่องจากตอนนี้คุณยังไม่มีรายการใดๆ ที่กำลังสืบราคาอยู่ กรุณาเลือกสิ่งอื่นๆ ที่ต้องการจะทำ",
                      "actions": [{
                        "type": "uri",
                        "label": "สืบราคาวัสดุก่อสร้าง",
                        "uri": "https://www.wiseboq.com/buyer/auction"
                      }, {
                        "type": "uri",
                        "label": "อ่านบทความ",
                        "uri": "https://www.wiseboq.com/blog/all"
                      }, {
                        "type": "postback",
                        "label": "ขอสถานะล่าสุด",
                        "data": "refresh"
                      }]
                    }
                  });
                } else {
                  if (quoteDataset['Quote'].rows[0].relations['Auction'].rows.length == 0) {
                    await client.replyMessage(event.replyToken, {
                      "type": "template",
                      "altText": "สิ่งที่คุณสามารถทำได้ในตอนนี้",
                      "template": {
                        "type": "buttons",
                        "text": "เนื่องจากตอนนี้คุณมีรายการที่กำลังสืบราคาอยู่แต่ยังไม่มีร้านค้าใดยื่นเสนอราคา กรุณาเลือกสิ่งอื่นๆ ที่ต้องการจะทำ",
                        "actions": [{
                          "type": "uri",
                          "label": "อ่านบทความ",
                          "uri": "https://www.wiseboq.com/blog/all"
                        }, {
                          "type": "postback",
                          "label": "ขอสถานะล่าสุด",
                          "data": "refresh"
                        }]
                      }
                    });
                  } else {
                    await client.replyMessage(event.replyToken, {
                      "type": "template",
                      "altText": "สิ่งที่คุณสามารถทำได้ในตอนนี้",
                      "template": {
                        "type": "buttons",
                        "text": "เนื่องจากตอนนี้คุณมีรายการที่กำลังสืบราคาอยู่ กรุณาเลือกว่าจะติดต่อกับร้านค้าไหน",
                        "actions": [{
                          "type": "postback",
                          "label": "แสดงรายชื่อร้านค้าทั้งหมด",
                          "data": "list"
                        }, {
                          "type": "postback",
                          "label": "ขอสถานะล่าสุด",
                          "data": "refresh"
                        }]
                      }
                    });
                  }
                }
              } else {
                if (event.message.text.length != 6) {
                  await client.replyMessage(event.replyToken, {
     		            'type': 'text',
     		            'text': 'กรุณาพิมพ์หมายเลขอ้างอิง 6 หลัก:'
         		      });
                } else {
                  results = await DatabaseHelper.retrieve(RequestHelper.createInputs({
           		      'User.refID': event.message.text.toUpperCase()
           		    }), ProjectConfigurationHelper.getDataSchema().tables['User'], {});
           		    
           		    if (results && results['User'].rows.length != 0) {
           		      results = await DatabaseHelper.update(RequestHelper.createInputs({
             		      'User.id': results['User'].rows[0].keys['id'],
             		      'User.lineID': event.source.userId
             		    }), ProjectConfigurationHelper.getDataSchema().tables['User'], false, {'uid': results['User'].rows[0].keys['id']});
             		    
             		    await client.replyMessage(event.replyToken, {
       		            'type': 'text',
       		            'text': 'ลงทะเบียนเสร็จเรียบร้อยแล้ว'
           		      });
           		      
           		      await this.post(data);
           		    } else {
           		      await client.replyMessage(event.replyToken, {
       		            'type': 'text',
       		            'text': 'ไม่พบหมายเลขอ้างอิงดังกล่าว กรุณาพิมพ์ใหม่อีกครั้ง:'
           		      });
           		    }
                }
              }
              break;
          }
        }
        
        resolve({});
      } catch(error) {
        reject(error);
      }
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