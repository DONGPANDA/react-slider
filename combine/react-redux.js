/**
 * Created by 96004 on 2017/8/2.
 */
import React from 'react';
let connect=(mapStateToProps,mapDispatchToProps)=>(OldComponent)=>{
    class NewComponent extends React.Component{
        static contextTypes={
            store:React.PropTypes.object
        }
        componentDidMount() {
            this.setState(mapStateToProps(this.context.store.getState()))
            this.unsubscribe=this.context.store.subscribe(()=>{
                this.setState(mapStateToProps(this.context.store.getState()))
            })
        }
        componentWillUnmount() {
            this.unsubscribe()
        }
        render() {
            return <OldComponent {...mapDispatchToProps(this.context.store.dispatch)} {...this.state} />
        }
    }
    return NewComponent
}
class Provider extends React.Component{
    static childContext={
        store:React.PropTypes.object
    }
    getChildContext() {
        return {store:this.props.store}
    }
    render() {
        return(
            this.props.children
        )
    }
}
export {connect,Provider}
