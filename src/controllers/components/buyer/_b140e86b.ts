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
  
  private getShortRemainingTime(createdAt: string, hoursChecked: boolean, auctionHours: number): string {
    if (isNaN(auctionHours)) auctionHours = 24;
    
    const remaining = Math.max(0, new Date(createdAt).getTime() + ((hoursChecked && !isNaN(auctionHours)) ? auctionHours : 24) * 60 * 60 * 1000 - new Date().getTime());
    let seconds = remaining / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    
    seconds = Math.floor(seconds) % 60;
    minutes = Math.floor(minutes) % 60;
    hours = Math.floor(hours);
    
    let _seconds = '';
    let _minutes = '';
    let _hours = '';
    
    if (seconds < 10) _seconds = '0' + seconds;
    else _seconds = seconds.toString();
    
    if (minutes < 10) _minutes = '0' + minutes;
    else _minutes = minutes.toString();
    
    if (hours < 10) _hours = '0' + hours;
    else _hours = hours.toString();
    
    return `${_hours}:${_minutes}:${_seconds}`;
  }
  
  private getLongRemainingTime(createdAt: string, hoursChecked: boolean, auctionHours: number): string {
    const remaining = this.getShortRemainingTime(createdAt, hoursChecked, auctionHours);
    
    if (remaining == '00:00:00') {
      return 'การประมูลนี้สิ้นสุดลงแล้ว';
    } else {
      const splited = remaining.split(':');
      return `กำลังประมูลอยู่.. ซึ่งต้องรออีกประมาณ ${parseInt(splited[0])} ชั่วโมง ${parseInt(splited[1])} นาที ${parseInt(splited[2])} วินาที`;
    }
  }
  
  protected async post(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      try {
        const json = this.request.body;
        let results: any = null;
        
        for (let event of json.events) {
          if (event.source.userId) {
            results = await DatabaseHelper.retrieve(RequestHelper.createInputs({
     		      'User.lineID': event.source.userId
     		    }), ProjectConfigurationHelper.getDataSchema().tables['User'], {});
          }
          
          switch (event.type) {
            case 'postback':
              if (results && results['User'].rows.length != 0) {
                if (event.postback.data == 'list') {
                  let quoteDataset = await DatabaseHelper.retrieve(RequestHelper.createInputs({
           		      'Quote.uid': results['User'].rows[0].keys['id'],
           		      'Quote.filled': null,
           		      'Quote.Auction.qid': null,
           		      'Quote.Auction.Store.sid': null
           		    }), ProjectConfigurationHelper.getDataSchema().tables['Quote'], {});
                  
                  let list = [];
                  if (quoteDataset['Quote'].rows.length != 0) {
                    for (const auction of quoteDataset['Quote'].rows[0].relations['Auction'].rows) {
                      list.push(`รหัส s${auction.relations['Store'].rows[0].keys['sid']} ร้าน ${auction.relations['Store'].rows[0].columns['name']}`);
                    }
                  }
                  
                  if (list.length != 0) {
                    await client.replyMessage(event.replyToken, {
       		            'type': 'text',
       		            'text': `รายการต่อไปนี้คือร้านค้าทั้งหมดที่กำลังติดต่ออยู่:\n\n${list.join('\n')}\n\nกรุณาพิมพ์รหัสร้านค้าที่ขึ้นต้นด้วย s เพื่อเปิดห้องสนทนา:`
           		      });
                  } else {
                    await client.replyMessage(event.replyToken, {
       		            'type': 'text',
       		            'text': `ยังไม่มีร้านค้าใดๆ เสนอราคาและโปรดกรุณาสอบถามใหม่อีกครั้ง`
           		      });
                  }
                } else if (event.postback.data == 'status') {
                  let quoteDataset = await DatabaseHelper.retrieve(RequestHelper.createInputs({
           		      'Quote.uid': results['User'].rows[0].keys['id'],
           		      'Quote.filled': null,
           		      'Quote.Auction.qid': null,
           		      'Quote.Auction.Store.sid': null
           		    }), ProjectConfigurationHelper.getDataSchema().tables['Quote'], {});
           		    
           		    if (quoteDataset['Quote'].rows.length != 0) {
           		      const time = this.getLongRemainingTime(quoteDataset['Quote'].rows[0].columns['createdAt'], quoteDataset['Quote'].rows[0].columns['hourChecked'], quoteDataset['Quote'].rows[0].columns['hours']);
           		      
           		      if (quoteDataset['Quote'].rows[0].relations['Auction'].rows.length != 0) {
                      await client.replyMessage(event.replyToken, {
         		            'type': 'text',
         		            'text': `ตอนนี้มีร้านค้าที่ร่วมเสนอราคาเป็นจำนวนทั้งสิ้น ${quoteDataset['Quote'].rows[0].relations['Auction'].rows.length} ร้านค้า... และพบว่า${time}`
             		      });
           		      } else {
             		      await client.replyMessage(event.replyToken, {
         		            'type': 'text',
         		            'text': `ตอนนี้ยังไม่มีร้านค้าใดเสนอราคา... และพบว่า${time}`
             		      });
           		      }
                  } else {
                    await client.replyMessage(event.replyToken, {
       		            'type': 'text',
       		            'text': `คุณยังไม่มีรายการสืบราคา ณ ปัจจุบัน หรือว่าการสืบราคาดังกล่าวได้เสร็จสิ้นเป็นที่เรียบร้อยแล้ว`
           		      });
                  }
                }
              }
              break;
            case 'message':
              if (results && results['User'].rows.length != 0) {
                if (event.message.text.toLowerCase().trim()[0] == 's') {
                  const sid = parseInt(event.message.text.toLowerCase().trim().split('s')[1]);
                  const quoteDataset = await DatabaseHelper.retrieve(RequestHelper.createInputs({
           		      'Quote.uid': results['User'].rows[0].keys['id'],
           		      'Quote.filled': null,
           		      'Quote.Auction.qid': null,
           		      'Quote.Auction.Store.sid': null
           		    }), ProjectConfigurationHelper.getDataSchema().tables['Quote'], {});
                  
                  if (quoteDataset['Quote'].rows.length != 0 && quoteDataset['Quote'].rows[0].relations['Auction'] && quoteDataset['Quote'].rows[0].relations['Auction'].rows.length != 0) {
                    const auction = quoteDataset['Quote'].rows[0].relations['Auction'].rows.filter(row => row.keys['sid'] == sid);
                    
                    if (auction.length != 0) {
                      await client.replyMessage(event.replyToken, {
                        "type": "template",
                        "altText": `เปิดห้องคุย`,
                        "template": {
                          "type": "buttons",
                          "text": `ร้าน ${auction[0].relations['Store'].rows[0].columns['name']}`,
                          "actions": [{
                            "type": "uri",
                            "label": "เปิดห้องคุย",
                            "uri": `https://staging.wiseboq.com/buyer/chat/${results['User'].rows[0].columns['refID']}/${auction[0].columns['aid']}`
                          }]
                        }
                      });
                    } else {
                      await client.replyMessage(event.replyToken, {
         		            'type': 'text',
         		            'text': `เหมือนว่าคุณจะพิมพ์รหัสนอกเหนือไปจากที่มี กรุณาลองดูอีกครั้ง`
             		      });
                    }
                  } else {
                    await client.replyMessage(event.replyToken, {
       		            'type': 'text',
       		            'text': `เหมือนว่าคุณจะพิมพ์รหัสนอกเหนือไปจากที่มี กรุณาลองดูอีกครั้ง`
           		      });
                  }
                } else {
                  await client.replyMessage(event.replyToken, {
                    "type": "template",
                    "altText": "คุณต้องการที่จะทำอะไร?",
                    "template": {
                      "type": "buttons",
                      "text": "สวัสดี... คุณต้องการที่จะทำอะไร?",
                      "actions": [{
                        "type": "uri",
                        "label": "สืบราคาวัสดุก่อสร้าง",
                        "uri": "https://www.wiseboq.com/buyer/auction"
                      }, {
                        "type": "uri",
                        "label": "อ่านบทความล่าสุด",
                        "uri": "https://www.wiseboq.com/blog/all"
                      }, {
                        "type": "postback",
                        "label": "ติดต่อร้านค้าวัสดุก่อสร้าง",
                        "data": "list"
                      }, {
                        "type": "postback",
                        "label": "ขอทราบสถานะล่าสุด",
                        "data": "status"
                      }]
                    }
                  });
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
                      "type": "template",
                      "altText": "คุณต้องการที่จะทำอะไร?",
                      "template": {
                        "type": "buttons",
                        "text": "ลงทะเบียนเรียบร้อยแล้ว... คุณต้องการที่จะทำอะไร?",
                        "actions": [{
                          "type": "uri",
                          "label": "สืบราคาวัสดุก่อสร้าง",
                          "uri": "https://www.wiseboq.com/buyer/auction"
                        }, {
                          "type": "uri",
                          "label": "อ่านบทความล่าสุด",
                          "uri": "https://www.wiseboq.com/blog/all"
                        }, {
                          "type": "postback",
                          "label": "ติดต่อร้านค้าวัสดุก่อสร้าง",
                          "data": "list"
                        }, {
                          "type": "postback",
                          "label": "ขอทราบสถานะล่าสุด",
                          "data": "status"
                        }]
                      }
                    });
                    
                    let quoteDataset = await DatabaseHelper.retrieve(RequestHelper.createInputs({
             		      'Quote.uid': results['User'].rows[0].keys['id'],
             		      'Quote.filled': null,
             		      'Quote.Auction.qid': null,
             		      'Quote.Auction.Store.sid': null,
             		      'Quote.Auction.Message.aid': null
             		    }), ProjectConfigurationHelper.getDataSchema().tables['Quote'], {});
             		    
             		    if (quoteDataset['Quote'].rows.length != 0 && quoteDataset['Quote'].rows[0].relations['Auction']) {
             		      for (const auction of quoteDataset['Quote'].rows[0].relations['Auction'].rows) {
             		        if (auction.relations['Message'].rows.some(row => row.columns['type'] == 0)) {
             		          await client.pushMessage(event.source.userId, {
                            "type": "template",
                            "altText": `เปิดห้องคุย`,
                            "template": {
                              "type": "buttons",
                              "text": `ร้าน ${auction.relations['Store'].rows[0].columns['name']} ต้องการจะคุยด้วย`,
                              "actions": [{
                                "type": "uri",
                                "label": "เปิดห้องคุย",
                                "uri": `https://staging.wiseboq.com/buyer/chat/${event.message.text.toUpperCase()}/${auction.columns['aid']}`
                              }]
                            }
                          });
             		        }
             		      }
             		    }
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