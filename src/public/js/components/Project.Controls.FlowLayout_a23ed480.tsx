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
enum Step {
  SELECTION,
  PAYMENT,
  PAID
};

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
  step: Step
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  step: Step.SELECTION
});

// Auto[ClassBegin]--->
class FlowLayout_a23ed480 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {

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
  
  private getListOfChangeMerchandise(slot: number, index: number): void {
    const listing = this.getDataFromNotation(`Quote[${slot}].Listing`, true);
    let substitutes = this.getDataFromNotation(`Quote[${slot}].Auction[${index}].Substitute`, true);
    
    substitutes = substitutes.filter(substitute => substitute.columns['type'] != 0 && substitute.columns['type'] != 3);
    let results = substitutes.map((substitute) => {
      const list = listing.filter(item => item.keys['lid'] == substitute.keys['lid'])[0];
      let composed = [];
      
      if (substitute.columns['title'] != list.columns['list']) {
        composed.push(`${substitute.columns['title']} (จากเดิม ${list.columns['title']})`);
      } else {
        composed.push(`${substitute.columns['title']}`);
      }
      if (substitute.columns['size'] != list.columns['size']) {
        composed.push(`ขนาด ${substitute.columns['size']} (จากเดิม ${list.columns['size']})`);
      }
      if (substitute.columns['quantity'] != list.columns['quantity']) {
        composed.push(`จำนวน ${substitute.columns['quantity']} (จากเดิม ${list.columns['quantity']})`);
      }
      
      return composed.join(' ');
    });
    
    return results.join(', ') || 'ไม่มี';
  }
  
  private getListOfUnavailableMerchandise(slot: number, index: number): void {
    const listing = this.getDataFromNotation(`Quote[${slot}].Listing`, true);
    let substitutes = this.getDataFromNotation(`Quote[${slot}].Auction[${index}].Substitute`, true);
    
    substitutes = substitutes.filter(substitute => substitute.columns['type'] == 3);
    let results = substitutes.map((substitute) => {
      return substitute.columns['title'];
    });
    
    return results.join(', ') || 'ไม่มี';
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    if (notation.match(/^Quote\[[0-9]+\].Listing$/)) {
      let rows = super.getDataFromNotation(notation, true);
      let _auctions = super.getDataFromNotation(`${notation.split('.')[0]}.Auction`, true);
      
      for (let row of rows) {
        let auctions = CodeHelper.clone(_auctions);
        
        for (let auction of auctions) {
          auction.relations['Substitute'].rows = auction.relations['Substitute'].rows.filter(substitute => substitute.keys['lid'] == row.keys['lid']);
        }
      
      	row.relations['Auction'] = {
      	  source: null,
      	  group: 'Auction',
      	  rows: auctions
      	};
      }
      
      return rows;
    } else {
      return super.getDataFromNotation(notation, inArray);
    }
  }
  
  // Auto[Merging]--->
  protected onButtonClick_bdcbb907(event: Event) {

    // Handle the event of onButtonClick (Button 1) here:
    // 
    this.setState({
      step: Step.PAYMENT
    });
    
  }

  protected onButtonClick_c1c0694d(event: Event) {

    // Handle the event of onButtonClick (Button 4) here:
    // 
    this.setState({
      step: Step.SELECTION
    });
    
  }

  protected onButtonClick_d480ae4d(event: Event) {

    // Handle the event of onButtonClick (Button 5) here:
    // 
    this.setState({
      step: Step.PAID
    });
    
  }

