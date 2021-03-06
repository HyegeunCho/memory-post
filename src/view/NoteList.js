import React from 'react';
import './NoteList.css';
import {Link} from 'react-router-dom';

export default class NoteList extends React.Component {
    constructor(props) {
        super(props);

        var defaultNote = {
            name: 'Default Note', 
            isShared: false
        };

        this.noteList = [defaultNote];
        if (this.props.noteList) {
            this.noteList = this.noteList.concat(this.props.noteList);
        }
    }

    render() {
        var list = this.noteList.map(function(val, index, origin) {
            return (
                <NoteListItem index={index + 1} name={val.name} isShared={val.isShared} key={`NoteItem-${index}`}/>
            );
        });

        return (
            <div className='NoteList-container'>
                {list}
            </div>
        )
    }
}

export class NoteListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var index = this.props.index;
        var name = this.props.name;
        var isShared = this.props.isShared;

        return (
            <Link to='/post'>
                <div className='NoteItem'>
                    <div className='NoteItem-index'>{index}</div>
                    <div className='NoteItem-name'>{name}</div>
                    <div className='NoteItem-delete'>delete</div>
                </div>
            </Link>
        );
    }
}