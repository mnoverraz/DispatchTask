function testData(){

	db = new db();

	p1=db.addPerson("Mathieu","Noverraz");
	p2=db.addPerson("Laurie", "Nicolet");
	p3=db.addPerson("Opaline", "Op");

	db.addClasse("SCM1a");

	db.addCours("AV");

	t1=db.addTask("Balai");
	t2=db.addTask("Poubelles");
	t3=db.addTask("Lavabos");
	t4=db.addTask("Tabourets");

	s1=db.addSchedule(new Date(2015, 00, 25, 10, 00), new Date(2015, 00, 25, 11, 00));
	s2=db.addSchedule(new Date(2015, 00, 26, 10, 00), new Date(2015, 00, 26, 11, 00));
	s3=db.addSchedule(new Date(2015, 00, 27, 10, 00), new Date(2015, 00, 27, 11, 00));

	/*
	db.addTaskWork(db.getTask(1),db.getPersonByName("Mathieu"),db.getSchedule(1));
	db.addTaskWork(db.getTask(1),db.getPersonByName("Opaline"),db.getSchedule(2));
	db.addTaskWork(db.getTask(1),db.getPersonByName("Laurie"),db.getSchedule(3));

	db.addTaskWork(db.getTask(2),db.getPersonByName("Laurie"),db.getSchedule(1));
	db.addTaskWork(db.getTask(2),db.getPersonByName("Mathieu"),db.getSchedule(2));
	db.addTaskWork(db.getTask(2),db.getPersonByName("Opaline"),db.getSchedule(3));

	db.addTaskWork(db.getTask(3),db.getPersonByName("Opaline"),db.getSchedule(1));
	db.addTaskWork(db.getTask(3),db.getPersonByName("Laurie"),db.getSchedule(2));
	db.addTaskWork(db.getTask(3),db.getPersonByName("Mathieu"),db.getSchedule(3));

	db.addTaskWork(db.getTask(4),db.getPersonByName("Mathieu"),db.getSchedule(1));
	db.addTaskWork(db.getTask(4),db.getPersonByName("Laurie"),db.getSchedule(2));
	db.addTaskWork(db.getTask(4),db.getPersonByName("Opaline"),db.getSchedule(3));
	*/

	
	db.addTaskWork(t1,p1,s1);
	db.addTaskWork(t1,p3,s2);
	db.addTaskWork(t1,p2,s3);

	db.addTaskWork(t2,p2,s1);
	db.addTaskWork(t2,p1,s2);
	db.addTaskWork(t2,p3,s3);

	db.addTaskWork(t3,p3,s1);
	db.addTaskWork(t3,p2,s2);
	db.addTaskWork(t3,p1,s3);

	db.addTaskWork(t4,p1,s1);
	db.addTaskWork(t4,p3,s2);
	db.addTaskWork(t4,p2,s3);
	
}
