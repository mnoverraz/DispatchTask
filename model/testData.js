function testData(){

	testModel = new db();

	p1=testModel.addPerson("Lucien","Martin");
	p2=testModel.addPerson("Sigfried", "Nicolet");
	p3=testModel.addPerson("Jérôme", "Helmut");

	testModel.addClasse("SCM1a");

	testModel.addCours("AV");

	t1=testModel.addTask("Poussière");
	t2=testModel.addTask("Aspirateur");
	t3=testModel.addTask("Cuisine");
	t4=testModel.addTask("Toilettes");

	s1=testModel.addSchedule(new Date(2015, 05, 10, 10, 00), new Date(2015, 05, 10, 11, 00));
	s2=testModel.addSchedule(new Date(2015, 05, 17, 10, 00), new Date(2015, 05, 17, 11, 00));
	s3=testModel.addSchedule(new Date(2015, 05, 24, 10, 00), new Date(2015, 05, 24, 11, 00));

	/*
	testModel.addTaskWork(testModel.getTask(1),testModel.getPersonByName("Mathieu"),testModel.getSchedule(1));
	testModel.addTaskWork(testModel.getTask(1),testModel.getPersonByName("Opaline"),testModel.getSchedule(2));
	testModel.addTaskWork(testModel.getTask(1),testModel.getPersonByName("Laurie"),testModel.getSchedule(3));

	testModel.addTaskWork(testModel.getTask(2),testModel.getPersonByName("Laurie"),testModel.getSchedule(1));
	testModel.addTaskWork(testModel.getTask(2),testModel.getPersonByName("Mathieu"),testModel.getSchedule(2));
	testModel.addTaskWork(testModel.getTask(2),testModel.getPersonByName("Opaline"),testModel.getSchedule(3));

	testModel.addTaskWork(testModel.getTask(3),testModel.getPersonByName("Opaline"),testModel.getSchedule(1));
	testModel.addTaskWork(testModel.getTask(3),testModel.getPersonByName("Laurie"),testModel.getSchedule(2));
	testModel.addTaskWork(testModel.getTask(3),testModel.getPersonByName("Mathieu"),testModel.getSchedule(3));

	testModel.addTaskWork(testModel.getTask(4),testModel.getPersonByName("Mathieu"),testModel.getSchedule(1));
	testModel.addTaskWork(testModel.getTask(4),testModel.getPersonByName("Laurie"),testModel.getSchedule(2));
	testModel.addTaskWork(testModel.getTask(4),testModel.getPersonByName("Opaline"),testModel.getSchedule(3));
	*/

	
	testModel.addTaskWork(t1,p1,s1);
	testModel.addTaskWork(t1,p3,s2);
	testModel.addTaskWork(t1,p2,s3);

	testModel.addTaskWork(t2,p2,s1);
	testModel.addTaskWork(t2,p1,s2);
	testModel.addTaskWork(t2,p3,s3);

	testModel.addTaskWork(t3,p3,s1);
	testModel.addTaskWork(t3,p2,s2);
	testModel.addTaskWork(t3,p1,s3);

	testModel.addTaskWork(t4,p1,s1);
	testModel.addTaskWork(t4,p3,s2);
	testModel.addTaskWork(t4,p2,s3);
	
}
