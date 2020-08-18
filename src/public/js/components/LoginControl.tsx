// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
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
  signning_mode: string;
  disabled: boolean;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  signning_mode: 'signning_in',
  disabled: false
});

// Auto[ClassBegin]--->
class LoginControl extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("e968c824", "navigate", ["74d75b70","74b67c1e"], {initClass: null, submitCrossType: null});
    DataManipulationHelper.register("da229546", "navigate", ["74d75b70","74b67c1e","d40a4961"], {initClass: null, submitCrossType: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string): any[] {
    return super.getDataFromNotation(notation);
  }
  
  protected componentDidMount() {
    this.register();
  }
  
  // Auto[Merging]--->
  protected onTextElementClick_44677dd0(event: Event) {

    // Handle the event of onTextElementClick (TextElement 6) here:
    // 
    this.setState({
      signning_mode: 'signning_in'
    });
    
  }

  protected onTextElementClick_880115b3(event: Event) {

    // Handle the event of onTextElementClick (TextElement 7) here:
    // 
    this.setState({
      signning_mode: 'signning_up'
    });
    
  }

  protected onButtonSubmitting_e968c824(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_e968c824(event: Event) {

    // Handle the event of onButtonSubmitted (Button 1) here:
    // 
    this.setState({disabled: false});
    
  }

  protected onButtonSubmitting_da229546(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_da229546(event: Event) {

    // Handle the event of onButtonSubmitted (Button 1) here:
    // 
    this.setState({disabled: false});
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}) className="internal-fsb-element " + (this.props.forward && this.props.forward.classes || '') internal-fsb-guid="7aee6ed8")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-12(style={'textAlign': 'center'} internal-fsb-guid="100b12a4")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.offset-0(ref="signning_out_navigation" internal-fsb-guid="68a04e8d")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-8.offset-2(style={'borderBottomColor': 'rgba(0, 123, 255, 1)', 'borderBottomStyle': 'solid', 'borderBottomWidth': '2px', 'paddingBottom': '5px'} internal-fsb-guid="699b92eb")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-6.offset-0(style={'cursor': 'pointer', fontWeight: (()=>{return (this.state.signning_mode == 'signning_in') ? "bold" : "";})()} onClick=this.onTextElementClick_44677dd0.bind(this) internal-fsb-guid="44677dd0")
                                | เข้าสู่ระบบ
                              .internal-fsb-element.col-6.offset-0(style={'cursor': 'pointer', fontWeight: (()=>{return (this.state.signning_mode == 'signning_up') ? "bold" : "";})()} onClick=this.onTextElementClick_880115b3.bind(this) internal-fsb-guid="880115b3")
                                | สมัครสมาชิก
                  .internal-fsb-element.col-12(style={'marginTop': '20px'} internal-fsb-guid="25cdd095")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-8.offset-2(internal-fsb-guid="cdd9262a")
                          .container-fluid
                            .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                              .internal-fsb-element.col-12(internal-fsb-guid="54d4b112")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-5.offset-0(style={'textAlign': 'right', 'paddingRight': '10px', 'paddingTop': '7px'} internal-fsb-guid="2d523027")
                                      | ที่อยู่อีเมล์
                                    .internal-fsb-element.col-7.offset-0(style={padding: '0px'} internal-fsb-guid="74d75b70")
                                      input.form-control(style={'display': 'block', 'width': '100%'} ref="email" type="text" placeholder="ที่อยู่@โดเมน.com" required=true disabled=this.state.disabled)
                              .internal-fsb-element.col-12.offset-0(style={'marginTop': '10px'} internal-fsb-guid="9e7545c8")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-5.offset-0(style={'textAlign': 'right', 'paddingRight': '10px', 'paddingTop': '7px'} internal-fsb-guid="028366b0")
                                      | รหัสผ่าน
                                    .internal-fsb-element.col-7.offset-0(style={padding: '0px'} internal-fsb-guid="74b67c1e")
                                      input.form-control(style={'display': 'block', 'width': '100%'} ref="password" type="password" placeholder="รหัสผ่าน" required=true disabled=this.state.disabled)
                              .internal-fsb-element.col-12.offset-0(style={'marginTop': '10px', display: (()=>{return (this.state.signning_mode == 'signning_up') ? 'block' : 'none';})()} internal-fsb-guid="b6e4592d")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    .internal-fsb-element.col-5.offset-0(style={'textAlign': 'right', 'paddingRight': '10px', 'paddingTop': '7px'} internal-fsb-guid="aacee6b3")
                                      | ยืนยันรหัสผ่าน
                                    .internal-fsb-element.col-7.offset-0(style={padding: '0px'} internal-fsb-guid="d40a4961")
                                      input.form-control(style={'display': 'block', 'width': '100%'} ref="confirm" type="password" placeholder="ยืนยันรหัสผ่าน" required=true disabled=this.state.disabled)
                              .internal-fsb-element.col-12.offset-0(style={'paddingTop': '20px'} internal-fsb-guid="437e47b4")
                                .container-fluid
                                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.col-12.offset-0(style={display: (()=>{return (this.state.signning_mode == 'signning_in') ? 'block' : 'none';})()} type="button" disabled=this.state.disabled onSubmitting=this.onButtonSubmitting_e968c824.bind(this) onSubmitted=this.onButtonSubmitted_e968c824.bind(this) onClick=((event) => { window.internalFsbSubmit('e968c824', 'User', event, ((results) => { this.manipulate('e968c824', 'User', results); }).bind(this)); }).bind(this) internal-fsb-guid="e968c824")
                                      .internal-fsb-element(internal-fsb-guid="e968c824-text")
                                        | ถัดไป
                                    Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.col-12.offset-0(style={display: (()=>{return (this.state.signning_mode == 'signning_up') ? 'block' : 'none';})()} type="button" disabled=this.state.disabled onSubmitting=this.onButtonSubmitting_da229546.bind(this) onSubmitted=this.onButtonSubmitted_da229546.bind(this) onClick=((event) => { window.internalFsbSubmit('da229546', 'User', event, ((results) => { this.manipulate('da229546', 'User', results); }).bind(this)); }).bind(this) internal-fsb-guid="da229546")
                                      .internal-fsb-element(internal-fsb-guid="da229546-text")
                                        | ถัดไป
    `
  }
}
DeclarationHelper.declare('Site', 'WiseBOQ.LoginControl', LoginControl);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.