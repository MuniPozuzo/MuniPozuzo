const CONFIG = window.CONFIG;
/* 
<div class="division-rango">
                <app-range-compromise :percent="district.porcentajeCulminado" title="De compromisos cumplidos" icon="assets/img/cumplidos.svg" className="complete">
                </app-range-compromise>
                <app-range-compromise :percent="district.porcentajeEnProgreso" title="De compromisos en proceso" icon="assets/img/iniciado.svg" className="process">
                </app-range-compromise>
                <app-range-compromise :percent="district.porcentajeSinIniciar" title="De compromisos por iniciar" icon="assets/img/iniciar.svg" className="init">
                </app-range-compromise>
            </div>
*/
const RangeCompromise = Vue.component('app-range-compromise', {
    props: {
        percent: Number,
        title: String,
        icon: String,
        className: String
    },
    data() {
        return {

        }
    },
    template: `
        <div class="range">
            <div class="range--top">

                <img :src="icon" alt="" />
           
                <div class="range--top-right">
                    <h3> {{percent}}% </h3>
                    <p>{{ title }}</p>
                </div>
            </div>
            <div class="range--bottom">
                <input
                    :class="'input-range '+ className"
                    type="range"
                    :value="percent"
                    min="0"
                    max="100"
                    disabled
                />
            </div>
        </div>
    `
})

const CardCompromisesDistric = Vue.component('app-card-compromises', {
    components: {
        RangeCompromise
    },
    props: {
        district: Object
    },
    data() {
        return {
            commitments: this.district ? this.district.compromisos : [],
            chart: null,
        }
    },
    methods: {
        getProgressColor(progress) {
            progress = parseInt(progress);
            console.log(progress);
            if (progress == 0) return "legend-init";
            else if (progress < 100) return "legend-process";
            else return "legend-complete";
        },

    },
    mounted() {
        const options = {
            series: [
                this.district.porcentajeCulminado,
                this.district.porcentajeEnProgreso,
                this.district.porcentajeSinIniciar
            ],
            colors: ['#00AEA1', '#ffb82c', '#074d8b'],
            labels: [
                `${this.district.porcentajeCulminado}% de Compromisos cumplidos`,
                `${this.district.porcentajeEnProgreso}% de Compromisos en proceso`,
                `${this.district.porcentajeSinIniciar}% de Compromisos por iniciar`
            ],
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + "%"
                    },
                }
            },
            legend: {
                position: 'bottom',
            },
            chart: {
                type: 'pie',
            },
            /* responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 250
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }, ] */
        };
        this.chart = new ApexCharts(this.$refs.pieChart, options);
        this.chart.render();
        console.log(this.chart)
    },
    template: `
        <div class="">   
            <div class="stats-section no-border minh-250 container pt-2 pb-2">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-9 col-sm-12 col-xs-12">
                        <div class="chart" ref="pieChart"></div>
                    </div>
                </div>
            </div>
            

            <div class="list-container">

            <div class="container">
                <div class="categoria">
                    <hr class="line blue"></hr>
                    <h3 class="line_title blue border-white bg-white title_modal_mapa">
                        Compromisos
                    </h3>
                </div>
            </div>                

                <div v-if="commitments.length == 0">
                    <small>Este distrito no tiene compromisos {{  commitments.length }}</small>
                </div>
                <div v-else>
                    <div v-for="(item, idx) in commitments" :key="idx+item.idDistrito+item.idCompromiso*item.idDistrito" class="compromise-item">
                        <a target="_blank" :href="'DetalleTematica.php?compromiso='+item.idCompromiso"><span>{{ item.titulo }}</span></a>
                        <span :class="'legend '+ getProgressColor(item.avance)"></span>
                    </div>
                </div>
            </div>

        </div>
    `
})

