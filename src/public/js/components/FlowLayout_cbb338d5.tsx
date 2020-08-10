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
class FlowLayout_cbb338d5 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("e6d44b49", "navigate", ["d66b23a4","e27d4c3b","8bcca5bc","3a931201","37473e1c","9d2bb91e","c085ee08","eca33837","e07e83cb","3a91a437","903420db","8ce0a253"], {initClass: null});
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', 'e6d44b49')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', 'e6d44b49').addEventListener('submitting', this.onButtonSubmitting_e6d44b49.bind(this));
    }
    if (HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', 'e6d44b49')) {
      HTMLHelper.getElementByAttributeNameAndValue('internal-fsb-guid', 'e6d44b49').addEventListener('submitted', this.onButtonSubmitted_e6d44b49.bind(this));
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
  protected onButtonSubmitting_e6d44b49(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    this.setState({disabled: true});
    
  }

  protected onButtonSubmitted_e6d44b49(event: Event) {

    // Handle the event of onButtonSubmitted (Button 1) here:
    // 
    this.setState({disabled: false});
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return (
      <div className={"internal-fsb-element col-6 offset-3 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="cbb338d5" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        <div className="container-fluid">
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            <div className="internal-fsb-element col-12" internal-fsb-guid="91074151">
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="267cdd86" style={{'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'}}>
                    ชื่อร้านค้า
                  </div>
                  <div className="internal-fsb-element col-8 offset-0" internal-fsb-guid="d66b23a4" style={{'display': 'block', 'width': '100%'}}>
                    <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} value="" disabled={this.state.disabled} />
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-12" internal-fsb-guid="d331c249" style={{'marginTop': '10px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="b29e039a" style={{'paddingTop': '7px', 'paddingRight': '10px', 'textAlign': 'right'}}>
                    ชื่อ (เจ้าของร้านค้า)
                  </div>
                  <div className="internal-fsb-element col-8 offset-0" internal-fsb-guid="e27d4c3b" style={{'display': 'block', 'width': '100%'}}>
                    <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} value="" disabled={this.state.disabled} />
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-12" internal-fsb-guid="75a9d0dc" style={{'marginTop': '10px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="7d617e5d" style={{'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'}}>
                    นามสกุล (เจ้าของร้านค้า)
                  </div>
                  <div className="internal-fsb-element col-8 offset-0" internal-fsb-guid="3a931201" style={{'display': 'block', 'width': '100%'}}>
                    <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} disabled={this.state.disabled} />
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-12" internal-fsb-guid="c7e794b0" style={{'marginTop': '10px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="3a9447ea" style={{'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'}}>
                    เบอร์โทรศัพท์ (เจ้าของร้านค้า)
                  </div>
                  <div className="internal-fsb-element col-8 offset-0" internal-fsb-guid="8bcca5bc" style={{'display': 'block', 'width': '100%'}}>
                    <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} disabled={this.state.disabled} />
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="3353b490" style={{'marginTop': '10px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <div className="internal-fsb-element col-12" internal-fsb-guid="8a053c9a">
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="bee7e7b3" style={{'paddingTop': '7px', 'paddingRight': '10px', 'textAlign': 'right'}}>
                          ที่อยู่:
                        </div>
                        <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="aca398eb" style={{'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'}}>
                          จังหวัด
                        </div>
                        <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="37473e1c" style={{'display': 'block', 'width': '100%'}}>
                          <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} disabled={this.state.disabled} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="internal-fsb-element col-12" internal-fsb-guid="4bb18449" style={{'marginTop': '10px'}}>
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-4" internal-fsb-guid="86ab6312" style={{'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'}}>
                          อำเภอ / แขวง
                        </div>
                        <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="9d2bb91e" style={{'display': 'block', 'width': '100%'}}>
                          <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} disabled={this.state.disabled} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="internal-fsb-element col-12" internal-fsb-guid="9708548b" style={{'marginTop': '10px'}}>
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-4" internal-fsb-guid="d43d7ee8" style={{'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'}}>
                          ตำบล / เขต
                        </div>
                        <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="c085ee08" style={{'display': 'block', 'width': '100%'}}>
                          <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} disabled={this.state.disabled} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="internal-fsb-element col-12" internal-fsb-guid="2bc69d3c" style={{'marginTop': '10px'}}>
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-2 offset-2" internal-fsb-guid="005dc3d9" style={{'textAlign': 'right', 'paddingTop': '7px', 'paddingRight': '10px'}}>
                          บ้านเลขที่
                        </div>
                        <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="eca33837" style={{'display': 'block', 'width': '100%'}}>
                          <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} disabled={this.state.disabled} />
                        </div>
                        <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="9476b17d" style={{'paddingTop': '7px', 'paddingRight': '10px', 'textAlign': 'right'}}>
                          ซอย
                        </div>
                        <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="3a91a437" style={{'display': 'block', 'width': '100%'}}>
                          <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" disabled={this.state.disabled} />
                        </div>
                        <div className="internal-fsb-element col-1 offset-0" internal-fsb-guid="7c1d19a9" style={{'paddingTop': '7px', 'paddingRight': '10px', 'textAlign': 'right'}}>
                          ถนน
                        </div>
                        <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="e07e83cb" style={{'display': 'block', 'width': '100%'}}>
                          <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" disabled={this.state.disabled} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="internal-fsb-element col-12" internal-fsb-guid="a2495b85" style={{'marginTop': '10px'}}>
                    <div className="container-fluid">
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        <div className="internal-fsb-element col-2 offset-2" internal-fsb-guid="d1a3b49b" style={{'paddingTop': '7px', 'paddingRight': '10px', 'textAlign': 'right'}}>
                          รหัสไปรษณีย์
                        </div>
                        <div className="internal-fsb-element col-4 offset-0" internal-fsb-guid="903420db" style={{'display': 'block', 'width': '100%'}}>
                          <input className="form-control" style={{'display': 'block', 'width': '100%'}} type="text" required={true} disabled={this.state.disabled} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="internal-fsb-element col-12" internal-fsb-guid="0816dd23" style={{'paddingTop': '20px'}}>
              <div className="container-fluid">
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  <button className="internal-fsb-element internal-fsb-allow-cursor col-4 offset-4 btn btn-primary" internal-fsb-guid="e6d44b49" type="button" disabled={this.state.disabled} onClick={((event) => { window.internalFsbSubmit('e6d44b49', 'User.Store', event, ((results: any) => { this.manipulate('e6d44b49', 'User.Store', results); }).bind(this)); }).bind(this)}>
                    <div className="internal-fsb-element" internal-fsb-guid="e6d44b49-text">
                      บันทึก
                    </div>
                  </button>
                  <input className="internal-fsb-element col-12" internal-fsb-guid="8ce0a253" type="hidden" value="123" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_cbb338d5', FlowLayout_cbb338d5);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.