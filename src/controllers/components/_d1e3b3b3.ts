// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../helpers/DatabaseHelper.js';
import {ValidationInfo, ValidationHelper} from '../helpers/ValidationHelper.js';
import {RequestHelper} from '../helpers/RequestHelper.js';
import {RenderHelper} from '../helpers/RenderHelper.js';
import {DataTableSchema} from '../helpers/SchemaHelper.js';
import {Base} from './Base.js';

// <---Auto[Import]

// Import additional modules here:
//
import {RelationalDatabaseClient} from '../helpers/ConnectionHelper.js'
import crypto from 'crypto';

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
  private email: string = null;
  private password: string = null;
  private signningIn: boolean = true;
  
  protected validate(data: Input[]): void {
  	// The message of thrown error will be the validation message.
  	//
 		ValidationHelper.validate(data);
 		
 		let password1 = null;
    let password2 = null;
    for (const item of data) {
        switch (item.validation.name) {
            case 'Textbox 1':
                if (!item.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    throw new Error("อีเมล์ที่คุณกรอกนั้นไม่ถูกต้อง");
                }
                else if (item.value.length > 255) {
                    throw new Error("อีเมล์ที่คุณกรอกนั้นยาวเกินไป");
                }
                this.email = item.value;
                break;
            case 'Textbox 2':
                if (!item.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
                    throw new Error("รหัสผ่านที่คุณกรอกนั้นไม่ถูกต้อง (ความยาวอย่างน้อย 8 คัวอักษร ประกอบด้วยอย่างน้อยหนึ่งพิมพ์ใหญ่ หนึ่งพิมพ์เล็ก หนึ่งตัวเลขและหนึ่งอักขระพิเศษ)");
                }
                password1 = item.value;
                this.password = item.value;
                break;
            case 'Textbox 3':
                password2 = item.value;
                break;
        }
    }
    if (password1 !== null && password2 !== null) {
        this.signningIn = false;
        if (password1 !== password2) {
            throw new Error("รหัสผ่านที่คุณยืนยันไม่ตรงกัน กรุณาลองใหม่");
        }
    }
  }
  
  protected async get(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    if (this.request.session && this.request.session.uid) {
      this.response.redirect('/authentication/role');
    } else { 
 		  return super.get(data);
    }
  }
  
  protected async post(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return super.post(data);
  }
  
  protected async put(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return super.put(data);
  }
  
  protected async delete(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return super.delete(data);
  }
  
  protected async insert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
 		return await DatabaseHelper.insert(data, schema);
  }
  
  protected async update(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
 		return await DatabaseHelper.update(data, schema);
  }
  
  protected async remove(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
 		return await DatabaseHelper.delete(data, schema);
  }
  
  protected async retrieve(data: Input[], schema: DataTableSchema): Promise<{[Identifier: string]: HierarchicalDataTable}> {
 		return await DatabaseHelper.retrieve(data, schema);
  }
  
  protected async navigate(data: Input[], schema: DataTableSchema): Promise<string> {
 		return new Promise((resolve, reject) => {
      if (this.request.session.uid) {
        resolve('/authentication/role');
      } else { 
        if (this.signningIn) {
          const md5Password = crypto.createHash('md5').update(this.password).digest('hex');
          RelationalDatabaseClient.query('SELECT * FROM User WHERE email = ? and md5Password = ?', [this.email, md5Password], (function(error, results, fields) {
            if (error) {
              reject(new Error(`เกิดความผิดพลาดขณะติดต่อฐานข้อมูล กรุณาลองดูใหม่อีกครั้ง (${error})`));
      			} else if (results.length > 0) {
      			  this.request.session.uid = results[0].id;
      			  this.request.session.role = results[0].role;
      			  this.request.session.save(() => {
      				  resolve('/authentication/role');
      			  });
      			} else {
      			  reject(new Error('คุณระบุอีเมล์และรหัสผ่านไม่ตรงกับฐานข้อมูล กรุณาลองดูอีกครั้ง'));
      			}
      		}).bind(this));
        } else {
          RelationalDatabaseClient.query('SELECT * FROM User WHERE email = ?', [this.email], (function(error, results, fields) {
            if (error) {
              reject(new Error(`เกิดความผิดพลาดขณะติดต่อฐานข้อมูล กรุณาลองดูใหม่อีกครั้ง (${error})`));
            } else if (results.length > 0) {
      				reject(new Error('อีเมล์นี้ได้สมัครใช้งานแล้ว กรุณาเข้าสู่ระบบแทนที่จะสมัคร'));
      			} else {
              const md5Password = crypto.createHash('md5').update(this.password).digest('hex');
      			  RelationalDatabaseClient.query('INSERT INTO User (email, md5Password) VALUES ?', [[[this.email, md5Password]]], (function(error, results, fields) {
          			if (!error) {
          			  RelationalDatabaseClient.query('SELECT * FROM User WHERE email = ?', [this.email], (function(error, results, fields) {
                    if (error) {
                      reject(new Error(`เกิดความผิดพลาดขณะติดต่อฐานข้อมูล กรุณาลองดูใหม่อีกครั้ง (${error})`));
                    } else if (results.length > 0) {
                      this.request.session.uid = results[0].id;
                      this.request.session.save(() => {
          				      resolve('/authentication/role');
                      });
              			} else {
              			  reject(new Error(`เกิดความผิดพลาดขณะติดต่อฐานข้อมูล กรุณาลองดูใหม่อีกครั้ง`));
              		  }
              		}).bind(this));
          			} else {
          			  reject(new Error(`เกิดความผิดพลาดขณะที่กำลังบันทึกลงฐานข้อมูล กรุณาแจ้งผู้ดูแลรักษาระบบ (${error})`));
          			}
          		}).bind(this));
      			}
      		}).bind(this));
        }
      }
    });
  }
 	
  // Auto[MergingBegin]--->  
  private initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let action: ActionType = RequestHelper.getAction(request);
  	let schema: DataTableSchema = RequestHelper.getSchema(request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  
	  // Auto[Merging]--->
		RequestHelper.registerInput('74d75b70', "relational", "User", "email");
		ValidationHelper.registerInput('74d75b70', "Textbox 1", true, "คุณจำเป็นต้องกรอกที่อยู่อีเมล์");
    input = RequestHelper.getInput(request, '74d75b70');
    
    // Override data parsing and manipulation of Textbox 1 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('74b67c1e', "relational", "User", "password");
		ValidationHelper.registerInput('74b67c1e', "Textbox 2", true, "คุณจำเป็นต้องกรอกรหัสผ่าน");
    input = RequestHelper.getInput(request, '74b67c1e');
    
    // Override data parsing and manipulation of Textbox 2 here:
    // 
    
    if (input != null) data.push(input);
		RequestHelper.registerInput('d40a4961', "relational", "User", "confirm");
		ValidationHelper.registerInput('d40a4961', "Textbox 3", true, "คุณจำเป็นต้องยืนยันรหัสผ่าน");
    input = RequestHelper.getInput(request, 'd40a4961');
    
    // Override data parsing and manipulation of Textbox 3 here:
    // 
    
    if (input != null) data.push(input);
	  // <---Auto[Merging]
	  
	  // Auto[MergingEnd]--->
	  
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