new Vue({
    el: '#app',
    components: {
        CardCompromisesDistric
    },
    data() {
        return {
            renderer: null,
            stats: null,
            scene: null,
            camera: null,
            gui: null,
            guiData: null,
            raycaster: null,
            INTERSECTED: null,
            mouse: new THREE.Vector2(),
            lastColor: null,
            // info
            baseIndex: 500,
            modal: null,
            districts: []
        }
    },
    methods: {
        init() {

            const container = document.getElementById('container-map');
            if (!container) return;

            console.log("entró")

            let zoomFactor = 0.85;

            if (this.isMobile()) {
                zoomFactor = 0.95;
            }
            //

            this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
            this.camera.position.set(0, 0, 300);

            this.camera.fov *= zoomFactor;
            this.camera.updateProjectionMatrix();

            this.raycaster = new THREE.Raycaster();
            //

            this.renderer = new THREE.WebGLRenderer({
                antialias: true
            });
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(this.renderer.domElement);

            this.camera.fov = this.camera.fov * zoomFactor;
            this.camera.updateProjectionMatrix();


            const controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
            controls.screenSpacePanning = true;
            controls.enableRotate = false;
            controls.maxDistance = 400;
            controls.minAzimuthAngle = [-1 * Math.PI, 1 * Math.PI];
            controls.keys = {
                LEFT: 37, //left arrow
                UP: 38, // up arrow
                RIGHT: 39, // right arrow
                BOTTOM: 40 // down arrow
            }
            controls.mouseButtons = {
                LEFT: THREE.MOUSE.PAN,
                MIDDLE: THREE.MOUSE.DOLLY,
                RIGHT: THREE.MOUSE.ROTATE
            }

            window.addEventListener('resize', this.onWindowResize);
            window.addEventListener('mousemove', this.onDocumentMouseDown, false);
            document.addEventListener('touchstart', this.onDocumentMouseDown, false);
            window.addEventListener('click', this.onMouseClick, false);

            this.guiData = {
                currentURL: CONFIG.API_URL + '/app/assets/img/lima.svg',
                drawFillShapes: true,
                drawStrokes: true,
                fillShapesWireframe: false,
                strokesWireframe: false
            };

            this.loadSVG(this.guiData.currentURL);

            //createGUI();
            this.animate();
        },
        loadSVG(url) {
            console.log(url)
            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color().setStyle("#FFFFFF"); // FONDO 

            const loader = new THREE.SVGLoader();

            loader.load(url, (data) => {

                const paths = data.paths;

                const group = new THREE.Group();
                group.scale.multiplyScalar(0.25);
                group.position.x = -70;
                group.position.y = 70;
                group.scale.y *= -1;

                for (let i = 0; i < paths.length; i++) {

                    const path = paths[i];
                    //console.log("PATH", path.userData.node.id);
                    const fillColor = path.userData.style.fill;
                    if (this.guiData.drawFillShapes && fillColor !== undefined && fillColor !== 'none') {

                        //console.log("FIILL"+fillColor);
                        const material = new THREE.MeshBasicMaterial({
                            color: fillColor == "rgb(26, 74, 132)" ? new THREE.Color().setStyle('rgb(26, 74, 132)') /* Math.random() * 0xffffff */ : new THREE.Color().setStyle('rgb(26, 74, 132)'),
                            opacity: path.userData.style.fillOpacity,
                            transparent: path.userData.style.fillOpacity < 1,
                            userData: {...path.userData.node, ...this.findDistrict(path.userData.node.id) },
                            side: THREE.DoubleSide,
                            depthWrite: false,
                            wireframe: this.guiData.fillShapesWireframe,

                        });

                        const shapes = path.toShapes(true);


                        for (let j = 0; j < shapes.length; j++) {

                            const shape = shapes[j];

                            const geometry = new THREE.ShapeGeometry(shape);
                            const mesh = new THREE.Mesh(geometry, material);

                            group.add(mesh);

                        }

                    }

                    const strokeColor = path.userData.style.stroke;

                    if (this.guiData.drawStrokes && strokeColor !== undefined && strokeColor !== 'none') {

                        const material = new THREE.MeshBasicMaterial({
                            color: new THREE.Color().setStyle("#EEEEEE"), // FONDO Y BORDES
                            opacity: path.userData.style.strokeOpacity,
                            transparent: path.userData.style.strokeOpacity < 1,
                            side: THREE.DoubleSide,
                            depthWrite: false,
                            wireframe: this.guiData.strokesWireframe,
                            wireframeLinecap: "square"
                        });

                        for (let j = 0, jl = path.subPaths.length; j < jl; j++) {

                            const subPath = path.subPaths[j];

                            const geometry = new THREE.SVGLoader.pointsToStroke(subPath.getPoints(), path.userData.style);

                            if (geometry) {

                                const mesh = new THREE.Mesh(geometry, material);

                                group.add(mesh);

                            }

                        }

                    }

                }

                this.scene.add(group);

            });
        },
        onWindowResize() {

            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(window.innerWidth, window.innerHeight);

        },
        animate() {

            requestAnimationFrame(this.animate);

            this.render();

        },
        onDocumentMouseDown(event) {
            //event.preventDefault();
            //if (this.modal._isShown) return; // si el modal está abierto no captura más

            const isMob = this.isMobile();
            if (isMob) {
                if (event.targetTouches) {
                    this.mouse.x = +(event.targetTouches[0].pageX / window.innerWidth) * 2 + -1;
                    this.mouse.y = -(event.targetTouches[0].pageY / window.innerHeight) * 2 + 1;
                }
            } else {
                this.mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
                this.mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
            }



            this.raycaster.setFromCamera(this.mouse, this.camera);

            const intersects = this.raycaster.intersectObjects(this.scene.children, true);

            if (intersects.length > 0) {
                //console.log(intersects[0]);
                //if (intersects[0].object.material.userData.nodeName != "polyline") return;
                const ELEMENT = intersects[0].object.material.userData;
                if (!ELEMENT.id) return;

                this.lastColor = intersects[0].object.material.color.getHex();

                intersects[0].object.material.color.set('#00a39c'); // COLOR INTERSECTED

                if (this.INTERSECTED != intersects[0].object) {

                    if (this.INTERSECTED) {
                        this.INTERSECTED.material.color.setHex(this.INTERSECTED.currentHex)
                    }

                    this.INTERSECTED = intersects[0].object;
                    this.INTERSECTED.currentHex = this.lastColor;
                    //INTERSECTED.material.color.setHex(0xff0000);

                    this.moveTooltip(event.offsetX, event.offsetY)

                }

                if (isMob) {
                    this.onMouseClick();
                }

            } else {

                if (this.INTERSECTED) {
                    this.INTERSECTED.material.color.setHex(this.INTERSECTED.currentHex);
                }

                this.INTERSECTED = null;
                this.lastColor = null;
            }

        },
        onMouseClick(event) {

            if (this.INTERSECTED) {

                const ID = this.INTERSECTED.material.userData.id;
                let msg = "Se intersectó un punto de tipo " + this.INTERSECTED.material.userData.nodeName + " y de Three.js id = " + this.INTERSECTED.id + " \nDe NODO ID = " + ID;
                if (ID) {
                    //this.modal.show();
                    //this.chart.render();
                    this.baseIndex += 10;
                    //alert(msg)
                }
                //console.log(INTERSECTED);
            }

        },
        isMobile() {
            return (
                (navigator.userAgent.match(/Android/i)) ||
                (navigator.userAgent.match(/webOS/i)) ||
                (navigator.userAgent.match(/iPhone/i)) ||
                (navigator.userAgent.match(/iPod/i)) ||
                (navigator.userAgent.match(/iPad/i)) ||
                (navigator.userAgent.match(/BlackBerry/i))
            );
        },
        render() {

            this.renderer.render(this.scene, this.camera);

        },
        findDistrict(districtId) {
            const DISTRICT = this.districts.find(d => d.claveMapa == districtId);
            return DISTRICT;
        },
        moveTooltip(x, y) {
            //console.log({ x, y });
            document.getElementById("tooltip").style.left = `${x + 50}px`;
            document.getElementById("tooltip").style.top = `${y - 50}px`;

        }
    },
    async mounted() {
        try {
            this.districts = CONFIG.INMUEBLES.map(di => {
                return {
                    ...di,
                    id: di.claveMapa,
                    name: di.nombre,
                    compromises: di.cantidad,
                }
            });
            this.init();
            /* } */
        } catch (error) {}
    }
})




