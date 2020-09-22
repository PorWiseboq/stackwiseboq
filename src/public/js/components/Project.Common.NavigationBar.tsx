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
//Project['Controls'] =

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
Project['Controls'] = Project['Controls'] || {};

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
class NavigationBar extends Base {
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
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string): any {
    return super.getDataFromNotation(notation);
  }
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({'display': 'flex', 'flexWrap': 'wrap', 'WebkitFlexWrap': 'wrap', 'MsFlexWrap': 'wrap', 'justifyContent': 'center', 'WebkitJustifyContent': 'center', 'alignContent': 'center', 'WebkitAlignContent': 'center', 'alignItems': 'center', 'WebkitAlignItems': 'center', 'alignSelf': 'center', 'WebkitAlignSelf': 'center'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element d-block d-sm-block d-md-block d-lg-block d-xl-block " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="535be65e")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor(style={'display': 'block'})
            - const Project_Common_Header_ = Project.Common.Header;
            _Project_Common_Header_(forward={'classes': 'offset-lg-0 offset-3', 'styles': {}})
            - const Project_Controls_Select_537e60db_ = Project.Controls.Select_537e60db;
            _Project_Controls_Select_537e60db_(forward={'classes': 'col-12 offset-0', 'styles': {}})
            - const Project_Controls_FlowLayout_1136ae7c_ = Project.Controls.FlowLayout_1136ae7c;
            _Project_Controls_FlowLayout_1136ae7c_()
    `
  }
}
DeclarationHelper.declare('Site', 'Common.NavigationBar', NavigationBar);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.