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
  recentType: number;
  type: number;
  error: boolean;
  title: string;
  quantity: string;
  unit: string;
  price: string;
  group: string;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  recentType: -1,
  type: -1,
  title: "",
  quantity: "",
  unit: "",
  price: ""
});

// Auto[ClassBegin]--->
class FlowLayout_c6ba5b53 extends Base {
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
    this.state.group = Math.random().toString();
    
    this.refresh(this.props);
  }
  
  protected componentWillReceiveProps(nextProps): void {
    const skip = (this.getDataFromNotation('Substitute.type', false) != this.state.recentType);
    
    if (!skip && (nextProps.submitting || nextProps.isformready)) {
      this.forceUpdate();
    } else {
      this.refresh(nextProps);
      this.updatePrice();
    }
  }
  
  private refresh(props): void {
    const type = this.getDataFromNotation('substitute', false);
    const value = this.getDataFromNotation('Substitute.type', false);
    const error = (value == null) ? false : (Math.min(value, type) !== value && value !== 3);
    
    this.state.error = error;
    this.state.recentType = value;
    this.state.type = (error || value == null) ? -1 : value;
    this.state.title = this.getDataFromNotation('Substitute.title', false) || "";
    this.state.quantity = this.getDataFromNotation('Substitute.quantity', false) || "";
    this.state.unit = this.getDataFromNotation('Substitute.unit', false) || "";
    this.state.price = this.getDataFromNotation('Substitute.price', false) || "";
    
    this.forceUpdate();
  }
  
  protected componentDidMount(): void {
  	this.register();
    this.updatePrice();
  }
  
  protected componentWillUnmount(): void {
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    return super.getDataFromNotation(notation, inArray);
  }
  
  private updatePrice() {
    const value = parseFloat(this.state.price);
    const type = this.state.type;
    
    const title = (type == 1 || type == 2) ? this.state.quantity : this.getDataFromNotation('quantity');
    const quantity =  parseFloat(title + '');
    
    if (type == 3) this.props.onpricechanged(this.props.index, 0);
    else this.props.onpricechanged(this.props.index, value * quantity);
  }
  
  // Auto[Merging]--->
  protected onRadioClick_1832b944(event: Event) {

    // Handle the event of onRadioClick (Radio 5) here:
    // 
    this.state.type = 0;
    this.forceUpdate();
    
    this.updatePrice();
    
  }

  protected onRadioClick_b91e2739(event: Event) {

    // Handle the event of onRadioClick (Radio 4) here:
    // 
    this.state.type = 1;
    this.forceUpdate();
    
    this.updatePrice();
    
  }

  protected onRadioClick_03aab0e5(event: Event) {

    // Handle the event of onRadioClick (Radio 3) here:
    // 
    this.state.type = 2;
    this.forceUpdate();
    
    this.updatePrice();
    
  }

  protected onRadioClick_957c1568(event: Event) {

    // Handle the event of onRadioClick (Radio 6) here:
    // 
    this.state.type = 3;
    this.forceUpdate();
    
    this.updatePrice();
    
  }

  protected onTextboxChange_1382e4c9(event: Event) {

    // Handle the event of onTextboxChange (Price) here:
    // 
    const element = EventHelper.getCurrentElement(event);
    
    this.state.price = element.value;
    this.forceUpdate();
    
    this.updatePrice();
    
  }

  protected onTextboxChange_9c338431(event: Event) {

    // Handle the event of onTextboxChange (Name) here:
    // 
    const element = EventHelper.getCurrentElement(event);
    
    this.state.title = element.value;
    this.forceUpdate();
    
  }

  protected onTextboxChange_c22ec668(event: Event) {

    // Handle the event of onTextboxChange (Quantity) here:
    // 
    const element = EventHelper.getCurrentElement(event);
    
    this.state.quantity = element.value;
    this.forceUpdate();
    
    this.updatePrice();
    
  }

  protected onTextboxChange_d913e6a1(event: Event) {

    // Handle the event of onTextboxChange (Size) here:
    // 
    const element = EventHelper.getCurrentElement(event);
    
    this.state.unit = element.value;
    this.forceUpdate();
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({background: (()=>{return (this.state.error) ? '#ffe0b2' : '';})(), borderTopColor: (()=>{return (this.state.error) ? '#e65100' : '';})(), borderRightColor: (()=>{return (this.state.error) ? '#e65100' : '';})(), borderBottomColor: (()=>{return (this.state.error) ? '#e65100' : '';})(), borderLeftColor: (()=>{return (this.state.error) ? '#e65100' : '';})()}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-12 -fsb-self-c6ba5b53 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="c6ba5b53")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.-fsb-self-65ec89d1.col-4.offset-0(internal-fsb-guid="65ec89d1")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.offset-0(style={'fontWeight': 'bold', 'fontSize': '14px', 'borderBottomWidth': '1px', 'borderBottomColor': 'rgba(77, 195, 250, 0.25)', 'borderBottomStyle': 'solid', 'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '5px', 'color': 'rgba(69, 69, 69, 1)'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("title"))}, internal-fsb-guid="a818c946")
                  .internal-fsb-element.col-6.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(69, 69, 69, 1)'}, internal-fsb-guid="0e3365eb")
                    div
                      span(style={'backgroundColor': 'rgba(255, 255, 255, 0)', 'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'})
                        | #{this.getDataFromNotation("quantity")}
                  .internal-fsb-element.col-6.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'color': 'rgba(69, 69, 69, 1)'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("unit"))}, internal-fsb-guid="eccb7c51")
                  .internal-fsb-element.col-12(style={'color': 'rgba(128, 128, 128, 1)', 'fontSize': '12px', 'background': 'rgba(217, 217, 217, 0)', 'marginTop': '10px', 'paddingLeft': '0px', 'paddingRight': '0px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("note"))}, internal-fsb-guid="696ae6ee")
            .internal-fsb-element.col-2.offset-0(style={'background': 'rgba(252, 252, 252, 0.2)', 'borderRadius': '5px 5px 5px 5px', 'WebkitBorderRadius': '5px 5px 5px 5px', 'paddingTop': '5px', 'paddingBottom': '5px', 'borderTopStyle': 'solid', 'borderTopColor': 'rgba(255, 255, 255, 0.5)', 'borderBottomStyle': 'solid', 'borderBottomColor': 'rgba(255, 255, 255, 0.25)', 'borderRightStyle': 'solid', 'borderRightColor': 'rgba(255, 255, 255, 0.25)', 'borderLeftStyle': 'solid', 'borderLeftColor': 'rgba(255, 255, 255, 0.25)', 'borderTopWidth': '1px', 'borderLeftWidth': '1px', 'borderBottomWidth': '1px', 'borderRightWidth': '1px'}, internal-fsb-guid="e5e63918")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '0px'}, internal-fsb-guid="b42d4545")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="1832b944")
                          input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}, ref="radType0", onClick=this.onRadioClick_1832b944.bind(this), type="radio", value="0", name=this.state.group, checked=this.state.type == 0, data-com.agilebits.onepassword.initial-value="0", disabled=!this.props.enabled, defaultChecked=this.getDataFromNotation("Substitute.type") == '0')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="b80041d3")
                          | เจาะจง
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '0px', display: (()=>{return (this.getDataFromNotation('substitute', false) >= 1) ? 'block' : 'none';})()}, internal-fsb-guid="eb192633")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="b91e2739")
                          input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}, ref="radType1", onClick=this.onRadioClick_b91e2739.bind(this), type="radio", value="1", name=this.state.group, checked=this.state.type == 1, data-com.agilebits.onepassword.initial-value="1", disabled=!this.props.enabled, defaultChecked=this.getDataFromNotation("Substitute.type") == '1')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="58266972")
                          | เทียบเท่า
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '0px', display: (()=>{return (this.getDataFromNotation('substitute', false) >= 2) ? 'block' : 'none';})()}, internal-fsb-guid="2cb33325")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="03aab0e5")
                          input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}, ref="radType2", onClick=this.onRadioClick_03aab0e5.bind(this), type="radio", value="2", name=this.state.group, checked=this.state.type == 2, data-com.agilebits.onepassword.initial-value="2", disabled=!this.props.enabled, defaultChecked=this.getDataFromNotation("Substitute.type") == '2')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="5c2b0578")
                          | ทดแทน
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '0px'}, internal-fsb-guid="c1c5b10b")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, internal-fsb-guid="957c1568")
                          input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, ref="radType3", onClick=this.onRadioClick_957c1568.bind(this), type="radio", value="3", name=this.state.group, checked=this.state.type == 3, data-com.agilebits.onepassword.initial-value="3", disabled=!this.props.enabled, defaultChecked=this.getDataFromNotation("Substitute.type") == '3')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="a3b9410d")
                          | ไม่มี
            .internal-fsb-element.col-2.offset-0(internal-fsb-guid="1a33d835")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return (this.state.type == 0 || this.state.type == 1 || this.state.type == 2) ? 'block' : 'none';})()}, internal-fsb-guid="45b20175")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-7.offset-0(style={padding: '0px'}, internal-fsb-guid="1382e4c9")
                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'fontSize': '12px'}, ref="price", onChange=this.onTextboxChange_1382e4c9.bind(this), type="text", placeholder="ราคาต่อหน่วย", disabled=!this.props.enabled, value=([0,1,2].indexOf(this.state.type) != -1) ? this.state.price : '0', data-com.agilebits.onepassword.initial-value=this.state.price, required=true)
                        .internal-fsb-element.col-5.offset-0(style={'paddingTop': '4px', 'textAlign': 'left', 'paddingLeft': '5px', 'fontSize': '13px'}, internal-fsb-guid="530bacd3")
                          | บาท
            .internal-fsb-element.-fsb-self-483390a6.col-4(style={'FsbReusableName': '', 'FsbReusableId': '483390a6', display: (()=>{return (this.state.type == 1 || this.state.type == 2) ? 'block' : 'none';})()}, internal-fsb-guid="483390a6")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="9c338431")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginBottom': '5px', 'fontSize': '12px'}, onChange=this.onTextboxChange_9c338431.bind(this), type="text", placeholder="ระบุชื่อวัสดุ, สเปค, ยี่ห้อ, รายละเอียด", value=([0,1,2].indexOf(this.state.type) != -1) ? this.state.title : 'n/a', data-com.agilebits.onepassword.initial-value=this.state.title, disabled=!this.props.enabled, required=true)
                  .internal-fsb-element.col-6.offset-0(style={'paddingLeft': '2px', 'paddingRight': '0px'}, internal-fsb-guid="a241ded8")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="c22ec668")
                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'fontSize': '12px'}, ref="quantity", onChange=this.onTextboxChange_c22ec668.bind(this), type="text", placeholder="ระบุปริมาณ", value=([1,2].indexOf(this.state.type) != -1) ? this.state.quantity : '0', data-com.agilebits.onepassword.initial-value=this.state.quantity, disabled=!this.props.enabled, required=true)
                  .internal-fsb-element.col-6.offset-0(style={'paddingLeft': '0px', 'paddingRight': '2px'}, internal-fsb-guid="06d40ba3")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="d913e6a1")
                          input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginBottom': '5px', 'fontSize': '12px'}, onChange=this.onTextboxChange_d913e6a1.bind(this), type="text", placeholder="ระบุหน่วย", value=([1,2].indexOf(this.state.type) != -1) ? this.state.unit : 'n/a', data-com.agilebits.onepassword.initial-value=this.state.size, disabled=!this.props.enabled, required=true)
                        .internal-fsb-element.col-12(internal-fsb-guid="08cc8b91")
                          | ABC
            input.internal-fsb-element.col-12(type="hidden", value=this.getDataFromNotation("lid"), internal-fsb-guid="ae7e2437")
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_c6ba5b53', FlowLayout_c6ba5b53);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.