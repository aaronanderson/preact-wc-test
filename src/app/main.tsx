import { Component, h } from "preact";


import { Button } from '@workday/canvas-kit-react-button';
import { ACTION_EVENT, Action } from './preact-wc-test';



interface MainProps {
  status: string
}

interface MainState {
  status: string;
}

export class Main extends Component<MainProps, MainState> {

  constructor(props: MainProps) {
    super(props);

    this.state = { status: props.status };
  }
  state = {
    status: 'foo'
  }

  render() {
    return (
      <div>
        <preact-wc-test foo={this.props.status}>
           <Button buttonType={Button.Types.Primary} onClick={this.wcAction}>React Button</Button>          
        </preact-wc-test>
      </div>

    );
  }

  private wcAction = (event: any) => {
    const action: Action = {
      type: 'main'
    }
    event.target.dispatchEvent(new CustomEvent(ACTION_EVENT, { bubbles: true, detail: action }))
  }
}
