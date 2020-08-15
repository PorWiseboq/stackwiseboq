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
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_d58ae925 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("10714c4a", "insert", ["d064b129","a0641238","1d258b94","9ba2b637","3dcb582a"], {initClass: null, submitCrossType: null});
    DataManipulationHelper.register("2258be6b", "update", ["d064b129","a0641238","1d258b94","9ba2b637","3dcb582a","50cb1c1b"], {initClass: null, submitCrossType: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
     
  }
  
  protected componentDidMount(): void {
    this.register(); 
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    return super.getDataFromNotation(notation, inArray);
  }
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}) className="internal-fsb-element col-12 " + (this.props.forward && this.props.forward.classes || '') internal-fsb-guid="d58ae925")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            each data, i in this.getDataFromNotation("Blog", true)
              .internal-fsb-element.col-9.offset-0(key="item_" + i internal-fsb-guid="3537bdb3")
                .container-fluid
                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                    .internal-fsb-element.col-2.offset-0(internal-fsb-guid="52c488ce")
                      | ชื่อเรื่อง
                    .internal-fsb-element.col-10.offset-0(style={padding: '0px'} maxlength="50" internal-fsb-guid="d064b129")
                      input(style={'display': 'block', 'width': '100%'} type="text" required=true defaultValue=this.getDataFromNotation("Blog[" + i + "].title"))
                    .internal-fsb-element.col-2.offset-0(internal-fsb-guid="5b62d3ee")
                      | เนื้อหา
                    .internal-fsb-element.col-10.offset-0(style={padding: '0px'} internal-fsb-guid="a0641238")
                      textarea(style={'display': 'block', 'width': '100%', 'height': '50vh'} type="text" required=true defaultValue=this.getDataFromNotation("Blog[" + i + "].body"))
                    .internal-fsb-element.col-2.offset-0(internal-fsb-guid="a8690a58")
                      | โดยย่อ
                    .internal-fsb-element.col-10.offset-0(style={padding: '0px'} maxlength="165" internal-fsb-guid="1d258b94")
                      textarea(style={'display': 'block', 'width': '100%'} type="text" rows="2" required=true defaultValue=this.getDataFromNotation("Blog[" + i + "].description"))
                    .internal-fsb-element.col-2.offset-0(internal-fsb-guid="556126e6")
                      | คีย์เวิร์ด
                    .internal-fsb-element.col-10.offset-0(style={padding: '0px'} internal-fsb-guid="9ba2b637")
                      input(style={'display': 'block', 'width': '100%'} type="text" placeholder="" required=true defaultValue=this.getDataFromNotation("Blog[" + i + "].keywords"))
                    .internal-fsb-element.col-2.offset-0(internal-fsb-guid="76b0ad64")
                      | ที่อยู่ของรูปภาพ
                    .internal-fsb-element.col-10.offset-0(style={padding: '0px'} internal-fsb-guid="3dcb582a")
                      input(style={'display': 'block', 'width': '100%'} type="text" defaultValue=this.getDataFromNotation("Blog[" + i + "].image"))
                    Button.internal-fsb-element.internal-fsb-allow-cursor.btn.btn-primary.col-2.offset-4(style={'marginTop': '10px'} type="button" onClick=((event) => { window.internalFsbSubmit('10714c4a', 'Blog', event, ((results) => { this.manipulate('10714c4a', 'Blog', results); }).bind(this)); }).bind(this) internal-fsb-guid="10714c4a")
                      .internal-fsb-element(internal-fsb-guid="10714c4a-text")
                        | Insert
                    Button.internal-fsb-element.internal-fsb-allow-cursor.col-2.offset-0.btn.btn-primary(style={'marginTop': '10px'} type="button" onClick=((event) => { window.internalFsbSubmit('2258be6b', 'Blog', event, ((results) => { this.manipulate('2258be6b', 'Blog', results); }).bind(this)); }).bind(this) internal-fsb-guid="2258be6b")
                      .internal-fsb-element(internal-fsb-guid="2258be6b-text")
                        | Update
                    input.internal-fsb-element.col-12(type="hidden" value=this.getDataFromNotation("Blog[" + i + "].bid") internal-fsb-guid="50cb1c1b")
            .internal-fsb-element.offset--1.col-3.offset-0(style={'minHeight': '617px'} internal-fsb-guid="0a8bed8a")
              | Code พิเศษ
              div
                | # Title
              div
                | ## Heading
              div
                | ### Subheading
              div
                | 1. Ordered List
              div
                | - Unordered List
              div
                |     1. Nested List
              div
                |         - Nested List
              div
                | ** Bold **
              div
                | * Italic *
              div
                | _ Italic _
              div
                | ~~ Strikethrough ~~
              div
                | *** Bold + Italic ***
              div
                | > Quote
              div
                | [Link Title](https://)
              div
                | [Image Title](https://)
              div
                | ParagraphA 
              div
                br
              div
                span(style={'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', 'fontSize': '1rem'})
                  | ParagraphB LineA
                br
              div
                span(style={'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', 'fontSize': '1rem'})
                  | ParagraphB LineB
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_d58ae925', FlowLayout_d58ae925);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.