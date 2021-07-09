import React from 'react';
import {postService} from './../../services/post';
import {withRouter} from 'react-router-dom'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount() {
    
this.get();
    }

    get(){
        postService.getData().then((resp)=>{
            const data = resp.data;
            this.setState({data:data})    
        }).catch(()=>{
            alert("Lấy về thông tin lỗi");
        });
    }

    del(id){
        postService.del(id).then((resp)=>{
            alert("Xoá thành công");
            this.get();
        }).catch(()=>{
            alert("Xoá thất bại");
        })
    }

    render(){
        return (<div>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Keyword</td>
                    <td>Delete</td>
                </tr>

{
    this.state.data.map((item,index) =>{
        return (
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.keyword}</td>
            <td>
                <button onClick={this.del.bind(this,item.id)}>Delete</button>
            </td>
            </tr>
        )
    })
}
        
            </table>
        </div>)
    }
}

export default List;