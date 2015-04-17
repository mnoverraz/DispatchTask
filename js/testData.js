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

	cours.addTask(t1);
	cours.addTask(t2);
	cours.addTask(t3);

	cours = new Cours("ACM");
}
