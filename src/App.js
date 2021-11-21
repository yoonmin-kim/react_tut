import React, { Component } from 'react';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information:[
      {
        id: 0,
        name: '김윤민',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '누군가',
        phone: '010-1111-1111'
      }
    ],
    keyword: ''
  }
  handleChange = (e) => {
      const {value} = e.target;
      this.setState({
        keyword: value
      });
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({id:this.id++, ...data})
    });
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(info => info.id===id ? {...info, ...data} : info)
    });
  }

  render() {
    const {information, keyword} = this.state;
    const filteredList = information.filter(info => info.name.indexOf(keyword) !== -1);
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <p>
          <input
          placeholder="검색할 키워드를 입력하세요"
          onChange={this.handleChange}
          value={keyword}
          />
        </p>
        <PhoneInfoList 
        data={filteredList}
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
export default App;