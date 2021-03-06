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
  selectedValue: number;
  group: string;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  selectedValue: -1
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
  protected onRadioClick_1832b944(event: Event) {

    // Handle the event of onRadioClick (Radio 5) here:
    // 
    this.setState({
      selectedValue: 0
    });
    
  }

  protected onRadioClick_b91e2739(event: Event) {

    // Handle the event of onRadioClick (Radio 4) here:
    // 
    this.setState({
      selectedValue: 1
    });
    
  }

  protected onRadioClick_03aab0e5(event: Event) {

    // Handle the event of onRadioClick (Radio 3) here:
    // 
    this.setState({
      selectedValue: 2
    });
    
  }

  protected onRadioClick_957c1568(event: Event) {

    // Handle the event of onRadioClick (Radio 6) here:
    // 
    this.setState({
      selectedValue: 3
    });
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element col-12 -fsb-self-c6ba5b53 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="c6ba5b53")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-4.offset-0.-fsb-self-65ec89d1(internal-fsb-guid="65ec89d1")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("title"))}, internal-fsb-guid="a818c946")
                  .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("size"))}, internal-fsb-guid="eccb7c51")
                  .internal-fsb-element.col-12(dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("quantity"))}, internal-fsb-guid="0e3365eb")
            .internal-fsb-element.col-3.offset-0(internal-fsb-guid="e5e63918")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'}, internal-fsb-guid="b42d4545")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, onClick=this.onRadioClick_1832b944.bind(this), internal-fsb-guid="1832b944")
                          input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}, type="radio", value="0", name=this.state.group, defaultChecked=this.getDataFromNotation("Listing.Substitute.type") == '0')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="b80041d3")
                          | เจาะจง
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'}, internal-fsb-guid="eb192633")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, onClick=this.onRadioClick_b91e2739.bind(this), internal-fsb-guid="b91e2739")
                          input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}, type="radio", value="1", name=this.state.group, defaultChecked=this.getDataFromNotation("Listing.Substitute.type") == '1')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="58266972")
                          | เทียบเท่า
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'}, internal-fsb-guid="2cb33325")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, onClick=this.onRadioClick_03aab0e5.bind(this), internal-fsb-guid="03aab0e5")
                          input(style={'display': 'block', 'paddingLeft': '0px', 'FsbInheritedPresets': 'b6c9ad89'}, type="radio", value="2", name=this.state.group, defaultChecked=this.getDataFromNotation("Listing.Substitute.type") == '2')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="5c2b0578")
                          | ทดแทน
                  label.internal-fsb-element.col-12.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px', 'marginBottom': '3px'}, internal-fsb-guid="c1c5b10b")
                    .container-fluid
                      .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                        .internal-fsb-element.-fsb-preset-b6c9ad89.col-2.offset-0(style={padding: '0px'}, onClick=this.onRadioClick_957c1568.bind(this), internal-fsb-guid="957c1568")
                          input(style={'display': 'block', 'FsbInheritedPresets': 'b6c9ad89'}, type="radio", value="3", name=this.state.group, defaultChecked=this.getDataFromNotation("Listing.Substitute.type") == '3')
                        .internal-fsb-element.-fsb-preset-b5cd72c0.col-10.offset-0(style={'FsbInheritedPresets': 'b5cd72c0'}, internal-fsb-guid="a3b9410d")
                          | ไม่มี
            .internal-fsb-element.col-5.offset-0(style={display: (()=>{return (this.state.selectedValue == 1 || this.state.selectedValue == 2) ? 'block' : 'none';})()}, internal-fsb-guid="483390a6")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="9c338431")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginBottom': '5px', 'fontSize': '12px'}, type="text", placeholder="เปลี่ยนวัสดุเป็น", defaultValue=this.getDataFromNotation("Listing.Substitute.title"))
                  .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="d913e6a1")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'marginBottom': '5px', 'fontSize': '12px'}, type="text", placeholder="เปลี่ยนขนาดเป็น", defaultValue=this.getDataFromNotation("Listing.Substitute.size"))
                  .internal-fsb-element.col-12.offset-0(style={padding: '0px'}, internal-fsb-guid="c22ec668")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%', 'fontSize': '12px'}, type="text", placeholder="เปลี่ยนปริมาณเป็น", defaultValue=this.getDataFromNotation("Listing.Substitute.quantity"))
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