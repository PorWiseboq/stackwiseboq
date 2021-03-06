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
enum Status {
  CREATE,
  LIST,
  SUBSTITUTE,
  DELIVERY
}

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
  status: Status;
  inserted: boolean;
  disabled: boolean;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  status: Status.CREATE,
  inserted: false,
  disabled: false
});

// Auto[ClassBegin]--->
class FlowLayout_b2020622 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("9ce000e1", "insert", ["5a972a57","607d8ee2","5752cb4d","2acce16d"], {initClass: null, submitCrossType: null});
    DataManipulationHelper.register("1bc39a2b", "update", ["5a972a57","607d8ee2","5d34dc3b","5752cb4d"], {initClass: null, submitCrossType: null});
    DataManipulationHelper.register("d910ad00", "delete", ["41bdc9b3"], {initClass: null, submitCrossType: null});
    DataManipulationHelper.register("05179431", "insert", ["54e20435","31894d87","b2321320","eda631c1"], {initClass: null, submitCrossType: null});
    DataManipulationHelper.register("67c431d0", "update", ["b6c9ad89","a0b78888","cc34eced","9036c707"], {initClass: null, submitCrossType: null});
    DataManipulationHelper.register("0e75306a", "navigate", ["33408187","230ab296","babc9e30","9200d56a","12403b79","c3daa46d","0606ea02","4a397863","147c9060","ab790b53"], {initClass: null, submitCrossType: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
    this.state.inserted = (super.getDataFromNotation('Quote.qid') !== null);
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    if (!this.state.inserted) {
      return [''];
    } else {
      if (notation.indexOf('Quote.qid') != -1) {
        notation = 'Quote.qid';
      }
      
      let data = super.getDataFromNotation(notation, inArray);
      let splited = notation.split('.');
      
      if (inArray) {
        switch (splited[0]) {
          case 'Quote':
            if (data.length == 0) {
              data.push('');
            }
            break;
          case 'Listing':
            break;
        }
      }
      
      return data;
    }
  }
  
  protected componentDidMount() {
    this.register();
  }
  
  private getDisplay(status: Status) {
    return (this.state.status == status) ? 'block' : 'none';
  }
  
  // Auto[Merging]--->
  protected onButtonSubmitting_9ce000e1(event: Event) {

    // Handle the event of onButtonSubmitting (Button 2) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_9ce000e1(event: Event) {

    // Handle the event of onButtonSubmitted (Button 2) here:
    // 
    this.setState({disabled: false});
    
  }

  protected onButtonSuccess_9ce000e1(event: Event) {

    // Handle the event of onButtonSuccess (Button 2) here:
    // 
    this.setState({
      status: Status.LIST,
      inserted: true
    });
    
  }

  protected onButtonSubmitting_1bc39a2b(event: Event) {

    // Handle the event of onButtonSubmitting (Button 2) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_1bc39a2b(event: Event) {

    // Handle the event of onButtonSubmitted (Button 2) here:
    // 
    this.setState({disabled: false});
    
  }

  protected onButtonSuccess_1bc39a2b(event: Event) {

    // Handle the event of onButtonSuccess (Button 2) here:
    // 
    this.setState({
      status: Status.LIST
    });
    
  }

  protected onButtonSubmitting_d910ad00(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_d910ad00(event: Event) {

    // Handle the event of onButtonSubmitted (Button 1) here:
    // 
    this.setState({disabled: false});
    
  }

  protected onButtonSubmitting_05179431(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_05179431(event: Event) {

    // Handle the event of onButtonSubmitted (Button 1) here:
    // 
    this.setState({disabled: false});
    
  }

  protected onButtonSuccess_05179431(event: Event) {

    // Handle the event of onButtonSuccess (Button 1) here:
    // 
    ReactDOM.findDOMNode(this.refs.title).value = '';
    ReactDOM.findDOMNode(this.refs.size).value = '';
    ReactDOM.findDOMNode(this.refs.quantity).value = '';
    
  }

  protected onButtonClick_1bb72b1a(event: Event) {

    // Handle the event of onButtonClick (Button 4) here:
    // 
    this.setState({
      status: Status.CREATE
    });
    
  }

  protected onButtonSubmitting_1bb72b1a(event: Event) {

    return EventHelper.cancel(event);
  }

  protected onButtonClick_011ad9dc(event: Event) {

    if (this.getDataFromNotation("Listing", true).length == 0) {
      alert('กรุณาระบุรายการวัสดุก่อสร้างอย่างน้อยหนึ่งรายการ');
      return EventHelper.cancel(event);
    }

    // Handle the event of onButtonClick (Button 5) here:
    // 
    this.setState({
      status: Status.SUBSTITUTE
    });
    
  }

  protected onButtonClick_88297439(event: Event) {

    // Handle the event of onButtonClick (Button 6) here:
    // 
    this.setState({
      status: Status.LIST
    });
    
  }

  protected onButtonSubmitting_88297439(event: Event) {

    // Handle the event of onButtonSubmitting (Button 6) here:
    // 
    
    return EventHelper.cancel(event);
  }

  protected onButtonSubmitting_67c431d0(event: Event) {

    // Handle the event of onButtonSubmitting (Button 7) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_67c431d0(event: Event) {

    // Handle the event of onButtonSubmitted (Button 7) here:
    // 
    this.setState({disabled: false});
    
  }

  protected onButtonSuccess_67c431d0(event: Event) {

    // Handle the event of onButtonSuccess (Button 7) here:
    // 
    this.setState({
      status: Status.DELIVERY
    });
    
  }

  protected onButtonClick_a7592071(event: Event) {

    // Handle the event of onButtonClick (Button 1) here:
    // 
    this.setState({
      status: Status.SUBSTITUTE
    });
    
  }

  protected onButtonSubmitting_a7592071(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    
    return EventHelper.cancel(event);
  }

  protected onButtonSubmitting_0e75306a(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_0e75306a(event: Event) {

    // Handle the event of onButtonSubmitted (Button 1) here:
    // 
    this.setState({disabled: false});
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-12 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="b2020622")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-10.offset-1.-fsb-self-180079a2(style={display: (()=>{return this.getDisplay(Status.CREATE);})()}, internal-fsb-guid="180079a2")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.-fsb-self-7a279686(internal-fsb-guid="7a279686")
                    | ต้องการสืบราคา
                  .internal-fsb-element.col-12.-fsb-self-4839e353(internal-fsb-guid="4839e353")
                    | กรุณาตั้งชื่อรายการและรายละเอียดโดยย่อ
                  .internal-fsb-element.col-12(internal-fsb-guid="8b1a4a93")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="5a972a57")
                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", placeholder="ชื่อรายการ", required=true, disabled=this.state.disabled, defaultValue=this.getDataFromNotation("Quote.title"))
                        .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="607d8ee2")
                          textarea.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginTop': '5px'}, type="text", rows="3", placeholder="รายละเอียดโดยย่อ", disabled=this.state.disabled, defaultValue=this.getDataFromNotation("Quote.description"))
                  input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote.qid"), internal-fsb-guid="5d34dc3b")
                  input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote.uid"), internal-fsb-guid="5752cb4d")
                  input.internal-fsb-element.col-12(type="hidden", value="0", internal-fsb-guid="2acce16d")
                  Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-4.offset-4(style={'marginTop': '15px', display: (()=>{return this.state.inserted ? 'none' : 'block'})()}, type="button", onSuccess=this.onButtonSuccess_9ce000e1.bind(this), disabled=this.state.disabled, onSubmitting=this.onButtonSubmitting_9ce000e1.bind(this), onSubmitted=this.onButtonSubmitted_9ce000e1.bind(this), onClick=((event) => { window.internalFsbSubmit('9ce000e1', 'Quote', event, ((results) => { this.manipulate('9ce000e1', 'Quote', results); }).bind(this)); }).bind(this), internal-fsb-guid="9ce000e1")
                    .internal-fsb-element(internal-fsb-guid="9ce000e1-text")
                      | ถัดไป: ระบุรายการวัสดุก่อสร้าง
                  Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-4.offset-4(style={'marginTop': '15px', display: (()=>{return this.state.inserted ? 'block' : 'none'})()}, type="button", onSuccess=this.onButtonSuccess_1bc39a2b.bind(this), disabled=this.state.disabled, onSubmitting=this.onButtonSubmitting_1bc39a2b.bind(this), onSubmitted=this.onButtonSubmitted_1bc39a2b.bind(this), onClick=((event) => { window.internalFsbSubmit('1bc39a2b', 'Quote', event, ((results) => { this.manipulate('1bc39a2b', 'Quote', results); }).bind(this)); }).bind(this), internal-fsb-guid="1bc39a2b")
                    .internal-fsb-element(internal-fsb-guid="1bc39a2b-text")
                      | ถัดไป: ระบุรายการวัสดุก่อสร้าง
            .internal-fsb-element.col-10.offset-1.-fsb-preset-180079a2(style={'FsbInheritedPresets': '180079a2', display: (()=>{return this.getDisplay(Status.LIST);})()}, internal-fsb-guid="7600ca53")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="1e4c0d68")
                    | รายการวัสดุก่อสร้าง
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353', 'marginBottom': '10px'}, internal-fsb-guid="65ca1989")
                    | กรุณาระบุรายละเอียดสินค้า (ชื่อวัสดุ, ขนาด, ปริมาณ)
                  .internal-fsb-element.col-12.offset-0.-fsb-self-97d707b7(style={'minHeight': '22px', 'FsbReusableName': '', 'FsbReusableId': '97d707b7', 'marginTop': '5px'}, internal-fsb-guid="97d707b7")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        each data, i in this.getDataFromNotation("Listing", true)
                          .internal-fsb-element.col-12(style={'marginBottom': '5px'}, key="item_" + i, internal-fsb-guid="ce24263d")
                            .container-fluid
                              .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Listing[" + i + "].lid"), internal-fsb-guid="41bdc9b3")
                                .internal-fsb-element.col-6.offset-0(style={padding: '0px'}, internal-fsb-guid="2ce10e8e")
                                  input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=true, value=this.getDataFromNotation("Listing[" + i + "].title"), defaultValue=this.getDataFromNotation("Listing[" + i + "].title"))
                                .internal-fsb-element.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="0d2c5b71")
                                  input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=true, value=this.getDataFromNotation("Listing[" + i + "].size"), defaultValue=this.getDataFromNotation("Listing[" + i + "].size"))
                                .internal-fsb-element.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="1cabb5c5")
                                  input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=true, value=this.getDataFromNotation("Listing[" + i + "].quantity"), defaultValue=this.getDataFromNotation("Listing[" + i + "].quantity"))
                                Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-danger.btn-sm.col-2.offset--1(type="button", disabled=this.state.disabled, onSubmitting=this.onButtonSubmitting_d910ad00.bind(this), onSubmitted=this.onButtonSubmitted_d910ad00.bind(this), onClick=((event) => { window.internalFsbSubmit('d910ad00', 'Listing', event, ((results) => { this.manipulate('d910ad00', 'Listing', results); }).bind(this)); }).bind(this), internal-fsb-guid="d910ad00")
                                  .internal-fsb-element(internal-fsb-guid="d910ad00-text")
                                    | ลบ
                        .internal-fsb-element.col-12(internal-fsb-guid="2b7a46e0")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote.qid"), internal-fsb-guid="eda631c1")
                              .internal-fsb-element.col-6.offset-0(style={padding: '0px'}, internal-fsb-guid="54e20435")
                                input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, ref="title", type="text", placeholder="วัสดุ", required=true, disabled=this.state.disabled)
                              .internal-fsb-element.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="31894d87")
                                input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, ref="size", type="text", placeholder="ขนาด", required=true, disabled=this.state.disabled)
                              .internal-fsb-element.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="b2321320")
                                input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, ref="quantity", type="text", placeholder="ปริมาณ", required=true, disabled=this.state.disabled)
                              Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-2.offset-0(type="button", onSuccess=this.onButtonSuccess_05179431.bind(this), onSubmitting=this.onButtonSubmitting_05179431.bind(this), disabled=this.state.disabled, onSubmitted=this.onButtonSubmitted_05179431.bind(this), onClick=((event) => { window.internalFsbSubmit('05179431', 'Listing', event, ((results) => { this.manipulate('05179431', 'Listing', results); }).bind(this)); }).bind(this), internal-fsb-guid="05179431")
                                .internal-fsb-element(internal-fsb-guid="05179431-text")
                                  | เพิ่ม
                  Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-4.offset-2(style={'marginTop': '15px', 'marginRight': '10px'}, type="button", onSubmitting=this.onButtonSubmitting_1bb72b1a.bind(this), onClick=this.onButtonClick_1bb72b1a.bind(this), disabled=this.state.disabled, internal-fsb-guid="1bb72b1a")
                    .internal-fsb-element(internal-fsb-guid="1bb72b1a-text")
                      | ย้อนกลับ
                  Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-4.offset-0(style={'marginTop': '15px', 'marginLeft': '10px'}, type="button", onClick=this.onButtonClick_011ad9dc.bind(this), disabled=this.state.disabled, internal-fsb-guid="011ad9dc")
                    .internal-fsb-element(internal-fsb-guid="011ad9dc-text")
                      | ถัดไป: ระบุสินค้าเทียบเคียง
            .internal-fsb-element.-fsb-preset-180079a2.col-10.offset-1(style={'FsbInheritedPresets': '180079a2', display: (()=>{return this.getDisplay(Status.SUBSTITUTE);})()}, internal-fsb-guid="b1a8c59c")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="b92865ba")
                    | สินค้าเทียบเคียง
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="a5bc6206")
                    | กรุณาเลือกว่าในกรณีที่หาวัสดุตามที่ต้องการไม่ได้จะให้ใช้วิธีใด?
                  .internal-fsb-element.col-12(internal-fsb-guid="82a1da21")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        label.internal-fsb-element.col-4.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="a60b855b")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-2.offset-0.-fsb-self-b6c9ad89(style={padding: '0px'}, internal-fsb-guid="b6c9ad89")
                                input(type="radio", name="substitute", value="0", required=true, disabled=this.state.disabled, defaultChecked=this.getDataFromNotation("Quote.substitute") == '0')
                              .internal-fsb-element.col-10.offset-0.-fsb-self-b5cd72c0(internal-fsb-guid="b5cd72c0")
                                | ทดแทน
                              .internal-fsb-element.col-10.offset-2.-fsb-self-8050ab15(internal-fsb-guid="8050ab15")
                                | สินค้าทดแทนใช้งานได้เหมือนกันแต่ประหยัดกว่า
                        label.internal-fsb-element.col-4.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="7a03394d")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="a0b78888")
                                input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, type="radio", name="substitute", value="1", required=true, disabled=this.state.disabled, defaultChecked=this.getDataFromNotation("Quote.substitute") == '1')
                              .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="35767bbc")
                                | เทียบเท่า
                              .internal-fsb-element.col-10.offset-2.-fsb-preset-8050ab15(style={'FsbInheritedPresets': '8050ab15'}, internal-fsb-guid="80438932")
                                | เกรดเดียวกันหรือเทียบเท่า
                        label.internal-fsb-element.col-4.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="eee57414")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="cc34eced")
                                input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, type="radio", name="substitute", value="2", required=true, disabled=this.state.disabled, defaultChecked=this.getDataFromNotation("Quote.substitute") == '2')
                              .internal-fsb-element.col-10.offset-0.-fsb-preset-b5cd72c0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="127c0175")
                                | เจาะจง
                              .internal-fsb-element.col-10.offset-2.-fsb-preset-8050ab15(style={'FsbInheritedPresets': '8050ab15'}, internal-fsb-guid="8e3dd80d")
                                | เจาะจงตามที่ระบุเท่านั้น
                  input.internal-fsb-element(type="hidden", value=this.getDataFromNotation("Quote.qid"), internal-fsb-guid="9036c707")
                  Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-4.offset-2(style={'marginRight': '10px'}, type="button", onSubmitting=this.onButtonSubmitting_88297439.bind(this), onClick=this.onButtonClick_88297439.bind(this), disabled=this.state.disabled, internal-fsb-guid="88297439")
                    .internal-fsb-element(internal-fsb-guid="88297439-text")
                      | ย้อนกลับ
                  Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-4.offset-0(style={'marginLeft': '10px'}, type="button", onSuccess=this.onButtonSuccess_67c431d0.bind(this), disabled=this.state.disabled, onSubmitting=this.onButtonSubmitting_67c431d0.bind(this), onSubmitted=this.onButtonSubmitted_67c431d0.bind(this), onClick=((event) => { window.internalFsbSubmit('67c431d0', 'Quote', event, ((results) => { this.manipulate('67c431d0', 'Quote', results); }).bind(this)); }).bind(this), internal-fsb-guid="67c431d0")
                    .internal-fsb-element(internal-fsb-guid="67c431d0-text")
                      | ถัดไป: ระบุข้อมูลจัดส่งและระยะเวลา
            .internal-fsb-element.col-10.offset-1.-fsb-preset-180079a2(style={'FsbInheritedPresets': '180079a2', display: (()=>{return this.getDisplay(Status.DELIVERY);})()}, internal-fsb-guid="e01619d3")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.-fsb-preset-7a279686(style={'FsbInheritedPresets': '7a279686'}, internal-fsb-guid="52a61b94")
                    | ข้อมูลจัดส่งและระยะเวลา
                  .internal-fsb-element.col-12.-fsb-preset-4839e353(style={'FsbInheritedPresets': '4839e353'}, internal-fsb-guid="a1140119")
                    | กรุณาระบุระยะเวลาว่าสามารถรอคอยได้นานที่สุดแค่ไหน นำสินค้ามาส่งให้ หรือว่าจะไปรับสินค้าด้วยตนเอง
                  .internal-fsb-element.col-12(internal-fsb-guid="6d1432dc")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        label.internal-fsb-element.col-4.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="9a5a06e9")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="33408187")
                                input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, type="checkbox", disabled=this.state.disabled, defaultChecked=this.getDataFromNotation("Quote.hoursChecked") === true)
                              .internal-fsb-element.col-10.offset-0.-fsb-preset-b5cd72c0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="9875301c")
                                | ต้องการราคาภายในเวลา
                              .internal-fsb-element.-fsb-preset-8050ab15.col-10.offset-2(style={'FsbInheritedPresets': '8050ab15'}, internal-fsb-guid="e51ca172")
                                | กรุณาระบุเป็นจำนวนเต็ม
                        .internal-fsb-element.col-4.offset-0(style={padding: '0px'}, internal-fsb-guid="230ab296")
                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", placeholder="จำนวนชั่วโมง", disabled=this.state.disabled, defaultValue=this.getDataFromNotation("Quote.hours"))
                        .internal-fsb-element.col-4.offset-0.-fsb-preset-b5cd72c0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="1d96cc04")
                          | ชั่วโมง
                  .internal-fsb-element.col-12(internal-fsb-guid="b33625ae")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        label.internal-fsb-element.col-4.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="78890e54")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="babc9e30")
                                input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, type="checkbox", disabled=this.state.disabled, defaultChecked=this.getDataFromNotation("Quote.deliverChecked") === true)
                              .internal-fsb-element.col-10.offset-0.-fsb-preset-b5cd72c0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="23ba11a8")
                                | วันที่ต้องใช้สินค้า
                              .internal-fsb-element.col-10.offset-2.-fsb-preset-8050ab15(style={'FsbInheritedPresets': '8050ab15'}, internal-fsb-guid="b77168a5")
                                | กรุณาระบุ ddmmyyyy เช่น 15102563
                        .internal-fsb-element.col-4.offset-0(style={padding: '0px'}, internal-fsb-guid="9200d56a")
                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", placeholder="ddmmyyyy", disabled=this.state.disabled, defaultValue=this.getDataFromNotation("Quote.deliverAt"))
                  .internal-fsb-element.col-12.offset-0(internal-fsb-guid="22b7c898")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        label.internal-fsb-element.col-4.offset-0(style={'FsbInheritedPresets': '', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="47881859")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-2.offset-0.-fsb-preset-b6c9ad89(style={padding: '0px'}, internal-fsb-guid="12403b79")
                                input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, type="radio", name="delivery", value="1", required=true, disabled=this.state.disabled, defaultChecked=this.getDataFromNotation("Quote.pickup") == '1')
                              .internal-fsb-element.col-10.offset-0.-fsb-preset-b5cd72c0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="b8a9d038")
                                | ไปรับสินค้าด้วยตนเอง
                              .internal-fsb-element.col-10.offset-2.-fsb-preset-8050ab15(style={'FsbInheritedPresets': '8050ab15'}, internal-fsb-guid="c00c3c67")
                                | กรุณาระบุหมายเลขโทรศัพท์
                        .internal-fsb-element.col-4.offset-0(style={padding: '0px'}, internal-fsb-guid="c3daa46d")
                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", placeholder="หมายเลขโทรศัพท์", required=true, disabled=this.state.disabled, defaultValue=this.getDataFromNotation("Quote.number"))
                  .internal-fsb-element.col-12(internal-fsb-guid="22543809")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        label.internal-fsb-element.col-4.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="165d186a")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-2.offset-0.-fsb-preset-b6c9ad89(style={padding: '0px'}, internal-fsb-guid="0606ea02")
                                input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, type="radio", name="delivery", value="0", required=true, disabled=this.state.disabled, defaultChecked=this.getDataFromNotation("Quote.pickup") == '0')
                              .internal-fsb-element.col-10.offset-0.-fsb-preset-b5cd72c0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="94ec51a9")
                                | จัดส่งสินค้ามาให้
                              .internal-fsb-element.col-10.offset-2.-fsb-preset-8050ab15(style={'FsbInheritedPresets': '8050ab15'}, internal-fsb-guid="88c6a7ee")
                                | กรุณาระบุที่อยู่สำหรับรับสินค้าและหมายเลขโทรศัพท์
                        .internal-fsb-element.col-4.offset-0(style={padding: '0px'}, internal-fsb-guid="4a397863")
                          textarea.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", placeholder="ที่อยู่สำหรับจัดส่งสินค้า", disabled=this.state.disabled, defaultValue=this.getDataFromNotation("Quote.address"))
                  Button.internal-fsb-element.internal-fsb-allow-cursor.col-4.offset-2.btn.btn-primary.btn-sm(style={'marginTop': '15px', 'marginRight': '10px'}, type="button", onSubmitting=this.onButtonSubmitting_a7592071.bind(this), onClick=this.onButtonClick_a7592071.bind(this), disabled=this.state.disabled, internal-fsb-guid="a7592071")
                    .internal-fsb-element(internal-fsb-guid="a7592071-text")
                      | ย้อนกลับ
                  Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.btn-sm.col-4.offset-0(style={'marginTop': '15px', 'marginLeft': '10px'}, type="button", disabled=this.state.disabled, onSubmitting=this.onButtonSubmitting_0e75306a.bind(this), onSubmitted=this.onButtonSubmitted_0e75306a.bind(this), onClick=((event) => { window.internalFsbSubmit('0e75306a', 'Quote', event, ((results) => { this.manipulate('0e75306a', 'Quote', results); }).bind(this)); }).bind(this), internal-fsb-guid="0e75306a")
                    .internal-fsb-element(internal-fsb-guid="0e75306a-text")
                      | เริ่มต้นการประมูลราคา
                  input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("Quote.qid"), internal-fsb-guid="147c9060")
                  input.internal-fsb-element.col-12(type="hidden", value="1", internal-fsb-guid="ab790b53")
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_b2020622', FlowLayout_b2020622);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.