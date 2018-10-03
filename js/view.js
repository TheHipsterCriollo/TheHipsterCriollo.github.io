const view = {
    getHeader: getHeader = (info) => {
        const header = document.createElement('header');
        header.id = 'home';
        header.innerHTML = `
        <div class='images'>
        <img src='source/Page_Rsc/asteroid.svg' style='position: relative;width: 80px;height: 80px;z-index: 1;left: 220px;top: -15px;animation: floatTwo 4s ease-in-out infinite;'>
        <img id="logo" src="source/Page_Rsc/photo.jpg" alt="">
        <img src='source/Page_Rsc/asteroid.svg' style='position: relative;width: 120px;height: 120px;z-index: 2;left: 130px;top: 60px;animation: floatTwo 4s ease-in-out infinite;'>
        <img src='source/Page_Rsc/asteroid.svg' style='position: relative;width: 60px;height: 60px;z-index: 1;left: 100px;top: 20px;animation: floatTwo 4s ease-in-out infinite;'>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        <img class='planet' src='source/Page_Rsc/planet.svg' style='position: relative;width: 5%;/* height: 250px; */z-index: 1;left: 20px;bottom: -85px;opacity: 0.5;animation: floatTwo 5s ease-in-out infinite;'>
        `;
        var that = this;
        header.querySelectorAll('a')[0].addEventListener('click', (event) => {
            event.preventDefault();
            const modal = that.getInfo(info[0]);
            document.body.appendChild(modal);
        });
        header.querySelectorAll('a')[1].addEventListener('click', (event) => {
            event.preventDefault();
            const modal = that.getInfo(info[1]);
            document.body.appendChild(modal);
        });
        header.querySelectorAll('a')[2].addEventListener('click', (event) => {
            event.preventDefault();
            const modal = that.getInfo(info[2]);
            document.body.appendChild(modal);
        });
        return header;
    },

    getInfo: getInfo = (info) => {
        const infoModal = document.createElement('div');
        infoModal.id = 'infoModal';
        infoModal.innerHTML = `
        <div class="bg" style="position: fixed;top: 0;left: 0;background: black;opacity: 0.6;width: 100vw;height: 100vh;z-index: 5;"></div>
        <div class='content'>
        <span id="close">X</span>
        <h1>${info.title}</h1>
        ${info.info}
        </div>
        `;
        infoModal.querySelector('span').onclick = (event) => {
            event.preventDefault();
            infoModal.remove();
        };
        return infoModal;
    },

    getWork: getWork = (projects) => {
        const work = document.createElement('div');
        work.id = 'work';
        let that = this;
        work.innerHTML = ``;
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
            <span id="close">X</span>
            <h1 style="font-size: 3em">${projectReceive.title}</h1>
            <div class="table">
                <div class="col">
                <h3 style="font-size: 2em">Client: </h3> <p style="font-size: 2em"> ${projectReceive.client}</p>
                </div>
                <div class="col">
                <h3 style="font-size: 2em">Type: </h3> <p style="font-size: 2em"> ${projectReceive.type}</p>
                </div>
                <div class="col">
                    <h3 style="font-size: 2em">Date: </h3> <p style="font-size: 2em">${projectReceive.date}</p>
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
        project.querySelector('span').onclick = (event) => {
            event.preventDefault();
            project.remove();
        };
        return project;
    },

    getMenu: getMenu = (info) => {
        const menu = document.createElement('div');
        menu.id = 'menu';
        const menuList = this.getHeader(info);
        menu.appendChild(menuList);
        return menu;
    },

    getMosaic: getMosaic = (projects) => {
        const mosaic = document.createElement('div');
        mosaic.id = 'mosaic';
        const that = this;
        projects.forEach((elem, index) => {
            let workElem = document.createElement('div');
            //workElem.className = `work wk${index}`;
            workElem.className = `gallery-item`;
            workElem.innerHTML = `
            <!--<img src="${elem.images[0]}" alt="${elem.title}" class="image" />*-->

				<img src="${elem.images[0]}" class="gallery-image" alt="">
				<div class="gallery-item-info">
					<ul>
						<li class="gallery-item-comments">${elem.title}</li>
					</ul>
				</div>
            `;
            mosaic.appendChild(workElem);
            workElem.querySelector('div').onclick = (event) => {
                event.preventDefault();
                let project = that.getProject(elem);
                document.body.appendChild(project);
            };
        });
        return mosaic;
    },

    getMaintenance: getMaintenance = () => {
        const mainten = document.createElement('div');
        mainten.id = 'mainten';
        mainten.innerHTML = `
        <img class='background' src='source/Page_Rsc/background.svg' style='position: absolute; z-index: -2; width: 100vw; bottom: 0; opacity: 0.6'>
        <img class='header' src='source/Page_Rsc/header.svg' style='position: absolute; z-index: -1; width: 70vw; top: 220px; left: 350px'>
        <div id='text'>
        <h1>Page in Maintenance</h1>
        <h3 style='position: relative; bottom: 15px'>We are improving the way you will see us</h3>
        <ul style='position: absolute; bottom: -50px; z-index: 3'>
        <li><a href='source/Files/CV-compressed.pdf'> Check my CV </a></li>
        <li><a href='https://www.behance.net/jose-dgr-13'> Check my Behance </a></li>
        <li><a href='https://www.linkedin.com/in/josedgr13'> Check my LinkedIn </a></li>
        </ul>
        </div>
        <div id='floating'>
        <div id='laptop' ><img src='source/Page_Rsc/portatil.png' height='500' />
        <div class='shadow1'></div></div>
        <div id='mobile' ><img src='source/Page_Rsc/Movil.png' height='400' />
        <div class='shadow2'></div></div>
        </div>
        <div id='asteorids'>
        <img src='source/Page_Rsc/asteroid.svg' style='position: absolute; width: 200px; height: 200px; z-index: 2; right: 40px; bottom: 60px'>
        <img src='source/Page_Rsc/asteroid.svg' style='position: absolute; width: 140px; height: 140px; z-index: 1; right: 60px; bottom: 215px'>
        <img src='source/Page_Rsc/asteroid.svg' style='position: absolute; width: 80px; height: 80px; z-index: -1; right: 255px; bottom: 200px'>
        </div>
        <img class='planet' src='source/Page_Rsc/planet.svg' style='position: absolute; width: 300px; height: 300px; z-index: -1; left: 60px; top: 30px; opacity: 0.5'>
        `;
        return mainten;
    },

    render: (projects, info) => {
        const root = document.getElementById('root');
        root.innerHTML = ``;

        const mainten = this.getMaintenance();
        const menu = this.getMenu(info);
        const mosaic = this.getMosaic(projects);

        let page = 2;

        switch (page) {
            case 1:
                root.appendChild(mainten);
                break;
            case 2:
                root.appendChild(menu);
                root.appendChild(mosaic);
                break;
        }
    }
}