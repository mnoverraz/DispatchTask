function testData(){

	model = new db();

	p1=model.addPerson("Lucien","Martin");
	p2=model.addPerson("Sigfried", "Nicolet");
	p3=model.addPerson("Jérôme", "Helmut");

	model.addClasse("SCM1a");

	model.addCours("AV");

	t1=model.addTask("Poussière");
	t2=model.addTask("Aspirateur");
	t3=model.addTask("Cuisine");

	s1=model.addSchedule(new Date(2015, 05, 10, 10, 00), new Date(2015, 05, 10, 11, 00));
	s2=model.addSchedule(new Date(2015, 05, 17, 10, 00), new Date(2015, 05, 17, 11, 00));
	s3=model.addSchedule(new Date(2015, 05, 24, 10, 00), new Date(2015, 05, 24, 11, 00));

	/*
	model.addTaskWork(model.getTask(1),model.getPersonByName("Mathieu"),model.getSchedule(1));
	model.addTaskWork(model.getTask(1),model.getPersonByName("Opaline"),model.getSchedule(2));
	model.addTaskWork(model.getTask(1),model.getPersonByName("Laurie"),model.getSchedule(3));

	model.addTaskWork(model.getTask(2),model.getPersonByName("Laurie"),model.getSchedule(1));
	model.addTaskWork(model.getTask(2),model.getPersonByName("Mathieu"),model.getSchedule(2));
	model.addTaskWork(model.getTask(2),model.getPersonByName("Opaline"),model.getSchedule(3));

	model.addTaskWork(model.getTask(3),model.getPersonByName("Opaline"),model.getSchedule(1));
	model.addTaskWork(model.getTask(3),model.getPersonByName("Laurie"),model.getSchedule(2));
	model.addTaskWork(model.getTask(3),model.getPersonByName("Mathieu"),model.getSchedule(3));

	model.addTaskWork(model.getTask(4),model.getPersonByName("Mathieu"),model.getSchedule(1));
	model.addTaskWork(model.getTask(4),model.getPersonByName("Laurie"),model.getSchedule(2));
	model.addTaskWork(model.getTask(4),model.getPersonByName("Opaline"),model.getSchedule(3));
	*/

	
	model.addTaskWork(t1,p1,s1);
	model.addTaskWork(t1,p3,s2);
	model.addTaskWork(t1,p2,s3);

	model.addTaskWork(t2,p2,s1);
	model.addTaskWork(t2,p1,s2);
	model.addTaskWork(t2,p3,s3);

	model.addTaskWork(t3,p3,s1);
	model.addTaskWork(t3,p2,s2);
	model.addTaskWork(t3,p1,s3);
	
}
