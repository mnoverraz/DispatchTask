function testData(){
	p1 = new Person("Mathieu","Noverraz");
	p2 = new Person("Laurie", "Nicolet");
	p3 = new Person("Opaline", "Op");

	classe = new Classe("SCM1a");
	classe.addPerson(p1);
	classe.addPerson(p2);
	classe.addPerson(p3);

	t1 = new Task("Balai");
	t2 = new Task("Poubelles");
	t3 = new Task("Lavabos");
	t4 = new Task("Tabourets");
	
	cours = new Cours("ACM");
	
	cours.addTask(t1);
	cours.addTask(t2);
	cours.addTask(t3);
	cours.addTask(t4);

	cours.addClasse(classe);


	s1 = new Schedule(new Date(2015, 00, 01, 10, 00), new Date(2015, 00, 01, 11, 00));
	s2 = new Schedule(new Date(2015, 00, 02, 10, 00), new Date(2015, 00, 02, 11, 00));
	s3 = new Schedule(new Date(2015, 00, 03, 10, 00), new Date(2015, 00, 03, 11, 00));

	cours.addSchedule(s1);
	cours.addSchedule(s2);
	cours.addSchedule(s3);

	cours.listTab.push(new Array(t1,p1,s1));
	cours.listTab.push(new Array(t1,p3,s2));
	cours.listTab.push(new Array(t1,p2,s3));

	cours.listTab.push(new Array(t2,p2,s1));
	cours.listTab.push(new Array(t2,p1,s2));
	cours.listTab.push(new Array(t2,p3,s3));

	cours.listTab.push(new Array(t3,p3,s1));
	cours.listTab.push(new Array(t3,p2,s2));
	cours.listTab.push(new Array(t3,p1,s3));

	cours.listTab.push(new Array(t4,p1,s1));
	cours.listTab.push(new Array(t4,p2,s2));
	cours.listTab.push(new Array(t4,p3,s3));

}
