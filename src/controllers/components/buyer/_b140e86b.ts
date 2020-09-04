// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from "../../helpers/DatabaseHelper.js";
import {ValidationInfo, ValidationHelper} from "../../helpers/ValidationHelper.js";
import {RequestHelper} from "../../helpers/RequestHelper.js";
import {RenderHelper} from "../../helpers/RenderHelper.js";
import {DataTableSchema} from "../../helpers/SchemaHelper.js";
import {Base} from "../Base.js";

// <---Auto[Import]

// Import additional modules here:
// 
import {SchemaHelper} from "../../helpers/SchemaHelper.js";
import {ProjectConfigurationHelper} from "../../helpers/ProjectConfigurationHelper.js";
import got from "got";

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
	    const [action, schema, data] = this.initialize(request);
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
        
        for (const event of json.events) {
          switch (event.type) {
            case "message":
              if (event.source.type == "user") {
                results = await DatabaseHelper.retrieve(RequestHelper.createInputs({
         		      "User.lineID": event.source.userId
         		    }), ProjectConfigurationHelper.getDataSchema().tables["User"]);
              }
              
              if (results && results["User"].rows.length != 0) {
                const data = await DatabaseHelper.retrieve(RequestHelper.createInputs({
         		      "Quote.uid": results["User"].rows[0].keys["id"],
         		      "Quote.filled": null,
         		      "Quote.Auction.qid": null,
         		      "Quote.Auction.Store.sid": null
         		    }), ProjectConfigurationHelper.getDataSchema().tables["Quote"]);
                
                if (data["Quote"].rows.length == 0) {
                  await got.post("https://api.line.me/v2/bot/message/reply", {json: {
         		        replyToken: event.replyToken,
         		        messages: [{
                      "type": "template",
                      "template": {
                        "type": "buttons",
                        "text": "กรุณาเลือกสิ่งที่คุณต้องการจะทำ:",
                        "actions": [{
                          "type": "uri",
                          "label": "สืบราคาวัสดุก่อสร้าง",
                          "uri": "https://www.wiseboq.com/buyer/auction"
                        }, {
                          "type": "uri",
                          "label": "อ่านบทความ",
                          "uri": "https://www.wiseboq.com/blog/all"
                        }]
                      }
                    }]
         		      }, responseType: "json"});
                } else {
                  if (data["Quote"].rows[0].relations["Auction"].rows.length == 0) {
                    await got.post("https://api.line.me/v2/bot/message/reply", {json: {
           		        replyToken: event.replyToken,
           		        messages: [{
         		            "type": "text",
         		            "text": "ตอนนี้ยังไม่มีร้านค้าใดยื่นเสนอราคา"
         		          }]
           		      }, responseType: "json"});
                  }
                  await got.post("https://api.line.me/v2/bot/message/reply", {json: {
         		        replyToken: event.replyToken,
         		        messages: [{
                      "type": "template",
                      "template": {
                        "type": "buttons",
                        "text": "กรุณาเลือกว่าจะติดต่อกับร้านค้าไหน:",
                        "actions": data["Quote"].rows[0].relations["Auction"].rows.map((auction) => {
                          return {
                            "type": "postback",
                            "label": auction.relations["Store"].rows[0].columns["name"],
                            "data": auction.relations["Store"].rows[0].keys["sid"]
                          };
                        })
                      }
                    }]
         		      }, responseType: "json"});
                }
              } else {
                if (event.message.text.length != 6) {
                  await got.post("https://api.line.me/v2/bot/message/reply", {json: {
         		        replyToken: event.replyToken,
         		        messages: [{
       		            "type": "text",
       		            "text": "กรุณาพิมพ์หมายเลขอ้างอิง 6 หลัก:"
       		          }]
         		      }, responseType: "json"});
                } else {
                  results = await DatabaseHelper.retrieve(RequestHelper.createInputs({
           		      "User.refID": event.message.text.toUpperCase()
           		    }), ProjectConfigurationHelper.getDataSchema().tables["User"]);
           		    
           		    if (results && results["User"].rows.length != 0) {
           		      results = await DatabaseHelper.retrieve(RequestHelper.createInputs({
             		      "User.id": results["User"].rows[0].keys["id"],
             		      "User.lineID": event.source.userId
             		    }), ProjectConfigurationHelper.getDataSchema().tables["User"]);
             		    
             		    await got.post("https://api.line.me/v2/bot/message/reply", {json: {
           		        replyToken: event.replyToken,
           		        messages: [{
         		            "type": "text",
         		            "text": "ลงทะเบียนเสร็จเรียบร้อยแล้ว"
         		          }]
           		      }, responseType: "json"});
           		    } else {
           		      await got.post("https://api.line.me/v2/bot/message/reply", {json: {
           		        replyToken: event.replyToken,
           		        messages: [{
         		            "type": "text",
         		            "text": "ไม่พบหมายเลขอ้างอิงดังกล่าว กรุณาพิมพ์ใหม่อีกครั้ง:"
         		          }]
           		      }, responseType: "json"});
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
  	const schema: DataTableSchema = RequestHelper.getSchema(this.pageId, request);
  	const data: Input[] = [];
  	const input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->

	  // <---Auto[Merging]
	  
	  // Auto[MergingEnd]--->
	  
  	const action: ActionType = RequestHelper.getAction(this.pageId, request);
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