  protected onButtonClick_3d97109b(event: Event) {

    // Handle the event of onButtonClick (Button 1) here:
    // 
    this.setState({
      step: Step.PAID
    });
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-12 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="a23ed480")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-10.offset-1.-fsb-preset-180079a2(style={'FsbInheritedPresets': '180079a2', display: (()=>{return (this.state.step == Step.SELECTION) ? 'block' : 'none';})()}, internal-fsb-guid="94ab9997")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.-fsb-preset-7a279686.col-12.offset-0(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="d4338262")
                    | ผลการประมูลราคาวัสดุก่อสร้าง
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="b864ab8e")
                    | ข้างล่างนี้คือผลการประมูล กรุณาเลือกร้านค้าที่คุณพอใจมากที่สุด เพื่อชำระเงินในขั้นถัดไป
                  .internal-fsb-element.col-6.col-sm-5.col-md-4.col-lg-3(style={'paddingLeft': '0px', 'paddingRight': '0px', 'fontSize': '13px', 'borderRightColor': 'rgba(0, 53, 117, 1)', 'borderLeftColor': 'rgba(0, 53, 117, 1)', 'borderTopColor': 'rgba(0, 53, 117, 1)', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'borderRightWidth': '1px', 'borderRightStyle': 'solid'}, internal-fsb-guid="0ed4d727")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12(style={'width': '200px', 'paddingLeft': '0px', 'paddingRight': '0px', 'borderBottomWidth': '1px', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'borderBottomStyle': 'solid', 'borderLeftColor': 'rgba(0, 53, 117, 1)', 'borderLeftStyle': 'solid', 'borderLeftWidth': '1px', 'borderTopColor': 'rgba(0, 53, 117, 1)', 'borderTopStyle': 'solid', 'borderTopWidth': '1px', 'paddingTop': '5px', 'paddingBottom': '5px'}, internal-fsb-guid="d223c869")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12(style={'fontWeight': 'bold'}, internal-fsb-guid="59979477")
                                | รายการสินค้า
                        each data, i in this.getDataFromNotation("Quote[0].Listing", true)
                          .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'borderBottomWidth': '1px', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'height': '65px', 'paddingTop': '3px', 'borderLeftStyle': 'solid', 'borderLeftColor': 'rgba(0, 53, 117, 1)', 'borderLeftWidth': '1px'}, key="item_" + i, internal-fsb-guid="11eb0e55")
                            .container-fluid
                              .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                .internal-fsb-element.offset-0.col-12.-fsb-preset-13b0cd97(style={'fontWeight': 'bold', 'FsbInheritedPresets': '13b0cd97'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Listing[" + i + "].title"))}, internal-fsb-guid="9d162b51")
                                .internal-fsb-element.offset-0.col-6.-fsb-self-13b0cd97(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Listing[" + i + "].size"))}, internal-fsb-guid="13b0cd97")
                                .internal-fsb-element.offset-0.col-6.-fsb-preset-13b0cd97(style={'FsbInheritedPresets': '13b0cd97'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Listing[" + i + "].quantity"))}, internal-fsb-guid="57421653")
                        .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'right', 'fontWeight': 'bold'}, internal-fsb-guid="94e22e23")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12(style={'paddingBottom': '5px', 'paddingTop': '5px'}, internal-fsb-guid="83de46b7")
                                | ราคารวม
                  .internal-fsb-element.internal-fsb-allow-cursor.col-6.col-sm-7.col-md-8.col-lg-9(style={'overflowX': 'auto', 'MsOverflowX': 'auto', 'overflowY': 'hidden', 'MsOverflowY': 'hidden', 'paddingLeft': '0px', 'paddingRight': '0px', 'fontSize': '13px', 'borderTopColor': 'rgba(0, 53, 117, 1)', 'borderRightColor': 'rgba(0, 53, 117, 1)', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'borderBottomStyle': 'solid', 'borderBottomWidth': '1px', 'borderRightStyle': 'solid', 'borderTopStyle': 'solid', 'borderRightWidth': '1px', 'borderTopWidth': '1px'}, internal-fsb-guid="56392ad7")
                    .internal-fsb-element(style={'display': 'block', 'whiteSpace': 'nowrap'}, internal-fsb-guid="ebeaa554")
                      each data, i in this.getDataFromNotation("Quote[0].Listing.Auction", true)
                        .internal-fsb-element(style={'width': '120px', 'display': 'inline-block', 'borderRightWidth': '1px', 'borderRightColor': 'rgba(0, 53, 117, 1)', 'borderRightStyle': 'solid', 'paddingLeft': '0px', 'paddingRight': '0px', 'borderTopColor': 'rgba(0, 53, 117, 1)'}, key="item_" + i, internal-fsb-guid="ba180c3c")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'borderBottomWidth': '1px', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'fontWeight': 'bold', 'textAlign': 'center', 'FsbInheritedPresets': '13b0cd97', 'paddingTop': '5px', 'paddingBottom': '5px', 'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Listing.Auction[" + i + "].Store.name"))}, internal-fsb-guid="ce8a654a")
                              each data, j in this.getDataFromNotation("Quote[0].Listing.Auction[" + i + "].Substitute", true)
                                .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px'}, key="item_" + j, internal-fsb-guid="8d3daac0")
                                  .container-fluid
                                    .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                      .internal-fsb-element.col-12(style={'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(0, 53, 117, 1)', 'borderBottomWidth': '1px', 'paddingLeft': '0px', 'paddingRight': '0px', 'height': '65px', 'paddingTop': '3px'}, internal-fsb-guid="4741d7c7")
                                        .container-fluid
                                          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                            .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'fontWeight': 'bold', 'FsbInheritedPresets': '13b0cd97', 'paddingLeft': '2px', 'paddingRight': '2px', 'textAlign': 'center'}, data-toggle="tooltip", data-placement="top", title=this.getDataFromNotation("Quote[0].Listing.Auction[" + i + "].Substitute[" + j + "].title"), dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Listing.Auction[" + i + "].Substitute[" + j + "].title"))}, internal-fsb-guid="1eae4292")
                                            .internal-fsb-element.col-6.-fsb-preset-13b0cd97(style={'FsbInheritedPresets': '13b0cd97', 'paddingLeft': '2px', 'paddingRight': '0px', 'textAlign': 'center'}, title=this.getDataFromNotation("Quote[0].Listing.Auction[" + i + "].Substitute[" + j + "].size"), data-toggle="tooltip", data-placement="top", dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Listing.Auction[" + i + "].Substitute[" + j + "].size"))}, internal-fsb-guid="b5026407")
                                            .internal-fsb-element.col-6.-fsb-preset-13b0cd97(style={'FsbInheritedPresets': '13b0cd97', 'paddingLeft': '2px', 'paddingRight': '0px', 'textAlign': 'center'}, title=this.getDataFromNotation("Quote[0].Listing.Auction[" + i + "].Substitute[" + j + "].quantity"), data-toggle="tooltip", data-placement="top", dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Quote[0].Listing.Auction[" + i + "].Substitute[" + j + "].quantity"))}, internal-fsb-guid="8dca02ed")
                                            .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'textAlign': 'center', 'FsbInheritedPresets': '13b0cd97', 'paddingLeft': '2px', 'paddingRight': '2px', 'color': 'rgba(69, 69, 69, 1)'}, title=this.getDataFromNotation("Quote[0].Listing.Auction[" + i + "].Substitute[" + j + "].price") + ' บาท', data-toggle="tooltip", data-placement="top", internal-fsb-guid="d58e0636")
                                              | #{this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].Substitute.price')} บาท
                              .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'paddingBottom': '10px'}, internal-fsb-guid="65beb763")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-12.-fsb-preset-13b0cd97(style={'fontWeight': 'bold', 'paddingBottom': '5px', 'FsbInheritedPresets': '13b0cd97', 'textAlign': 'center', 'paddingTop': '5px', 'color': 'rgba(22, 98, 250, 1)', 'paddingLeft': '2px', 'paddingRight': '2px'}, internal-fsb-guid="d40e3b62")
                                      | #{this.getDataFromNotation('Quote[0].Listing.Auction[' + i + '].price')} บาท
                                    .internal-fsb-element.offset-5(style={padding: '0px'}, internal-fsb-guid="6e068626")
                                      input(style={'display': 'block'}, type="checkbox")
            Button.internal-fsb-element.-fsb-preset-180079a2.btn.btn-primary.btn-sm.col-4.offset-4(style={'marginTop': '15px', display: (()=>{return (this.state.step == Step.SELECTION) ? 'block' : 'none';})()}, type="button", onClick=this.onButtonClick_bdcbb907.bind(this), internal-fsb-guid="bdcbb907")
              .internal-fsb-element(internal-fsb-guid="bdcbb907-text")
                | ถัดไป: เลือกวิธีการจ่ายเงิน
            .internal-fsb-element.col-10.offset-1.-fsb-preset-180079a2(style={'FsbInheritedPresets': '180079a2', display: (()=>{return (this.state.step == Step.PAYMENT) ? 'block' : 'none';})()}, internal-fsb-guid="41288a78")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="b0e94808")
                    | จ่ายเงินค่าสินค้า
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="a68112ee")
                    | กรุณาเลือกว่าจะจ่ายโดยการโอนเงินไปยังธนาคาร หรือว่าจะให้ตัดผ่านบัตรเครดิต
                  .internal-fsb-element.col-6.offset-0(style={'borderRightWidth': '1px', 'borderRightColor': 'rgba(22, 98, 250, 1)', 'borderRightStyle': 'solid'}, internal-fsb-guid="179c943c")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'textAlign': 'center', 'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="4040dba7")
                          | โอนเงินผ่านธนาคาร
                        .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'textAlign': 'center', 'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="16ed2784")
                          | กรุณาโอนเงินไปที่ธนาคารเอบีซี สาขาห้าหกเจ็ด
                          div
                            | นายกอขอคอ
                        .internal-fsb-element.col-12(internal-fsb-guid="7443b335")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12.-fsb-preset-b5cd72c0(style={'textAlign': 'center', 'FsbInheritedPresets': 'b5cd72c0', 'fontWeight': 'bold', 'marginBottom': '5px', 'fontSize': '14px'}, internal-fsb-guid="ae38da00")
                                | จำนวนเงิน
                              .internal-fsb-element.col-12.-fsb-preset-b5cd72c0(style={'FsbInheritedPresets': 'b5cd72c0', 'textAlign': 'center'}, internal-fsb-guid="9699d64d")
                                | หนึ่งหมื่นห้าพันบาทยี่สิบสตางค์ถ้วน
                        .internal-fsb-element.col-12(style={'marginTop': '15px'}, internal-fsb-guid="a3c6554b")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12.-fsb-preset-b5cd72c0(style={'textAlign': 'center', 'FsbInheritedPresets': 'b5cd72c0', 'fontWeight': 'bold', 'marginBottom': '5px', 'fontSize': '14px'}, internal-fsb-guid="782d3986")
                                | โปรดดำเนินการผ่านธนาคาร
                              .internal-fsb-element.col-12.-fsb-preset-b5cd72c0(style={'FsbInheritedPresets': 'b5cd72c0', 'textAlign': 'center', 'marginBottom': '15px'}, internal-fsb-guid="5eeaed97")
                                | คุณอาจเปิดหน้านี้ทิ้งไว้หรือเข้าสู่ระบบเพื่อกลับเข้ามายังหน้านี้ในภายหลังได้เช่นกัน
                              .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="c6cd6a36")
                                input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginTop': '5px'}, type="text", placeholder="วันและเวลาที่โอนสำเร็จ ddmmyyyy hhmm")
                              .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="0c59a0a4")
                                input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginTop': '10px'}, type="text", placeholder="ชื่อผู้ที่ได้ทำการโอน")
                              .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="5cab012e")
                                input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginTop': '10px'}, type="text", placeholder="ชื่อธนาคารและสาขาต้นทาง")
                  .internal-fsb-element.col-6.offset-0(style={'borderLeftColor': 'rgba(22, 98, 250, 1)', 'borderLeftStyle': 'solid', 'borderLeftWidth': '1px'}, internal-fsb-guid="8173e6a3")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'textAlign': 'center', 'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="81a37061")
                          | จ่ายผ่านบัตรเครดิต
                        .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'textAlign': 'center', 'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="9b4e1a4c")
                          | กรุณาเลือกประเภทบัตรเครดิต กรอกหมายเลขบัตร วันหมดอายุ พร้อมทั้งหมายเลข cvv ที่อยู่หลังบัตร
                        .internal-fsb-element.col-10.offset-1(dangerouslySetInnerHTML={__html: "<style type=\"text/css\">\n.StripeElement {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n</style>\n<form action=\"/charge\" method=\"post\" id=\"payment-form\">\n  <div class=\"form-row\">\n    <div id=\"card-element\">\n      <!-- A Stripe Element will be inserted here. -->\n    </div>\n    <!-- Used to display form errors. -->\n    <div id=\"card-errors\" role=\"alert\"></div>\n  </div>\n</form>"}, internal-fsb-guid="a1407abd")
                        .internal-fsb-element.col-12(internal-fsb-guid="26a1c7b0")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-2.offset-3(style={'marginTop': '15px', 'marginRight': '10px', display: (()=>{return (this.state.step == Step.PAYMENT) ? 'block' : 'none';})()}, type="button", onClick=this.onButtonClick_c1c0694d.bind(this), internal-fsb-guid="c1c0694d")
              .internal-fsb-element(internal-fsb-guid="c1c0694d-text")
                | ย้อนกลับ
            Button.internal-fsb-element.internal-fsb-allow-cursor.offset-0.btn.btn-primary.btn-sm.col-2(style={'marginTop': '15px', display: (()=>{return (this.state.step == Step.PAYMENT) ? 'block' : 'none';})()}, type="button", onClick=this.onButtonClick_d480ae4d.bind(this), internal-fsb-guid="d480ae4d")
              .internal-fsb-element(internal-fsb-guid="d480ae4d-text")
                | โอนเงินผ่านธนาคาร
            Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-2(style={'marginTop': '15px', 'marginLeft': '10px', display: (()=>{return (this.state.step == Step.PAYMENT) ? 'block' : 'none';})()}, type="button", onClick=this.onButtonClick_3d97109b.bind(this), internal-fsb-guid="3d97109b")
              .internal-fsb-element(internal-fsb-guid="3d97109b-text")
                | จ่ายผ่านบัตร
            .internal-fsb-element.-fsb-preset-180079a2.col-10.offset-1(style={'FsbInheritedPresets': '180079a2', display: (()=>{return (this.state.step == Step.PAID) ? 'block' : 'none';})()}, internal-fsb-guid="084a0c00")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="b7b1b09d")
                    | จ่ายเงินเรียบร้อยแล้ว
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="907bd1cd")
                    | ทางเรากำลังรออนุมัติการจ่ายเงิน กรุณารอทางเราติดต่อกลับผ่านทางโทรศัพท์
                  .internal-fsb-element.col-12(style={'position': 'relative'}, internal-fsb-guid="4541551d")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: "<div class=\"loader\"></div><style type=\"text/css\">.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n}\n.loader {\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(0,199,253, 0.2);\n  border-right: 1.1em solid rgba(0,199,253, 0.2);\n  border-bottom: 1.1em solid rgba(0,199,253, 0.2);\n  border-left: 1.1em solid #00c7fd;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}</style> "}, internal-fsb-guid="407dc97d")
                        .internal-fsb-element.col-12(style={'position': 'absolute', 'top': '0px', 'left': '0px', 'right': '0px'}, internal-fsb-guid="bbc12ce1")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.offset-0(style={'fontSize': '13px', 'color': 'rgba(22, 98, 250, 1)', 'top': '152px', 'width': '160px', 'left': '50%', 'marginLeft': '-80px', 'textAlign': 'center'}, internal-fsb-guid="cac28984")
                                | กำลังรออนุมัติการจ่ายเงิน
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_a23ed480', FlowLayout_a23ed480);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.