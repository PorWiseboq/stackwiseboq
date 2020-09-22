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
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_1136ae7c extends Base {
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
      div(style=Object.assign({'fontSize': '14px', 'marginTop': '15px', 'display': 'flex', 'marginRight': '15px', 'marginLeft': '15px', 'transform': 'matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)scaleY(-1)', 'WebkitTransform': 'matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)scaleY(-1)', 'MozTransform': 'matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)scaleY(-1)', 'MsTransform': 'matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)scaleY(-1)', 'flexWrap': 'wrap', 'WebkitFlexWrap': 'wrap', 'MsFlexWrap': 'wrap', 'float': 'right'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element offset-0 d-none d-sm-block d-md-block d-lg-block d-xl-block " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="1136ae7c")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="8eaa2c0a")
              img(style={'display': 'block', 'width': '20px', 'marginRight': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/buy.png")
            .internal-fsb-element.internal-fsb-allow-cursor(internal-fsb-guid="b0d123ac")
            a.internal-fsb-element.internal-fsb-allow-cursor(href="/buyer", target="", internal-fsb-guid="2934a208")
              .internal-fsb-element(internal-fsb-guid="2934a208-text")
                | สำหรับผู้ที่ต้องการสั่งซื้อ
            .internal-fsb-element.internal-fsb-allow-cursor.-fsb-self-57595ad9(internal-fsb-guid="57595ad9")
            .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="4db67171")
              img(style={'display': 'block', 'width': '20px', 'marginRight': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/bid.png")
            a.internal-fsb-element.internal-fsb-allow-cursor(href="/bidder", internal-fsb-guid="7001d8c4")
              .internal-fsb-element(internal-fsb-guid="7001d8c4-text")
                | สำหรับร้านค้าวัสดุก่อสร้าง
            .internal-fsb-element.internal-fsb-allow-cursor.-fsb-preset-57595ad9.d-block.d-sm-block.d-md-block.d-lg-block.d-xl-block(style={'FsbInheritedPresets': '57595ad9'}, internal-fsb-guid="48d1ac00")
            .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="e0b80487")
              img(style={'display': 'block', 'width': '20px', 'marginRight': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/thumb-up.png")
            a.internal-fsb-element.internal-fsb-allow-cursor(href="/blog/all", internal-fsb-guid="8b664de6")
              .internal-fsb-element(internal-fsb-guid="8b664de6-text")
                | บทความ
            .internal-fsb-element.-fsb-preset-57595ad9(style={'FsbInheritedPresets': '57595ad9'}, internal-fsb-guid="d45a4b5c")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element(style={padding: '0px'}, internal-fsb-guid="530a1666")
              img(style={'display': 'block', 'width': '20px', 'marginRight': '5px'}, src="https://wiseboq-static-files.s3-ap-northeast-1.amazonaws.com/padlock.png")
            a.internal-fsb-element.internal-fsb-allow-cursor(href="/authentication", internal-fsb-guid="24c1dbd3")
              .internal-fsb-element(internal-fsb-guid="24c1dbd3-text")
                | เข้าสู่ระบบ
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_1136ae7c', FlowLayout_1136ae7c);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.