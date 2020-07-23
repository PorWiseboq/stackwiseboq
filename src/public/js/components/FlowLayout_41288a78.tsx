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
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_41288a78 extends Base {
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
    let script = document.createElement('script');
    script.setAttribute('src', 'https://js.stripe.com/v3/');
    script.setAttribute('type', 'text/javascript');
    script.addEventListener(this.onStripeLoaded.bind(this));
    
    document.body.appendChild(script);
  }
  
  private onStripeLoaded(event) {
    let stripe = Stripe('pk_test_51H7FVCFTijJaGDsZVOskcTj7woT4DJeecH86J9l7sXN0AFeMpdBe6N5tWz0lZ07VW5Zv2PrIMO0pgvY5t5zLHdrZ00FvWbdBwi');
    
    // Create a Stripe client.
    var stripe = Stripe('pk_test_51H7FVCFTijJaGDsZVOskcTj7woT4DJeecH86J9l7sXN0AFeMpdBe6N5tWz0lZ07VW5Zv2PrIMO0pgvY5t5zLHdrZ00FvWbdBwi');
    
    // Create an instance of Elements.
    var elements = stripe.elements();
    
    // Custom styling can be passed to options when creating an Element.
    // (Note that this demo uses a wider set of styles than the guide below.)
    var style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    
    // Create an instance of the card Element.
    var card = elements.create('card', {style: style});
    
    // Add an instance of the card Element into the `card-element` <div>.
    card.mount('#card-element');
    
    // Handle real-time validation errors from the card Element.
    card.on('change', function(event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });
    
    // Handle form submission.
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    
      stripe.createToken(card).then(function(result) {
        if (result.error) {
          // Inform the user if there was an error.
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          // Send the token to your server.
          stripeTokenHandler(result.token);
        }
      });
    });
    
    // Submit the form with the token ID.
    function stripeTokenHandler(token) {
      // Insert the token ID into the form so it gets submitted to the server
      var form = document.getElementById('payment-form');
      var hiddenInput = document.createElement('input');
      hiddenInput.setAttribute('type', 'hidden');
      hiddenInput.setAttribute('name', 'stripeToken');
      hiddenInput.setAttribute('value', token.id);
      form.appendChild(hiddenInput);
    
      // Submit the form
      form.submit();
    }
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
    return (
      <div className={"internal-fsb-element col-10 offset-1 -fsb-preset-180079a2 " + (this.props.forward && this.props.forward.classes || '')} internal-fsb-guid="41288a78" style={Object.assign({'FsbInheritedPresets': '180079a2'}, this.props.forward && this.props.forward.styles || {})}>
        
        <div className="container-fluid">
          
          <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
            
            <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="b0e94808" style={{'FsbInheritedPresets': '7a279686'}}>
              จ่ายเงินค่าสินค้า
            </div>
            
            <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="a68112ee" style={{'FsbInheritedPresets': '4839e353'}}>
              กรุณาเลือกว่าจะจ่ายโดยการโอนเงินไปยังธนาคาร หรือว่าจะให้ตัดผ่านบัตรเครดิต
            </div>
            
            <div className="internal-fsb-element col-6 offset-0" internal-fsb-guid="179c943c" style={{'borderRightWidth': '1px', 'borderRightColor': 'rgba(22, 98, 250, 1)', 'borderRightStyle': 'solid'}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="4040dba7" style={{'textAlign': 'center', 'FsbInheritedPresets': '7a279686'}}>
                    โอนเงินผ่านธนาคาร
                  </div>
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="16ed2784" style={{'textAlign': 'center', 'FsbInheritedPresets': '4839e353'}}>
                    กรุณาโอนเงินไปที่ธนาคารเอบีซี สาขาห้าหกเจ็ด
                    <div>
                      นายกอขอคอ
                    </div>
                    
                  </div>
                  
                  <div className="internal-fsb-element col-12" internal-fsb-guid="7443b335">
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        
                        <div className="internal-fsb-element col-12 -fsb-preset-b5cd72c0" internal-fsb-guid="ae38da00" style={{'textAlign': 'center', 'FsbInheritedPresets': 'b5cd72c0', 'fontWeight': 'bold', 'marginBottom': '5px', 'fontSize': '14px'}}>
                          จำนวนเงิน
                        </div>
                        
                        <div className="internal-fsb-element col-12 -fsb-preset-b5cd72c0" internal-fsb-guid="9699d64d" style={{'FsbInheritedPresets': 'b5cd72c0', 'textAlign': 'center'}}>
                          หนึ่งหมื่นห้าพันบาทยี่สิบสตางค์ถ้วน
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  
                  <div className="internal-fsb-element col-12" internal-fsb-guid="a3c6554b" style={{'marginTop': '15px'}}>
                    
                    <div className="container-fluid">
                      
                      <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                        
                        <div className="internal-fsb-element col-12 -fsb-preset-b5cd72c0" internal-fsb-guid="782d3986" style={{'textAlign': 'center', 'FsbInheritedPresets': 'b5cd72c0', 'fontWeight': 'bold', 'marginBottom': '5px', 'fontSize': '14px'}}>
                          โปรดดำเนินการผ่านธนาคาร
                        </div>
                        
                        <div className="internal-fsb-element col-12 -fsb-preset-b5cd72c0" internal-fsb-guid="5eeaed97" style={{'FsbInheritedPresets': 'b5cd72c0', 'textAlign': 'center', 'marginBottom': '15px'}}>
                          คุณอาจเปิดหน้านี้ทิ้งไว้หรือเข้าสู่ระบบเพื่อกลับเข้ามายังหน้านี้ในภายหลังได้เช่นกัน
                        </div>
                        
                        <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="c6cd6a36">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%', 'marginTop': '5px'}} type="text" placeholder="วันและเวลาที่โอนสำเร็จ ddmmyyyy hhmm" />
                        </div>
                        
                        <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="0c59a0a4">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%', 'marginTop': '10px'}} type="text" placeholder="ชื่อผู้ที่ได้ทำการโอน" />
                        </div>
                        
                        <div className="internal-fsb-element col-12 offset-0" internal-fsb-guid="5cab012e">
                          <input className="form-control form-control-sm" style={{'display': 'block', 'width': '100%', 'marginTop': '10px'}} type="text" placeholder="ชื่อธนาคารและสาขาต้นทาง" />
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
            <div className="internal-fsb-element col-6 offset-0" internal-fsb-guid="8173e6a3" style={{'borderLeftColor': 'rgba(22, 98, 250, 1)', 'borderLeftStyle': 'solid', 'borderLeftWidth': '1px'}}>
              
              <div className="container-fluid">
                
                <div className="row internal-fsb-strict-layout internal-fsb-allow-cursor">
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-7a279686" internal-fsb-guid="81a37061" style={{'textAlign': 'center', 'FsbInheritedPresets': '7a279686'}}>
                    จ่ายผ่านบัตรเครดิต
                  </div>
                  
                  <div className="internal-fsb-element col-12 -fsb-preset-4839e353" internal-fsb-guid="9b4e1a4c" style={{'textAlign': 'center', 'FsbInheritedPresets': '4839e353'}}>
                    กรุณาเลือกประเภทบัตรเครดิต กรอกหมายเลขบัตร วันหมดอายุ พร้อมทั้งหมายเลข cvv ที่อยู่หลังบัตร
                  </div>
                  
                  <div className="internal-fsb-element col-10 offset-1" internal-fsb-guid="a1407abd" dangerouslySetInnerHTML={{__html: "<style type=\"text/css\">\n.StripeElement {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n</style>\n<form action=\"/charge\" method=\"post\" id=\"payment-form\">\n  <div class=\"form-row\">\n    <div id=\"card-element\">\n      <!-- A Stripe Element will be inserted here. -->\n    </div>\n    <!-- Used to display form errors. -->\n    <div id=\"card-errors\" role=\"alert\"></div>\n  </div>\n</form>"}}></div>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    )
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_41288a78', FlowLayout_41288a78);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.