const districts = [{
        "id": "Santa_Rosa",
        "ubigeo": 150139,
        "name": "Santa Rosa",
        "compromises": 12
    },
    {
        "id": "Ancon",
        "name": "Ancon",
        "compromises": 10
    },
    {
        "id": "Carabayllo",
        "name": "Carabayllo",
        "compromises": 10
    },
    {
        "id": "Comas",
        "name": "Comas",
        "compromises": 12
    },
    {
        "id": "Independencia",
        "name": "Independencia",
        "compromises": 10
    },
    {
        "id": "Puente_Piedra",
        "name": "Puente Piedra",
        "compromises": 10
    },
    {
        "id": "SJL",
        "name": "SJL",
        "compromises": 10
    },
    {
        "id": "Cieneguilla",
        "name": "Cieneguilla",
        "compromises": 10
    },
    {
        "id": "Lurigancho_-Chosica",
        "name": "Lurigancho - Chosica",
        "compromises": 10
    },
    {
        "id": "Chaclacayo",
        "name": "Chaclacayo",
        "compromises": 10
    },
    {
        "id": "Ate",
        "name": "Ate",
        "compromises": 10
    },
    {
        "id": "Pachacamac",
        "name": "Pachacamac",
        "compromises": 10
    },
    {
        "id": "Lurín",
        "name": "Lurín",
        "compromises": 10
    },
    {
        "id": "Punta_Hermosa",
        "name": "Punta Hermosa",
        "compromises": 10
    },
    {
        "id": "Punta_Negra",
        "name": "Punta Negra",
        "compromises": 10
    },
    {
        "id": "San_Bartolo",
        "name": "San Bartolo",
        "compromises": 10
    },
    {
        "id": "Santa_María_del_Mar",
        "name": "Santa María del Mar",
        "compromises": 10
    },
    {
        "id": "Pucusana",
        "name": "Pucusana",
        "compromises": 10
    },
    {
        "id": "VMT",
        "name": "VMT",
        "compromises": 10
    },
    {
        "id": "VES",
        "name": "VES",
        "compromises": 10
    },
    {
        "id": "SJM",
        "name": "SJM",
        "compromises": 10
    },
    {
        "id": "Chorrillos",
        "name": "Chorrillos",
        "compromises": 10
    },
    {
        "id": "Surco",
        "name": "Surco",
        "compromises": 10
    },
    {
        "id": "La_Molina",
        "name": "La Molina",
        "compromises": 10
    },
    {
        "id": "Barranco",
        "name": "Barranco",
        "compromises": 10
    },
    {
        "id": "Miraflores",
        "name": "Miraflores",
        "compromises": 10
    },
    {
        "id": "Surquillo",
        "name": "Surquillo",
        "compromises": 10
    },
    {
        "id": "San_Borja",
        "name": "San Borja",
        "compromises": 10
    },
    {
        "id": "San_Isidro",
        "name": "San Isidro",
        "compromises": 10
    },
    {
        "id": "Lince",
        "name": "Lince",
        "compromises": 10
    },
    {
        "id": "Jesús_María",
        "name": "Jesús María",
        "compromises": 10
    },
    {
        "id": "Magdalena",
        "name": "Magdalena",
        "compromises": 10
    },
    {
        "id": "San_Miguel",
        "name": "San Miguel",
        "compromises": 10
    },
    {
        "id": "Pueblo_Libre",
        "name": "Pueblo Libre",
        "compromises": 10
    },
    {
        "id": "Breña",
        "name": "Breña",
        "compromises": 10
    },
    {
        "id": "Cercado",
        "name": "Cercado",
        "compromises": 10
    },
    {
        "id": "La_Victoria",
        "name": "La Victoria",
        "compromises": 10
    },
    {
        "id": "San_Luis",
        "name": "San Luis",
        "compromises": 10
    },
    {
        "id": "El_Agustino",
        "name": "El Agustino",
        "compromises": 10
    },
    {
        "id": "Santa_Anita",
        "name": "Santa Anita",
        "compromises": 10
    },
    {
        "id": "Rimac",
        "name": "Rimac",
        "compromises": 10
    },
    {
        "id": "SMP",
        "name": "SMP",
        "compromises": 10
    },
    {
        "id": "Los_Olivos",
        "name": "Los Olivos",
        "compromises": 10
    }
]