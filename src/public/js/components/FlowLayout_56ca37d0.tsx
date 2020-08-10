// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
import {HTMLHelper} from '../helpers/HTMLHelper.js';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Base} from './Base.js';
// <---Auto[Import]

// Import additional modules here:
//

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;

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
    DataManipulationHelper.register("68130617", "navigate", ["ab3a1c6e","340b9ddb","30d60c48","bd78c5c4"], {initClass: null});
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '68130617')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '68130617').addEventListener('submitting', this.onButtonSubmitting_68130617.bind(this));
    }
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '68130617')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', '68130617').addEventListener('submitted', this.onButtonSubmitted_68130617.bind(this));
    }
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
    return (
      <div className={"internal-fsb-element col-6 offset-3 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="56ca37d0" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        <div className="container-fluid">
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            <div className="internal-fsb-element col-12" internal-fsb-guid="6e537102">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-5 offset-0" internal-fsb-guid="4ce43ee9" style={{'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'}}>
                    ชื่อ
                  </div>
                  <div className="internal-fsb-element col-7 offset-0" internal-fsb-guid="ab3a1c6e" style={{'display': 'block', 'width': '100%'}}>
                    <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} disabled={this.state.disabled} />
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-12" internal-fsb-guid="ba4c4b8e" style={{'marginTop': '10px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-5 offset-0" internal-fsb-guid="87c9097d" style={{'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'}}>
                    นามสกุล
                  </div>
                  <div className="internal-fsb-element col-7 offset-0" internal-fsb-guid="340b9ddb" style={{'display': 'block', 'width': '100%'}}>
                    <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} disabled={this.state.disabled} />
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-12" internal-fsb-guid="1b29a369" style={{'marginTop': '10px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-5 offset-0" internal-fsb-guid="a87dd41a" style={{'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'}}>
                    เบอร์โทรศัพท์
                  </div>
                  <div className="internal-fsb-element col-7 offset-0" internal-fsb-guid="30d60c48" style={{'display': 'block', 'width': '100%'}}>
                    <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} disabled={this.state.disabled} />
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-12" internal-fsb-guid="75c0d8ce" style={{'paddingTop': '20px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <button className="internal-fsb-element internal-fsb-allow-cursor col-6 offset-3 btn btn-primary" internal-fsb-guid="68130617" type="button" disabled={this.state.disabled} onClick={((event) => { window.internalFsbSubmit('68130617', 'User', event, ((results: any) => { this.manipulate('68130617', 'User', results); }).bind(this)); }).bind(this)}>
                    <div className="internal-fsb-element" internal-fsb-guid="68130617-text">
                      บันทึก
                    </div>
                  </button>
                  <input className="internal-fsb-element col-12" internal-fsb-guid="bd78c5c4" type="hidden" value="123" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_56ca37d0', FlowLayout_56ca37d0);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.