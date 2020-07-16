// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
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
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_3537bdb3 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
DataManipulationHelper.register("10714c4a", "insert", ["d064b129","a0641238","1d258b94","9ba2b637","3dcb582a"], {initClass: null})
DataManipulationHelper.register("2258be6b", "update", ["d064b129","a0641238","1d258b94","9ba2b637","3dcb582a","2640a89b"], {initClass: null})
DataManipulationHelper.register("aacbd4a7", "retrieve", ["2640a89b"], {initClass: null})
    this.initialize();
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
    return (
      <div className={"internal-fsb-element col-9 offset-0 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="3537bdb3" style={Object.assign({}, this.props.forward && this.props.forward.styles || {})}>
        
        <div className="container-fluid">
          
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="52c488ce">
              ชื่อเรื่อง
            </div>
            
            {this.getDataFromNotation("Blog.title").forEach((data, i) => {
              return (
                <Project.Controls.Textbox_d064b129 key={"item_" + i} data={data} />
              )
            })()}
            
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="5b62d3ee">
              เนื้อหา
            </div>
            
            {this.getDataFromNotation("Blog.body").forEach((data, i) => {
              return (
                <div className="internal-fsb-element col-10 offset-0" internal-fsb-guid="a0641238" key={"item_" + i} dangerouslySetInnerHTML={{__html: this.getDataFromNotation('Blog.body')}}></div>
              )
            })()}
            
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="a8690a58">
              โดยย่อ
            </div>
            
            {this.getDataFromNotation("Blog.description").forEach((data, i) => {
              return (
                <div className="internal-fsb-element col-10 offset-0" internal-fsb-guid="1d258b94" key={"item_" + i} maxlength="165" dangerouslySetInnerHTML={{__html: this.getDataFromNotation('Blog.description')}}></div>
              )
            })()}
            
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="556126e6">
              คีย์เวิร์ด
            </div>
            
            {this.getDataFromNotation("Blog.keywords").forEach((data, i) => {
              return (
                <div className="internal-fsb-element col-10 offset-0" internal-fsb-guid="9ba2b637" key={"item_" + i} dangerouslySetInnerHTML={{__html: this.getDataFromNotation('Blog.keywords')}}></div>
              )
            })()}
            
            <div className="internal-fsb-element col-2 offset-0" internal-fsb-guid="76b0ad64">
              ที่อยู่ของรูปภาพ
            </div>
            
            {this.getDataFromNotation("Blog.image").forEach((data, i) => {
              return (
                <div className="internal-fsb-element col-10 offset-0" internal-fsb-guid="3dcb582a" key={"item_" + i} dangerouslySetInnerHTML={{__html: this.getDataFromNotation('Blog.image')}}></div>
              )
            })()}
            <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary col-2 offset-4" internal-fsb-guid="10714c4a" style={{'marginTop': '10px'}} type="button" onClick={((event) => { window.internalFsbSubmit('10714c4a', '', event, ((results: any) => { this.manipulate('insert', '', results); }).bind(this)); }).bind(this)}>
              
              <div className="internal-fsb-element" internal-fsb-guid="10714c4a-text">
                Insert
              </div>
              
            </button>
            
            <button className="internal-fsb-element internal-fsb-allow-cursor col-2 offset-0 btn btn-primary" internal-fsb-guid="2258be6b" style={{'marginTop': '10px'}} type="button" onClick={((event) => { window.internalFsbSubmit('2258be6b', '', event, ((results: any) => { this.manipulate('update', '', results); }).bind(this)); }).bind(this)}>
              <div className="internal-fsb-element" internal-fsb-guid="2258be6b-text">
                Update
              </div>
            </button>
            <div className="internal-fsb-element col-1 offset-1" internal-fsb-guid="2640a89b">
              <input style={{'display': 'block', 'width': '100%', 'marginTop': '13px'}} type="text" required={true} />
            </div>
            <button className="internal-fsb-element internal-fsb-allow-cursor btn btn-primary col-2 offset-0" internal-fsb-guid="aacbd4a7" style={{'marginTop': '10px'}} type="button" onClick={((event) => { window.internalFsbSubmit('aacbd4a7', '', event, ((results: any) => { this.manipulate('retrieve', '', results); }).bind(this)); }).bind(this)}>
              <div className="internal-fsb-element" internal-fsb-guid="aacbd4a7-text">
                Load
              </div>
            </button>
          </div>
          
        </div>
        
      </div>
    )
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_3537bdb3', FlowLayout_3537bdb3);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.