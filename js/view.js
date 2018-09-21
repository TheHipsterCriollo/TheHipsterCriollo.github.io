const view = {
    getHeader: getHeader = () => {
        const header = document.createElement('header');
        header.id = 'home';
        header.innerHTML = `
        <img id="logo" src="" alt="">
        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        `;
        return header;
    },

    getLanding: getLanding = () => {
        const landing = document.createElement('div');
        landing.id = 'allLanding';
        landing.innerHTML = `
        <div id="landing">
        <img src="" alt="">
    </div>
    <div class="landingFoot">
        <h3 style="font-weight: 400; text-align: left">We both are going to build experiences
            <br> that enhance the user's vision of your product:</h3>
        <h3 style="font-weight: 800; text-align: right"> It doesn't matter what is it,
            <br> what really matters it's how they feel...</h3>
    </div>
        `;
        return landing;
    },

    getAbout: getAbout = () => {
        const about = document.createElement('div');
        about.id = 'about';
        about.innerHTML = `
        <h1>Who I am? well...</h1>
        <p>I am a INTERACTIVE MEDIA DESIGN student at Icesi University. My areas of interest range from web development and
            UX / UI design, as well as illustration and project management skills and innovation analysis. I participated
            in multiple conferences and design courses such as Hoy es Diseño and la Truca: animation festival, I have intervened
            in projects for the intervention of companies (Muntú early stimulation center and the restaurant "Platillos Voladores")
            and member of the research group 418.</p>
        `;
        return about;
    },

    getSkills: getSkills = () => {
        const skills = document.createElement('div');
        skills.id = 'skills';
        skills.innerHTML = `
        <div class="skill sk1">
            <h3>I can’t give you the right way, but I can give you many ways.</h3>
            <p>All roads lead to Rome Doesn't matter how many of them there are, what it’s important is that we must to find
                out the better one,that’s why I’m always looking for it and I'll make sure you will get it right too.</p>
        </div>
        <div class="skill sk2">
            <h3>Let’s build for a better world.</h3>
            <p>It may sound so fairy-taly, but it is important to think for the posibility of a better world. We can think for
                many ideas that can improve not only forthe company itself but for users themselves too. After all we are
                designing for them, aren't we?</p>
        </div>
        <div class="skill sk3">
            <h3>The best you show of yourself, the more people that follows you.</h3>
            <p>I always go further showing the best of yourself where most people will follow you: the internet. It’s is important
                to think how are you going to show yourself to them, let me give you a hand with no doubt.</p>
        </div>
        `;
        return skills;
    },

    getWork: getWork = (projects) => {
        const work = document.createElement('div');
        work.id = 'work';
        let that = this;
        work.innerHTML = `
        <div class="text">
        <h1>What have I done?</h1>
        <h3 style="font-weight: 400">I’m highly visionary who things that we can generate an impact into people lives by taking advantage of networking
        and the better way to do it is designing it. That’s why me more inmersed are UX/UI design, Web design and
        also illustration.</h3>
        </div>
        `;
        projects.forEach((element, index) => {
            let workElem = document.createElement('div');
            workElem.className = `work wk${index}`;
            workElem.innerHTML = `
            <a href="">
            <img src="${element.images[0]}" alt="" width="100" height="100" />
            </a>
            `;
            work.appendChild(workElem);
            workElem.querySelector('a').onclick = (event) => {
                event.preventDefault();
                let project = that.getProject(element);
                document.body.appendChild(project);
            };
        });
        return work;
    },

    getProject: getProject = (projectReceive) => {
        const project = document.createElement('div');
        project.id = 'modal';
        project.style.display = 'block';
        project.innerHTML = `
        <div class="bg" style="position: fixed; top: 0; left: 0; background: black; opacity: 0.6; width: 100vw; height: 100vh"></div>
        <div class="content">
            <button id="close">X</button>
            <h1>${projectReceive.title}</h1>
            <div class="table">
                <div class="col">
                    <h5>Client: ${projectReceive.client}</h5>
                </div>
                <div class="col">
                    <h5>Type: ${projectReceive.type}</h5>
                </div>
                <div class="col">
                    <h5>Date: ${projectReceive.date}</h5>
                </div>
            </div>
            <p>
            ${projectReceive.description}
            </p>
            <div class="image">
                <img src="${projectReceive.images[1]}" alt="">
            </div>
        </div>
        `;
        project.querySelector('button').onclick = (event) => {
            event.preventDefault();
            project.remove();
        };
        return project;
    },

    getContact: getContact = () => {
        const contact = document.createElement('div');
        contact.id = 'contact';
        contact.innerHTML = `
        <h1>Let's get some coffee and talk...</h1>
        <a href="#home" style="position:fixed; bottom:50px; left: 60px; text-decoration: blue; background: orange; padding: 5px; box-sizing: border-box">TOP</a>
        `;
        return contact;
    },

    getMaintenance: getMaintenance = () => {
        const mainten = document.createElement('div');
        mainten.id = 'mainten';
        mainten.innerHTML = `
        <img class='background' src='source/background.svg' style='position: absolute; z-index: -2; width: 100vw; bottom: 0; opacity: 0.6'>
        <img class='header' src='source/header.svg' style='position: absolute; z-index: -1; width: 70vw; top: 220px; left: 350px'>
        <div id='text'>
        <h1>Page in Maintenance</h1>
        <h3>You will be redirected to Behance <br> for checking my job</h3>
        <ul style='position: fixed; bottom: 20px'>
        <li><a href='source/Files/CV-compressed.pdf'> Check my CV </a></li>
        <li><a href='https://www.behance.net/jose-dgr-13'> Check my Behance </a></li>
        <li><a href='www.linkedin.com/in/josedgr13'> Check my LinkedIn </a></li>
        </ul>
        </div>
        <div id='floating'>
        <div id='laptop' ><img src='source/portatil.png' height='500' />
        <div class='shadow1'></div></div>
        <div id='mobile' ><img src='source/Movil.png' height='400' />
        <div class='shadow2'></div></div>
        </div>
        <div id='asteorids'>
        <img src='source/asteroid.svg' style='position: absolute; width: 200px; height: 200px; z-index: 2; right: 40px; bottom: 60px'>
        <img src='source/asteroid.svg' style='position: absolute; width: 140px; height: 140px; z-index: 1; right: 60px; bottom: 215px'>
        <img src='source/asteroid.svg' style='position: absolute; width: 80px; height: 80px; z-index: -1; right: 255px; bottom: 200px'>
        </div>
        <img class='planet' src='source/planet.svg' style='position: absolute; width: 300px; height: 300px; z-index: -1; left: 60px; top: 30px; opacity: 0.5'>
        `;
        window.setTimeout(() => {
           // window.location.href = "https://www.behance.net/jose-dgr-13";
        }, 5000);
        return mainten;
    },

    render: (projects) => {
        const root = document.getElementById('root');
        root.innerHTML = ``;

        let header = this.getHeader();
        let landing = this.getLanding();
        let about = this.getAbout();
        let skills = this.getSkills();
        let work = this.getWork(projects);
        let contact = this.getContact();
        let mainten = this.getMaintenance();

        let page = 1;

        switch (page) {
            case 0:
                root.appendChild(header);
                root.appendChild(landing);
                root.appendChild(about);
                root.appendChild(skills);
                root.appendChild(work);
                root.appendChild(contact);
                break;
            case 1:
                root.appendChild(mainten);
                break;
        }
    }
}