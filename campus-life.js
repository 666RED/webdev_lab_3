const changeText = () => {
	const windowWidth = window.innerWidth;
	const libraryText = document.querySelector(".library-text");
	const facultyText = document.querySelector(".faculty-text");
	const dormText = document.querySelector(".dorm-text");

	if (windowWidth > 850 && windowWidth < 1200) {
		libraryText.innerHTML =
			"The Library Tunku Tun Aminah, nestled within the heart of Universiti Tun Hussein Onn Malaysia (UTHM), is a beacon of knowledge and learning. Named in honor of the late Tunku Tun Aminah, the library stands as a testament to UTHM's commitment to academic excellence. It is a hub of resources, providing students and scholars with access to a vast collection of books, journals, digital archives, and research materials. The library offers a serene and conducive space for study and research, fostering intellectual growth. With its modern facilities and dedicated staff, Library Tunku Tun Aminah plays a pivotal role in advancing education and research at UTHM.";
		facultyText.innerHTML =
			"The Faculty of Computer Science and Information Technology (FSKTM) at Universiti Tun Hussein Onn Malaysia (UTHM) is a dynamic hub of innovation and education. With a focus on cutting-edge technology and computer science, FSKTM is at the forefront of preparing students for the digital age. Its state-of-the-art facilities, dedicated faculty, and comprehensive programs provide an ideal learning environment for future IT professionals. FSKTM is committed to fostering critical thinking, problem-solving, and creativity in its students.";
		dormText.innerHTML =
			"Kolej Kediaman Perwira at Universiti Tun Hussein Onn Malaysia (UTHM) is a vibrant and inclusive residential college, providing a home away from home for students. Nestled within the lush campus, it offers a conducive living environment where students can thrive academically and socially. The college is more than just a place to stay; it's a community that fosters personal growth, teamwork, and lifelong friendships. Kolej Kediaman Perwira is equipped with modern amenities, comfortable accommodations, and recreational facilities, making it an ideal choice for students pursuing their academic journey at UTHM.";
	} else if (windowWidth > 1200) {
		libraryText.innerHTML =
			"The Library Tunku Tun Aminah, located at the heart of Universiti Tun Hussein Onn Malaysia (UTHM), is an esteemed institution that encapsulates the spirit of knowledge and learning. Named in honor of the late Tunku Tun Aminah, a revered figure in Malaysian history, this library symbolizes UTHM's unwavering commitment to academic excellence and the pursuit of wisdom. With a sprawling collection of books, journals, digital archives, and research materials, the Library Tunku Tun Aminah is a treasure trove for students, scholars, and researchers. Its shelves house a diverse range of subjects, catering to a variety of academic interests. The library's online resources further extend its accessibility, enabling students and academics to explore a wealth of information at their fingertips. Beyond its extensive collection, the library offers a serene and conducive environment for study and research. Ample study spaces, modern facilities, and dedicated staff make it an ideal place for intellectual growth.";
		facultyText.innerHTML =
			"The Faculty of Computer Science and Information Technology (FSKTM) at Universiti Tun Hussein Onn Malaysia (UTHM) is a renowned institution dedicated to excellence in education and innovation in the field of computer science and information technology. Established with a vision to meet the growing demand for skilled professionals in the digital age, FSKTM has consistently delivered on its mission. With a dynamic curriculum that keeps pace with the rapidly evolving tech industry, FSKTM offers a wide range of programs, from computer science and software engineering to data science and information systems. The faculty boasts a world-class faculty and state-of-the-art facilities, providing students with a stimulating and conducive learning environment. FSKTM is not only committed to academic excellence but also to research and innovation. It collaborates with industry leaders and encourages students to engage in real-world projects.";
		dormText.innerHTML =
			"Kolej Kediaman Perwira, located at Universiti Tun Hussein Onn Malaysia (UTHM), is an exceptional residential college offering a home away from home to students pursuing their higher education journey. Situated within the picturesque UTHM campus, this college provides a nurturing and inclusive environment for its residents. Kolej Kediaman Perwira isn't just a place to stay; it's a vibrant community where students find a sense of belonging and support. The college fosters personal growth, academic success, and lifelong friendships. Its modern amenities and comfortable accommodations ensure that students can focus on their studies while enjoying a fulfilling college life. With state-of-the-art facilities, a welcoming atmosphere, and a commitment to creating memorable experiences, Kolej Kediaman Perwira is the perfect choice for students looking to thrive in a dynamic academic environment. It's where academic aspirations are pursued, lasting connections are formed, and countless memories are made.";
	} else {
		libraryText.innerHTML =
			"The Tunku Tun Aminah Library at UTHM Malaysia is a beacon of knowledge and learning. With its extensive collection of resources, state-of-the-art facilities, and dedicated staff, it serves as a vital hub for students and researchers, fostering academic excellence and innovation.";
		facultyText.innerHTML =
			"The Faculty of Computer Science and Information Technology (FSKTM) at UTHM Malaysia is a dynamic center of technological education and research. Committed to excellence, it empowers students with cutting-edge knowledge and skills, shaping them into future leaders in the ever-evolving field of computer science and information technology.";
		dormText.innerHTML =
			"Kolej Kediaman Perwira at UTHM Malaysia is a vibrant and inclusive residential college, fostering a supportive environment for students' holistic development. With a strong sense of community and an array of activities, it ensures a memorable and enriching university experience.";
	}
};

changeText();

addEventListener("resize", () => changeText());
