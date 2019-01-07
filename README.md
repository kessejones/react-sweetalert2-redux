# react-sweetalert2-redux

## Install

```
$ npm install react-sweetalert2-redux
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ReduxSweetAlert2, { reducer } from 'react-sweetalert2-redux';

const rootReducers = combineReducers({
    sweetalert2: reducer
});

const store = createStore(
    rootReducers, 
    applyMiddleware(thunk)
);

const App = () => (
    <Provider store={store}>
        <ReduxSweetAlert2 />
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
```

## API

### Payload

```js
{
    show: bool.isRequired,
    title?: string,
    titleText?: string,
    html?: string,
    text?: string,
    type?: enum(['warning', 'error', 'success', 'info', 'input']),
    footer?: string,
    backdrop?: boolean,
    toast?: boolean,
    target?: string,
    input?: enum(['text', 'email', 'password', 'number', 'tel', 'range', 'textarea', 'select', 'radio', 'checkbox', 'file', 'url']),
    width?: number,
    padding?: number,
    background?: string,
    position?: enum(['center', 'top', 'top-start', 'top-end', 'center-start', 'center-end', 'bottom', 'bottom-start', 'bottom-end']),
    grow?: enum(['row', 'column', 'fullscreen', false]),
    customClass?: string,
    timer?: number,
    animation?: boolean,
    heightAuto?: boolean,
    allowOutsideClick?: boolean,
    allowEscapeKey?: boolean,
    allowEnterKey?: boolean,
    stopKeydownPropagation?: boolean,
    keydownListenerCapture?: boolean,
    showConfirmButton?: boolean,
    showCancelButton?: boolean,
    confirmButtonText?: string,
    cancelButtonText?: string,
    confirmButtonColor?: string,
    cancelButtonColor?: string,
    confirmButtonClass?: string,
    cancelButtonClass?: string,
    confirmButtonAriaLabel?: string,
    cancelButtonAriaLabel?: string,
    buttonsStyling?: boolean,
    reverseButtons?: boolean,
    focusConfirm?: boolean,
    focusCancel?: boolean,
    showCloseButton?: boolean,
    closeButtonAriaLabel?: string,
    showLoaderOnConfirm?: boolean,
    preConfirm?: Function,
    imageUrl?: string,
    imageWidth?: number,
    imageHeight?: number,
    imageAlt?: string,
    imageClass?: string,
    inputPlaceholder?: string,
    inputValue?: string,
    inputOptions?: Object,
    inputAutoTrim?: boolean,
    inputAttributes?: Object,
    inputValidator?: Function,
    validationMesage?: string,
    inputClass?: string,
    progressSteps?: [],
    currentProgressStep?: string,
    progressStepsDistance?: string,
    onBeforeOpen?: Function,
    onOpen?: Function,
    onClose?: Function,
    onAfterClose?: Function,
    useRejections?: boolean,
    expectRejections?: boolean,
    onConfirm?: Function,
    showLoading?: boolean
}
```

### Actions

```js
openAlert(payload: Payload);
```

```js
closeAlert();
```

## Examples

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxSweetAlert2, { openAlert } from 'react-sweetalert2-redux';

class App extends Component {
    render(){
        return (
            <div>
                <button onClick={() => {
                    this.props.openAlert({
                        title: 'Hello World'
                    });
                }}>
                    Open Alert
                </button>
                <ReduxSweetAlert2 />
            </div>
        );
    }
}

export default connect(null, { openAlert })(App);
```
