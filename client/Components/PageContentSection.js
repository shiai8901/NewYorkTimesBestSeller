import React from 'react';
import ReactDOM from 'react-dom';
import BookMenu from './BookMenu';

export default class PageContentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			display_name: "",
			list_id: 0,
			list_image: "",
			list_image_height: 0,
			list_image_width: 0,
			list_name: "",
			list_name_encoded: "",
			updated: ""
		}
	}	

	componentWillMount() {
		
			this.setState({
				books: this.props.list.books,
				display_name: this.props.list.display_name,
				list_id: this.props.list.list_id,
				list_image: this.props.list.list_image,
				list_image_height: this.props.list.list_image_height,
				list_image_width: this.props.list.list_image_width,
				list_name: this.props.list.list_name,
				list_name_encoded: this.props.list.list_name_encoded,
				updated: this.props.list.updated				
			});
		
	}

	render() {
		// console.log("PageContentSection: ", this.props);

		return (<div className="page_content_section">
			<h3 className="page_content_section_listName">{this.props.list.list_name}</h3>
			<BookMenu className="book_menu" 
				books={this.props.list.books} />
			</div>)
	}
}