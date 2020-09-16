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
class FlowLayout_089c5b39 extends Base {
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
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="089c5b39")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            .internal-fsb-element.col-9.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="20d6308c")
              .container-fluid
                .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                  - const Project_Common_Header_ = Project.Common.Header;
                  _Project_Common_Header_(forward={'classes': '', 'styles': {}})
            .internal-fsb-element.internal-fsb-allow-cursor.col-3(style={'paddingTop': '15px', 'textAlign': 'right'}, internal-fsb-guid="badb6ddd")
              a.internal-fsb-element.internal-fsb-allow-cursor(style={'fontSize': '14px', 'display': 'inline-block'}, href="/authentication/logout", internal-fsb-guid="a231737d")
                .internal-fsb-element(internal-fsb-guid="a231737d-text")
                  | ออกจากระบบ
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_089c5b39', FlowLayout_089c5b39);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.