import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openAlert } from '../../lib/index';
 
import './styles.css';

class AppRedux extends Component{
    render(){
        return (
            <div>
                <section>
                    <h3>Basic</h3>
                    <button onClick={() => {
                        this.props.openAlert({
                            title: 'Hello World',
                            text: 'Hello World',
                        });
                    }}>
                        Open
                    </button>
                </section>
                <section>
                    <h3>A title with a text under</h3>
                    <button onClick={() => {
                        this.props.openAlert({
                            title: 'The Internet?',
                            text: 'That thing is still around?',
                            type: 'question'
                        });
                    }}>
                        Open
                    </button>
                </section>
                <section>
                    <h3>A modal with a title, an error icon, a text, and a footer</h3>
                    <button onClick={() => {
                        this.props.openAlert({
                            type: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href>Why do I have this issue?</a>'
                        });
                    }}>
                        Open
                    </button>
                </section>
                <section>
                    <h3>A modal with a Loading</h3>
                    <button onClick={() => {
                        this.props.openAlert({
                            showLoading: true,
                            title: 'Loading...'
                        });
                    }}>
                        Open
                    </button>
                </section>
                <section>
                    <h3>A modal with confirm value</h3>
                    <button onClick={() => {
                        this.props.openAlert({
                            type: 'question',
                            text: 'Are you sure?',
                            title: "You won't be able to revert this?",
                            confirmButtonText: 'Yes, delete it!',
                            showConfirmButton: true,
                            showCancelButton: true,
                            onConfirm: result => {
                                if(result.value){
                                    this.props.openAlert({
                                        title: 'Deleted!',
                                        text: 'Your file has been deleted.',
                                        type: 'success'
                                    });
                                }
                            }
                        });
                    }}>
                        Open
                    </button>
                </section>
                <section>
                    <h3>Event OnClose</h3>
                    <button onClick={() => {
                        this.props.openAlert({
                            title: 'Hello World',
                            text: 'Hello World',
                            type: 'question',
                            onClose: () => {
                                this.props.openAlert({
                                    title: 'The Internet?',
                                    text: 'That thing is still around?',
                                    type: 'question'
                                });
                            }
                        });
                    }}>
                        Open
                    </button>
                </section>
                <section>
                    <h3>A modal with Input and confirm value</h3>
                    <button onClick={() => {
                        this.props.openAlert({
                            type: 'question',
                            text: 'Write your name.',
                            title: "What is your name?",
                            input: 'text',
                            showConfirmButton: true,
                            showCancelButton: true,
                            onConfirm: result => {
                                if(result.value){
                                    this.props.openAlert({
                                        text: `Hello ${result.value}`,
                                        type: 'success'
                                    });
                                }
                            }
                        });
                    }}>
                        Open
                    </button>
                </section>
            </div> 
        );
    }
}

export default connect(null, { openAlert })(AppRedux);