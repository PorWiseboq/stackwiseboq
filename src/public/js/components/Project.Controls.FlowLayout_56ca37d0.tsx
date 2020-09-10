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
  disabled: boolean;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  disabled: false
});

// Auto[ClassBegin]--->
class FlowLayout_56ca37d0 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("68130617", "navigate", ["ab3a1c6e","340b9ddb","30d60c48","bd78c5c4"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
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
  protected onButtonSubmitting_68130617(event: Event) {

    // Handle the event of onButtonSubmitting (Button 2) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_68130617(event: Event) {

    // Handle the event of onButtonSubmitted (Button 2) here:
    // 
    this.setState({disabled: false});
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-6 offset-3 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="56ca37d0")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.-fsb-preset-8141382a.col-6.offset-3(style={'FsbInheritedPresets': '8141382a'}, internal-fsb-guid="a991db6a")
              | กรุณากรอกข้อมูลส่วนตัวของท่าน
            .internal-fsb-element.internal-fsb-allow-cursor.-fsb-preset-41e62256.col-12(style={'FsbInheritedPresets': '41e62256'}, internal-fsb-guid="9a85abb5")
            .internal-fsb-element.col-12(internal-fsb-guid="6e537102")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.-fsb-self-4ce43ee9.col-4.offset-0(internal-fsb-guid="4ce43ee9")
                    | ชื่อ
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="ab3a1c6e")
                    input.form-control(style={'display': 'block', 'width': '100%'}, type="text", required=true, disabled=this.state.disabled)
            .internal-fsb-element.col-12(style={'marginTop': '10px'}, internal-fsb-guid="ba4c4b8e")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.-fsb-preset-4ce43ee9.col-4.offset-0(style={'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px', 'fontSize': '14px', 'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="87c9097d")
                    | นามสกุล
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="340b9ddb")
                    input.form-control(style={'display': 'block', 'width': '100%'}, type="text", required=true, disabled=this.state.disabled)
            .internal-fsb-element.col-12(style={'marginTop': '10px'}, internal-fsb-guid="1b29a369")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.-fsb-preset-4ce43ee9.col-4.offset-0(style={'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px', 'fontSize': '14px', 'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="a87dd41a")
                    | เบอร์โทรศัพท์ส่วนตัว
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="30d60c48")
                    input.form-control(style={'display': 'block', 'width': '100%'}, type="text", required=true, disabled=this.state.disabled)
            .internal-fsb-element.col-12.-fsb-preset-8141382a(style={'textAlign': 'center', 'FsbInheritedPresets': '8141382a', 'marginTop': '10px'}, internal-fsb-guid="b57438aa")
              | ข้อมูลสำหรับออกใบกำกับภาษี 
            .internal-fsb-element.internal-fsb-allow-cursor.col-12.-fsb-preset-41e62256(style={'FsbInheritedPresets': '41e62256'}, internal-fsb-guid="469094ae")
            .internal-fsb-element.col-12(internal-fsb-guid="d044e652")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.-fsb-preset-4ce43ee9.col-4.offset-0(style={'textAlign': 'right', 'fontSize': '14px', 'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="0b76d112")
                    | ชื่อนิติบุคคล / บุคคลธรรมดา
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="d0730a53")
                    input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled, required=true)
            .internal-fsb-element.col-12(style={'marginTop': '10px'}, internal-fsb-guid="60183893")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.-fsb-preset-4ce43ee9.col-4.offset-0(style={'textAlign': 'right', 'fontSize': '14px', 'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="1a45a695")
                    | สาขา
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="49cd4587")
                    input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled, required=true)
            .internal-fsb-element.col-12(style={'marginTop': '10px'}, internal-fsb-guid="2d2a5565")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.-fsb-preset-4ce43ee9.col-4.offset-0(style={'textAlign': 'right', 'fontSize': '14px', 'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="d0a77c1c")
                    | หมายเลขประจำตัวผู้เสียภาษี
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="93258c7d")
                    input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled, required=true)
            .internal-fsb-element.col-12(style={'marginTop': '10px'}, internal-fsb-guid="dba43b7a")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="001dce14")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-2.offset-0.-fsb-preset-4ce43ee9(style={'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="ceb650a9")
                          | ที่อยู่:
                        .internal-fsb-element.col-2.offset-0.-fsb-preset-4ce43ee9(style={'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="1ddcb837")
                          | จังหวัด
                        .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="6b3ded89")
                          input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled, required=true)
                  .internal-fsb-element.col-12(style={'marginTop': '10px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="7ad4ce90")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-4.offset-0.-fsb-preset-4ce43ee9(style={'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="c7d0dc02")
                          | อำเภอ / แขวง
                        .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="5daed5dd")
                          input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled, required=true)
                  .internal-fsb-element.col-12(style={'marginTop': '10px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="a0a247bd")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-4.offset-0.-fsb-preset-4ce43ee9(style={'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="060c5574")
                          | ตำบล / เขต
                        .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="a1a014e1")
                          input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled, required=true)
                  .internal-fsb-element.col-12(style={'marginTop': '10px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="e6180799")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-4.offset-0.-fsb-preset-4ce43ee9(style={'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="50b0be53")
                          | บ้านเลขที่ / ตึก / อาคาร
                        .internal-fsb-element.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="5412d45d")
                          input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled, required=true)
                        .internal-fsb-element.col-1.offset-0.-fsb-preset-4ce43ee9(style={'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="94ed57c4")
                          | ซอย
                        .internal-fsb-element.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="6a438452")
                          input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled)
                        .internal-fsb-element.col-1.offset-0.-fsb-preset-4ce43ee9(style={'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="75e8354a")
                          | ถนน
                        .internal-fsb-element.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="74ccd157")
                          input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled)
                  .internal-fsb-element.col-12(style={'marginTop': '10px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="c551d58a")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-4.offset-0.-fsb-preset-4ce43ee9(style={'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="b7252076")
                          | รหัสไปรษณีย์
                        .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="547e2875")
                          input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled, required=true)
            .internal-fsb-element.col-12(style={'marginTop': '10px'}, internal-fsb-guid="89194261")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.-fsb-preset-4ce43ee9.col-4.offset-0(style={'FsbInheritedPresets': '4ce43ee9'}, internal-fsb-guid="05be58b7")
                    | เบอร์โทรศัพท์สำหรับติดต่อ
                  .internal-fsb-element.col-8.offset-0(style={padding: '0px'}, internal-fsb-guid="6217437d")
                    input.form-control(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.disabled, required=true)
            .internal-fsb-element.col-12(style={'paddingTop': '20px'}, internal-fsb-guid="75c0d8ce")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  Button.internal-fsb-element.internal-fsb-allow-cursor.col-6.offset-3.btn.btn-primary(onClick=((event) => { window.internalFsbSubmit('68130617', 'User', event, ((results) => { this.manipulate('68130617', 'User', results); }).bind(this)); }).bind(this), type="button", disabled=this.state.disabled, onSubmitting=this.onButtonSubmitting_68130617.bind(this), onSubmitted=this.onButtonSubmitted_68130617.bind(this), internal-fsb-guid="68130617")
                    .internal-fsb-element(internal-fsb-guid="68130617-text")
                      | บันทึก
                  input.internal-fsb-element.col-12(type="hidden", value="123", internal-fsb-guid="bd78c5c4")
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_56ca37d0', FlowLayout_56ca37d0);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.