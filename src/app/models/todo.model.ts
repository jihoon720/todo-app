class ToDo{
	_id: string;
	title: string;
	description: string;
	date: Date;
	status: string;

	//todo object initialization
	constructor(){
		this.title = "";
		this.description = "";
		this.date = new Date();
		this.status = "";
	}
}

export default ToDo;