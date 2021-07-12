import React from 'react';
import {postService} from './../../services/post';
import {withRouter} from 'react-router-dom';

class Add extends React.Component{
    constructor(props){
        super(props)
        this.state={
             title:'',
             content:'',
             author:'',
             keyword:''
        }
    }

    submit(evt){
        evt.preventDefault();
        console.log(this.state);
        postService.add(this.state).then(()=>{
            alert("Thêm thành công");
            this.setState({
                title:'',
                content:'',
                author:'',
                keyword:''
            })
        }).catch(()=>{
            alert("Thêm thất bại");
        });
    }

    render(){
      return <div>
           <form onSubmit={this.submit.bind(this)}>
               <input type="text" placeholder="Title" onChange={(evt)=>this.setState({'title':evt.target.value})}/>
               <input type="text" placeholder="Author" onChange={(evt)=>this.setState({'author':evt.target.value})}/>
               <input type="text" placeholde="Keyword" onChange={(evt)=>this.setState({'keyword':evt.target.value})}/>
               <textarea placeholder="Content" onChange={(evt)=>this.setState({'content':evt.target.value})}></textarea>
               <button>Submit</button>
           </form>
       </div>             
    }
}

export default Add;