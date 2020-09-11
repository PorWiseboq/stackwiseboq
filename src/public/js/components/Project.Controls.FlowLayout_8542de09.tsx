// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project as $Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
import {HTMLHelper} from '../helpers/HTMLHelper.js';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button, Base} from './Base.js';
// <---Auto[Import]

// Import additional modules here:
//

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;
declare let pug: any;

let Button = $Button;
let Project = $Project;

// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
interface IAutoBaseProps extends IBaseProps {
  forward: {classes: String, styles: any};
}
interface IAutoBaseState extends IBaseState {
}
// <---Auto[Interface]

// Declare or extend interfaces here:
//
interface IProps extends IAutoBaseProps {
  
}
interface IState extends IAutoBaseState {
  submitting: boolean
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  submitting: false
});

// Auto[ClassBegin]--->
class FlowLayout_8542de09 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("a84b67bd", "navigate", ["4586c89d","b4698194"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
  }
  
  protected componentDidMount(): void {
  	this.register();
  }
  
  protected componentWillUnmount(): void {
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    return super.getDataFromNotation(notation, inArray);
  }
  
  // Auto[Merging]--->
  protected onButtonSubmitting_a84b67bd(event: Event) {

    // Handle the event of onButtonSubmitting (Button 2) here:
    // 
    this.setState({submitting: true});
    
  }

  protected onButtonSubmitted_a84b67bd(event: Event) {

    // Handle the event of onButtonSubmitted (Button 2) here:
    // 
    this.setState({submitting: false});
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-10 offset-1 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="8542de09")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-12(internal-fsb-guid="e4c9a0a5")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.-fsb-preset-8141382a(style={'FsbInheritedPresets': '8141382a'}, internal-fsb-guid="71062a1a")
                    | ข้อตกลงระหว่าง WiseBOQ กับเจ้าของสินค้า
                  .internal-fsb-element.internal-fsb-allow-cursor.col-6.offset-3.-fsb-preset-41e62256(style={'FsbInheritedPresets': '41e62256'}, internal-fsb-guid="4e785829")
                  .internal-fsb-element.col-12(style={'null': 'undefined'}, internal-fsb-guid="278b0b1a")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-10.offset-1(style={'paddingTop': '30px', 'paddingBottom': '30px'}, internal-fsb-guid="8b9a0241")
                          | บันทึกข้อตกลงเบื้องต้น นี้ ทำขึ้น ระหว่าง บริษัท ไวซ์บีโอคิว จำกัด นิติบุคคลไทยซึ่งจัดตั้งขึ้นตามกฎหมายแห่งราชอาณาจักรไทย ทะเบียนนิติบุคคลเลขที่ …....................... สำนักงานแห่งใหญ่ตั้งอยู่ ณ …...................................รหัสไปรษณีย์ ซึ่งต่อไปในสัญญานี้เรียกว่า “WiseBOQ” ฝ่ายหนึ่ง กับ
                          div
                            br
                          div
                            | บริษัทคู่ค้า นิติบุคคลไทยซึ่งจัดตั้งขึ้นตามกฎหมายแห่งราชอาณาจักรไทย ซึ่งต่อไปในสัญญานี้เรียกว่า “เจ้าของสินค้า” อีกฝ่ายหนึ่ง
                          div
                            br
                          div
                            | โดยที่ WiseBOQ ซึ่งประกอบธุรกิจขายสินค้าผ่านทางออนไลน์แก่ลูกค้าประสงค์จะซื้อสินค้าจากเจ้าของสินค้า และเจ้าของสินค้าประสงค์จะทำการขายสินค้าแก่ WiseBOQ เพื่อบรรลุวัตถุประสงค์ของการซื้อขาย คู่สัญญาทั้งสองฝ่าย จึงได้ตกลงกันภายใต้ข้อตกลงและเงื่อนไขเบื้องต้นดังต่อไปนี้
                          div
                            br
                          div
                            | 1. เมื่อลูกค้าประสงค์จะซื้อสินค้า WiseBOQ จะส่งความต้องการซื้อสินค้านี้ไปยังเจ้าของสินค้าทุกเจ้าที่อยู่ในระบบเพื่อขอราคาสินค้า โดย WiseBOQ จะนำราคาของทุกเจ้าไปเสนอราคาให้ลูกค้าในลักษณะของการประมูล
                          div
                            br
                          div
                            | 2. WiseBOQ สงวนสิทธิ์ให้ลูกค้าตัดสินใจสั่งซื้อจากเจ้าของสินค้าด้วยตัวลูกค้าเอง ซึ่งลูกค้าอาจไม่ได้เลือกจากราคาต่ำที่สุดเสมอไป เมื่อลูกค้าเลือกได้แล้ว จึงสั่งซื้อสินค้านั้นผ่านระบบของ WiseBOQ
                          div
                            br
                          div
                            | 3. WiseBOQ ประสงค์จะซื้อสินค้าจากเจ้าของสินค้าเพื่อขายแก่ลูกค้าผ่านทางระบบออนไลน์ และเจ้าของสินค้าประสงค์จะขายสินค้าให้แก่ WiseBOQ ตามรายละเอียดคำสั่งซื้อของลูกค้าในแต่ละครั้ง
                          div
                            br
                          div
                            | 4. WiseBOQ และเจ้าของสินค้าตกลงว่า WiseBOQ จะโอนเงินค่าราคาซื้อขายสินค้าแก่เจ้าของสินค้าโดยหักค่าธรรมเนียมจัดการในอัตราร้อยละ 2.2, 1.0 หรือ 0.50 ตามที่เจ้าของสินค้าตกลงกับ WiseBOQ ของมูลค่าสุทธิของการขายสินค้าในแต่ละครั้ง (ก่อนภาษีมูลค่าเพิ่ม)
                          div
                            br
                          div
                            | หากเงินค่าซื้อขายคงเหลือเงินจำนวนเท่าใด WiseBOQ จะชำระให้แก่เจ้าของสินค้าภายในตามระยะเวลาที่ตกลงกัน
                          div
                            br
                          div
                            | 5. เจ้าของสินค้าจะต้องจัดเตรียมสินค้าที่มีความถูกต้องสมบูรณ์ตามรายการคำสั่งซื้อของลูกค้า และจัดส่งให้แก่ลูกค้าในนามของ WiseBOQ ซึ่งเป็นผู้ขาย โดยเจ้าของสินค้ารับประกันว่าสินค้ามีคุณภาพตรงตามมาตรฐานตามที่ได้ระบุหรือโฆษณาไว้ หากสินค้ามีวัสดุหรือคุณภาพไม่เป็นไปตามที่เจ้าของสินค้าได้ระบุหรือโฆษณาไว้ หรือ กรณีสินค้าที่ระบุความต้องการเป็น มอก. ต้องให้สินค้าที่ส่งเป็นไปตาม มอก. เท่านั้นเจ้าของสินค้าจะต้องยอมรับเงื่อนไขการแก้ไข หรือเปลี่ยนคืนสินค้าแก่ลูกค้าของ WiseBOQ ทุกกรณี โดยไม่มีเงื่อนไขอย่างใด ๆ ทั้งสิ้น
                          div
                            br
                          div
                            | 6. เจ้าของสินค้าจะต้องทำตามเงื่อนไขการจัดส่งสินค้าอย่างเคร่งครัดตามที่ระบุไว้ในคำสั่งซื้อ หากมีความเสียหายเกิดขึ้นแก่สินค้าก่อนส่งมอบสินค้าให้แก่ลูกค้า ไม่ว่าจะเป็นเหตุสุดวิสัย หรือความประมาทเลินเล่อของบุคคลภายนอกใดก็ตามหรือเหตุอื่นใดก็ตาม เจ้าของสินค้าตกลงรับผิดชอบในความเสียหายของสินค้านั้นแก่ลูกค้าและ/หรือ WiseBOQ เต็มจำนวน หรือ สามารถตกลงร่วมกันตามข้อตกลงครั้งนั้นๆ
                          div
                            br
                          div
                            | 7. กรรมสิทธิ์ในสินค้าจะโอนไปยังลูกค้าของ WiseBOQ ต่อเมื่อลูกค้าได้รับมอบสินค้าครบถ้วนเรียบร้อยพร้อมเซ็นรับใบรับมอบสินค้าเรียบร้อยแล้ว
                          div
                            br
                          div
                            | 8. WiseBOQ จะโอนเงินเพื่อชำระราคาซื้อขายสินค้าแก่เจ้าของสินค้าทุก ๆ วันศุกร์ของแต่ละสัปดาห์ หากวันศุกร์ตรงกับวันหยุด จะชำระภายในวันจันทร์หรือวันที่เปิดทำงานวันแรก ทั้งนี้ โดยมีเงื่อนไขว่า เจ้าของสินค้าจะต้องแสดงเอกสารที่มีรายละเอียดถูกต้องครบถ้วนตามที่ได้ตกลงกันผ่านทางระบบของ WiseBOQ คือ
                          div
                            br
                          div
                            |          a. ใบส่งสินค้าในนามของ WiseBOQ มีลายเซ็นรับสินค้าของลูกค้า
                          div
                            |          b. ใบสั่งซื้อ (PO) ของ WiseBOQ
                          div
                            br
                          div
                            |          หากชำระช้าเกินกว่าเวลาที่กำหนด WiseBOQ ยินดีชำระดอกเบี้ยปรับ 1.25% ต่อเดือนของยอดที่ค้างชำระ
                          div
                            br
                          div
                            | 9. กรณีลูกค้าของ WiseBOQ ชำระเงินค่าสินค้าผ่านทางบัตรเครดิต ลูกค้าตกลงจะเป็นผู้รับผิดชอบชำระค่าธรรมเนียมบัตรเครดิตเอง
                          div
                            br
                          div
                            | และหากกรณีมีการยกเลิกคำสั่งซื้อสินค้าอันเนื่องมาจากสินค้าไม่เป็นไปตามใบสั่งซื้อหรือสินค้ามีปัญหาหรือมีสภาพไม่สมบูรณ์ หรือ สินค้าหมดหรือขาดตลาดทำให้ไม่สามารถจัดส่งสินค้าแก่ลูกค้าได้ หรือกรณียกเลิกการซื้อขายอันมิใช่ความผิดของลูกค้า หาก WiseBOQ ต้องคืนเงินแก่ลูกค้าเป็นเงินจำนวนเท่าใด เจ้าของสินค้าตกลงและรับประกันว่าเจ้าของสินค้าจะต้องชำระคืนเงินค่าเสียหายจำนวนดังกล่าวให้แก่ WiseBOQ เต็มจำนวน
                          div
                            br
                          div
                            | 10. เจ้าของสินค้าจะส่งมอบสินค้าในนามของ WiseBOQ ซึ่งเป็นผู้ขายให้แก่ลูกค้า ณ คลังสินค้าหรือสถานที่ที่ลูกค้ากำหนดตามใบสั่งซื้อของ WiseBOQ โดยค่าใช้จ่ายในการขนส่งสินค้าลูกค้าตกลงจะเป็นผู้รับผิดชอบ ในกรณีที่ค่าขนส่งมิได้รวมอยู่ในราคาค่าสินค้า เจ้าของสินค้าจะต้องระบุราคาค่าขนส่งไว้ในใบเสนอราคาให้เป็นที่เรียบร้อยด้วย
                          div
                            br
                          div
                            | 11. ไม่ว่ากรณีใด ๆ WiseBOQ หรือเจ้าของสินค้า สามารถยกเลิกบันทึกข้อตกลงนี้ได้หากพบว่าเจ้าของสินค้า หรือ WiseBOQ ไม่ปฏิบัติตามเงื่อนไขและข้อตกลงที่ได้ตกลงกัน และหากมีข้อโต้แย้งหรือข้อพิพาทอย่างใด ๆ การตัดสินของ WiseBOQ จะถือเป็นที่สุด
                          div
                            br
                          div
                            | 12. หากลูกค้าของ WiseBOQ เรียกร้องความเสียหายอย่างใด ๆ อันเกิดจากการซื้อขายอันมิใช่ความผิดของลูกค้า และ WiseBOQ จะต้องชำระค่าเสียหายดังกล่าวแก่ลูกค้า และมีการพิสูจน์ว่าเกิดจากความผิดของเจ้าของสินค้า กรณีเช่นนี้ เจ้าของสินค้าตกลงยินยอมให้ WiseBOQ เรียกร้องค่าเสียหาย หรือค่าสินไหมทดแทนที่ตนต้องเสียไปคืนจากเจ้าของสินค้าได้เต็มจำนวน
                        input.internal-fsb-element(type="hidden", internal-fsb-guid="4586c89d")
                        input.internal-fsb-element.col-12(type="hidden", value="123", internal-fsb-guid="b4698194")
                        Button.internal-fsb-element.internal-fsb-allow-cursor.col-6.offset-3.btn.btn-primary(style={'marginTop': '30px'}, onClick=((event) => { window.internalFsbSubmit('a84b67bd', 'Store', event, ((results) => { this.manipulate('a84b67bd', 'Store', results); }).bind(this)); }).bind(this), type="button", disabled=this.state.submitting, onSubmitting=this.onButtonSubmitting_a84b67bd.bind(this), onSubmitted=this.onButtonSubmitted_a84b67bd.bind(this), internal-fsb-guid="a84b67bd")
                          .internal-fsb-element(internal-fsb-guid="a84b67bd-text")
                            | ข้าพเจ้าได้อ่านทั้งหมดแล้วและยอมรับข้อตกลง
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_8542de09', FlowLayout_8542de09);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.