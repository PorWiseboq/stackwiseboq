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
class FlowLayout_84b618a7 extends Base {
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
      div(style=Object.assign({'paddingRight': '0px', 'paddingLeft': '0px'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="84b618a7")
        .container-fluid
          .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
            each data, i in this.getDataFromNotation("Blog", true)
              .internal-fsb-element.col-12.col-sm-6.col-md-4.col-lg-3(style={'paddingTop': '10px', 'position': 'relative', 'paddingLeft': '5px', 'paddingRight': '5px'}, key="item_" + i, internal-fsb-guid="776bcb63")
                .container-fluid
                  .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                    .internal-fsb-element.offset-0.col-12(style={'background': 'rgba(10, 157, 255, 1)', 'color': 'rgba(252, 252, 252, 1)', 'paddingRight': '0px', 'minHeight': '150px', 'paddingLeft': '0px', 'borderRadius': '5px 5px 5px 5px', 'WebkitBorderRadius': '5px 5px 5px 5px'}, internal-fsb-guid="4baede68")
                      .container-fluid
                        .row.internal-fsb-strict-layout.internal-fsb-allow-cursor
                          a.internal-fsb-element.internal-fsb-allow-cursor.col-12(style={'paddingLeft': '0px', 'paddingRight': '0px', 'paddingTop': '10px', 'paddingBottom': '10px', 'textDecorationLine': 'none', 'WebkitTextDecorationLine': 'none', 'MozTextDecorationLine': 'none', 'position': 'absolute', 'minHeight': '150px'}, href=this.getDataFromNotation('Blog[' + i + '].link'), internal-fsb-guid="42c96b54")
                            .internal-fsb-element.col-12(style={'fontSize': '16px', 'color': 'rgba(255, 255, 255, 1)'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Blog[" + i + "].title"))}, internal-fsb-guid="48b959d1")
                            .internal-fsb-element.col-12(style={'fontWeight': 'normal', 'fontSize': '14px', 'color': 'rgba(252, 252, 252, 0.75)', 'marginTop': '5px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(this.getDataFromNotation("Blog[" + i + "].description"))}, internal-fsb-guid="63635277")
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_84b618a7', FlowLayout_84b618a7);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.