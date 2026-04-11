/* --- Resume Data --- */
const portfolioData = {
    "readme.md": {
        content: "<div class='profile-wrap'>" +
                 "<img src='image.jpeg' alt='Swagat Sahu' class='profile-pic' onerror=\"this.style.display='none'\">" +
                 "<div>" +
                 "<h1>Hey, I'm <span class='highlight'>Swagat Sahu</span></h1>" +
                 "<p>Backend-focused developer experienced in building scalable real-time and distributed systems using AWS, Docker, and WebSockets. Skilled in designing low-latency, stateless backend architectures and REST APIs for cloud-native applications.</p>" +
                 "<p>I am deeply interested in system design, Artificial Intelligence, and high-performance computing systems.</p>" +
                 "<h2>Contact & Links</h2>" +
                 "<ul>" +
                 "<li>Email: <a href='mailto:swagatsahu556@gmail.com' class='highlight'>swagatsahu556@gmail.com</a></li>" +
                 "<li>Phone: +91-7735088024</li>" +
                 "<li>LinkedIn: <a href='https://linkedin.com/' target='_blank' class='highlight'>Profile</a></li>" +
                 "<li>GitHub: <a href='https://github.com/crocodilelurker' target='_blank' class='highlight'>Profile</a></li>" +
                 "</ul>" +
                 "<h2>Achievements</h2>" +
                 "<ul>" +
                 "<li><span class='highlight'>Reliance Undergraduate Scholarship</span>, Reliance Group (2025)</li>" +
                 "<li><span class='highlight'>Qualified for Smart India Hackathon</span> (National Level)</li>" +
                 "<li>Postman API Fundamentals Student Expert (06/2025)</li>" +
                 "</ul>" +
                 "</div></div>"
    },
    "skills.json": {
        content: "<h2>Technical Skills and Interests</h2>" +
                 "<div class='skills-flex'>" +
                 
                 "<div class='skill-category'>" +
                 "<div class='skill-cat-title'><svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#facc15' stroke-width='2'><path d='M20 14h-4v4h4v-4zm-6 0h-4v4h4v-4zm-6 0H4v4h4v-4zm12-6h-4v4h4V8zm-6 0h-4v4h4V8zm-6 0H4v4h4V8zm12-6h-4v4h4V2zm-6 0h-4v4h4V2zm-6 0H4v4h4V2z'/></svg> Languages</div>" +
                 "<div><span class='tech-tag'>JavaScript</span><span class='tech-tag'>Python</span><span class='tech-tag'>C++</span><span class='tech-tag'>Java</span><span class='tech-tag'>Go</span></div>" +
                 "</div>" +

                 "<div class='skill-category'>" +
                 "<div class='skill-cat-title'><svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#4ade80' stroke-width='2'><rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect><line x1='8' y1='21' x2='16' y2='21'></line></svg> Frameworks</div>" +
                 "<div><span class='tech-tag'>React</span><span class='tech-tag'>Next.js</span><span class='tech-tag'>Node.js</span><span class='tech-tag'>FastAPI</span><span class='tech-tag'>Express</span></div>" +
                 "</div>" +

                 "<div class='skill-category'>" +
                 "<div class='skill-cat-title'><svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#38bdf8' stroke-width='2'><path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'/></svg> Tools</div>" +
                 "<div><span class='tech-tag'>Docker</span><span class='tech-tag'>Git</span><span class='tech-tag'>Redis</span><span class='tech-tag'>Grafana</span></div>" +
                 "</div>" +
                 
                 "<div class='skill-category'>" +
                 "<div class='skill-cat-title'><svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#c084fc' stroke-width='2'><circle cx='12' cy='12' r='10'></circle><path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path></svg> ML/AI</div>" +
                 "<div><span class='tech-tag'>PyTorch</span><span class='tech-tag'>OpenCV</span><span class='tech-tag'>scikit-learn</span><span class='tech-tag'>LangChain</span></div>" +
                 "</div>" +
                 
                 "<div class='skill-category'>" +
                 "<div class='skill-cat-title'><svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#fb923c' stroke-width='2'><path d='M17.5 19C19 17.5 20 15.5 20 13c0-4.42-3.58-8-8-8s-8 3.58-8 8 1 4.5 2.5 6'></path><path d='M12 9v4l3 3'></path></svg> Cloud Architecture</div>" +
                 "<div><span class='tech-tag'>AWS (ECS, ECR, Fargate, EC2)</span><span class='tech-tag'>Google Cloud Platform (GCP)</span></div>" +
                 "</div>" +
                 
                 "<div class='skill-category'>" +
                 "<div class='skill-cat-title'><svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#f87171' stroke-width='2'><path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path><circle cx='9' cy='7' r='4'></circle><path d='M23 21v-2a4 4 0 0 0-3-3.87'></path><path d='M16 3.13a4 4 0 0 1 0 7.75'></path></svg> Soft Skills</div>" +
                 "<div><span class='tech-tag'>Communication</span><span class='tech-tag'>Teamwork</span></div>" +
                 "</div>" +

                 "<div class='skill-category' style='flex-basis: 100%'>" +
                 "<div class='skill-cat-title'><svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#10b981' stroke-width='2'><polygon points='12 2 2 7 12 12 22 7 12 2'></polygon><polyline points='2 17 12 22 22 17'></polyline><polyline points='2 12 12 17 22 12'></polyline></svg> Areas of Interest</div>" +
                 "<div><span class='tech-tag'>Distributed Systems</span><span class='tech-tag'>AI</span><span class='tech-tag'>Image Processing</span><span class='tech-tag'>System Design</span><span class='tech-tag'>Data Structures and Algorithms</span><span class='tech-tag'>Robotics</span><span class='tech-tag'>IoT</span></div>" +
                 "</div>" +

                 "</div>"
    },
    "projects.ts": {
        content: "<h2>Featured Projects</h2>" +
                 "<div class='card'>" +
                 "<div class='card-title'><div style='display: flex; align-items: center; gap: 10px;'><svg viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='#38bdf8' stroke-width='2'><polyline points='16 18 22 12 16 6'></polyline><polyline points='8 6 2 12 8 18'></polyline></svg> Live Code Editor</div> <span class='card-date'>03/2026</span></div>" +
                 "<div class='card-subtitle'>Real-time collaborative code editor enabling multi-user editing</div>" +
                 "<a class='btn-link' href='http://new-alb-docker-1800000494.ap-south-1.elb.amazonaws.com/' target='_blank'>Live Preview ↗</a>" +
                 "<p>Containerized and deployed on AWS. Built a real-time collaborative editor using <b>React</b> and <b>Yjs</b> with concurrent multi-user editing. Deployed scalable containerized backend using AWS ECS, Fargate, ECR and EC2 with custom VPC and load balancer. Implemented WebSocket-based low-latency synchronization.</p>" +
                 "<div><span class='tech-tag'>React</span><span class='tech-tag'>Yjs</span><span class='tech-tag'>AWS ECS</span><span class='tech-tag'>Docker</span><span class='tech-tag'>WebSockets</span></div>" +
                 "</div>" +
                 
                 "<div class='card'>" +
                 "<div class='card-title'><div style='display: flex; align-items: center; gap: 10px;'><svg viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='#4ade80' stroke-width='2'><path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path></svg> Anonymous Real-Time Chat Platform</div> <span class='card-date'>11/2025</span></div>" +
                 "<div class='card-subtitle'>Anonymous chat system with real-time communication</div>" +
                 "<a class='btn-link' href='https://rec-red.vercel.app/' target='_blank'>Live Preview ↗</a>" +
                 "<p>Developed a real-time chat platform using <b>Next.js</b> based on WebSockets, supporting concurrent users. Integrated <b>Redis</b> for session management and real-time message broadcasting. Designed scalable low-latency backend ensuring consistent performance under load.</p>" +
                 "<div><span class='tech-tag'>Next.js</span><span class='tech-tag'>WebSockets</span><span class='tech-tag'>Redis</span></div>" +
                 "</div>" +

                 "<div class='card'>" +
                 "<div class='card-title'><div style='display: flex; align-items: center; gap: 10px;'><svg viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='#c084fc' stroke-width='2'><circle cx='12' cy='12' r='10'></circle><path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path></svg> Interactive Machine Learning Platform</div> <span class='card-date'>10/2024</span></div>" +
                 "<div class='card-subtitle'>Hands-on ML platform for non-technical users</div>" +
                 "<a class='btn-link' href='https://dcpchitrole.github.io/babymachinev1/' target='_blank'>Live Preview ↗</a>" +
                 "<p>Developed a browser-based ML platform using <b>TensorFlow.js</b> for real-time training and prediction. Built custom neural networks with client-side image processing. Created an intuitive interface to improve accessibility of AI concepts.</p>" +
                 "<div><span class='tech-tag'>JavaScript</span><span class='tech-tag'>TensorFlow.js</span><span class='tech-tag'>Browser APIs</span></div>" +
                 "</div>"
    },
    "education.js": {
        content: "<h2>Education Timeline</h2>" +
                 "<div class='card'>" +
                 "<div class='card-title'>" +
                 "<div style='display: flex; align-items: center; gap: 12px;'>" +
                 "<img src='college_logo.png' alt='IIIT Bhagalpur' style='width: 32px; height: 32px; object-fit: contain; background: white; padding: 2px; border-radius: 4px;'>" +
                 "<span>Indian Institute of Information Technology, Bhagalpur</span>" +
                 "</div>" +
                 "<span class='card-date'>Grad. 2028</span></div>" +
                 "<div class='card-subtitle'>Bachelor of Technology, Mechatronics and Automation Engineering</div>" +
                 "<p>CGPA: 8.0</p>" +
                 "<p><b>Positions of Responsibility:</b> Student Coordinator, Training and Placement Cell (2025-Present) - Onboarded 10+ companies for placement drives.</p>" +
                 "</div>" +
                 "<div class='card'>" +
                 "<div class='card-title'>" +
                 "<div style='display: flex; align-items: center; gap: 12px;'>" +
                 "<img src='iit_ropar.png' alt='IIT Ropar' style='width: 32px; height: 32px; object-fit: contain; background: white; padding: 2px; border-radius: 4px;'>" +
                 "<span>Indian Institute of Technology, Ropar</span>" +
                 "</div>" +
                 "<span class='card-date'>Grad. 2025</span></div>" +
                 "<div class='card-subtitle'>Minor in Artificial Intelligence and Machine Learning</div>" +
                 "<p>CGPA: 8.0</p>" +
                 "</div>" +
                 "<div class='card'>" +
                 "<div class='card-title'>St. De Paul School <span class='card-date'>Grad. 2024</span></div>" +
                 "<div class='card-subtitle'>Indian School Certificate (ISC) - 12th</div>" +
                 "<p>Percentage: 91%</p>" +
                 "</div>"
    },
    "connect.me": {
        content: "<h2>Connect With Me</h2>" +
                 "<p>Leave your details and a message below, and I'll get back to you as soon as possible.</p>" +
                 "<form class='connect-form' id='contactForm'>" +
                 "<div class='form-group'><label>name:</label><input type='text' name='name' id='clientName' required placeholder='Enter your name' data-fs-field></div>" +
                 "<div class='form-group'><label>email:</label><input type='email' name='email' id='clientEmail' required placeholder='Enter your email' data-fs-field><span data-fs-error='email'></span></div>" +
                 "<div class='form-group'><label>query:</label><textarea name='message' id='clientQuery' required placeholder='What would you like to discuss?' data-fs-field></textarea><span data-fs-error='message'></span></div>" +
                 "<button type='submit' class='btn-submit' data-fs-submit-btn>Submit -></button>" +
                 "</form>" +
                 "<div data-fs-success>[sys] query captured successfully. email dispatch triggered.</div>"
    }
};

/* --- Global State --- */
let openTabs = [];
let activeTab = null;

/* --- DOM Elements --- */
const tabsBar = document.getElementById('tabs-bar');
const contentContainer = document.getElementById('content-container');
const contentScroll = document.getElementById('content-scroll');
const emptyState = document.getElementById('empty-state');
const fileItems = document.querySelectorAll('.file-item');
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const terminalPanel = document.getElementById('terminal-panel');

/* Terminal Top Right Toggle */
const terminalTopToggle = document.getElementById('terminal-toggle-top');
const terminalCloseBtn = document.getElementById('terminal-close-btn');

terminalTopToggle.addEventListener('click', () => {
    terminalPanel.classList.toggle('closed');
    if (!terminalPanel.classList.contains('closed')) {
        terminalInput.focus();
    }
});
terminalCloseBtn.addEventListener('click', () => {
    terminalPanel.classList.add('closed');
});

/* Layout Resizers (Drag) */
const sidebar = document.getElementById('sidebar');
const sidebarResizer = document.getElementById('sidebar-resizer');
const terminalResizer = document.getElementById('terminal-resizer');

let isResizingSidebar = false;
let isResizingTerminal = false;

sidebarResizer.addEventListener('mousedown', (e) => {
    isResizingSidebar = true;
    document.body.style.cursor = 'col-resize';
    sidebar.style.transition = 'none'; // disable transition while dragging
});

terminalResizer.addEventListener('mousedown', (e) => {
    if(!terminalPanel.classList.contains('closed')) {
        isResizingTerminal = true;
        document.body.style.cursor = 'row-resize';
        terminalPanel.style.transition = 'none';
    }
});

window.addEventListener('mousemove', (e) => {
    if (isResizingSidebar) {
        let newWidth = e.clientX;
        if (newWidth < 150) newWidth = 150;
        if (newWidth > 600) newWidth = 600;
        sidebar.style.width = newWidth + 'px';
    }
    if (isResizingTerminal) {
        let newHeight = window.innerHeight - e.clientY;
        if (newHeight < 100) newHeight = 100;
        if (newHeight > window.innerHeight * 0.8) newHeight = window.innerHeight * 0.8;
        terminalPanel.style.height = newHeight + 'px';
    }
});

window.addEventListener('mouseup', () => {
    if(isResizingSidebar) {
        isResizingSidebar = false;
        sidebar.style.transition = '';
    }
    if(isResizingTerminal) {
        isResizingTerminal = false;
        terminalPanel.style.transition = '';
    }
    document.body.style.cursor = 'default';
});

/* --- Tab Management --- */
function openFile(fileId) {
    if (fileId === 'resume.pdf') { window.open('res_2026.pdf', '_blank'); return; }
    if (!portfolioData[fileId]) return;

    if (!openTabs.includes(fileId)) { openTabs.push(fileId); }
    activeTab = fileId;

    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }

    renderTabs();
    renderContent();
}

function closeFile(fileId, event) {
    if (event) event.stopPropagation();
    openTabs = openTabs.filter(id => id !== fileId);
    
    if (activeTab === fileId) {
        activeTab = openTabs.length > 0 ? openTabs[openTabs.length - 1] : null;
    }

    renderTabs();
    renderContent();
}

function renderTabs() {
    tabsBar.innerHTML = '';
    
    openTabs.forEach(tabId => {
        const tabEl = document.createElement('div');
        tabEl.className = 'tab ' + (tabId === activeTab ? 'active' : '');
        tabEl.onclick = () => openFile(tabId);
        
        tabEl.innerHTML = tabId + "<div class='tab-close'>×</div>";
        tabEl.querySelector('.tab-close').onclick = (e) => closeFile(tabId, e);
        
        tabsBar.appendChild(tabEl);
    });

    fileItems.forEach(item => {
        const target = item.getAttribute('data-target');
        if (target === activeTab) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function renderContent() {
    if (!activeTab || !portfolioData[activeTab]) {
        contentContainer.innerHTML = '';
        emptyState.style.display = 'flex';
        return;
    }

    emptyState.style.display = 'none';
    contentContainer.style.opacity = '0';
    contentContainer.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        contentContainer.innerHTML = portfolioData[activeTab].content;
        contentScroll.scrollTop = 0;
        
        const sections = contentContainer.querySelectorAll('p, h1, h2, ul, .card, .skills-flex, .profile-wrap, form');
        sections.forEach(sec => sec.classList.add('fade-in-section'));

        contentContainer.style.transition = 'opacity 0.4s easeOutQuad, transform 0.4s easeOutQuad';
        contentContainer.style.opacity = '1';
        contentContainer.style.transform = 'translateY(0)';

        setTimeout(() => {
            sections.forEach((sec, idx) => {
                setTimeout(() => sec.classList.add('is-visible'), idx * 50); 
            });
            
            setTimeout(() => {
                const fills = contentContainer.querySelectorAll('.skill-level-fill');
                fills.forEach(fill => {
                    fill.style.width = fill.getAttribute('data-width');
                });
            }, 300);
            
            // Connect.me API mounting
            if (activeTab === 'connect.me' && window.formspree) {
                window.formspree('initForm', { formElement: '#contactForm', formId: 'mzdknweq' });
            }

        }, 80);

    }, 200);
}

fileItems.forEach(item => {
    item.addEventListener('click', (e) => {
        openFile(e.currentTarget.getAttribute('data-target'));
    });
});

/* --- System Sandbox Graph Game --- */
let draggedBlock = null;
let startX, startY, initialLeft, initialTop;
let hasMoved = false;

let isPuzzleSolved = false;
let selectedPuzzleNode = null;
let puzzleConnections = [];
const winningGraph = [
    ['client', 'ingress'],
    ['ingress', 'auth'],
    ['ingress', 'api'],
    ['api', 'redis'],
    ['api', 'kafka'],
    ['api', 'db'],
    ['kafka', 'worker'],
    ['worker', 'ml'],
    ['worker', 'db'],
    ['ml', 's3'],
    ['grafana', 'db']
];

function drawPuzzleLines() {
    const sandboxCanvas = document.getElementById('sandbox-canvas');
    if (!sandboxCanvas) return;
    const ctx = sandboxCanvas.getContext('2d');
    ctx.clearRect(0, 0, sandboxCanvas.width, sandboxCanvas.height);
    
    puzzleConnections.forEach(conn => {
        const n1 = document.getElementById('n_' + conn[0]);
        const n2 = document.getElementById('n_' + conn[1]);
        if (!n1 || !n2) return;
        
        const r1 = n1.getBoundingClientRect();
        const r2 = n2.getBoundingClientRect();
        const parent = document.getElementById('sandbox-container').getBoundingClientRect();
        
        const x1 = r1.left - parent.left + (r1.width / 2);
        const y1 = r1.top - parent.top + (r1.height / 2);
        const x2 = r2.left - parent.left + (r2.width / 2);
        const y2 = r2.top - parent.top + (r2.height / 2);
        
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const headlen = 12; // slightly bigger head

        // Check if current graph edge exactly matches direction in winning topology
        let isCorrect = winningGraph.some(winEdge => 
            (conn[0] === winEdge[0] && conn[1] === winEdge[1])
        );
        let linkColor = isCorrect ? 'rgba(74, 222, 128, 0.9)' : 'rgba(248, 113, 113, 0.9)';

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = linkColor;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        /* Paint arrow in middle */
        ctx.beginPath();
        ctx.moveTo(midX, midY);
        ctx.lineTo(midX - headlen * Math.cos(angle - Math.PI / 6), midY - headlen * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(midX - headlen * Math.cos(angle + Math.PI / 6), midY - headlen * Math.sin(angle + Math.PI / 6));
        ctx.fillStyle = linkColor;
        ctx.fill();
    });
    
    // Check win condition
    const hasWon = checkWin();
    if (hasWon) {
        document.getElementById('sandbox-container').classList.add('success');
        document.getElementById('solve-puzzle-btn').innerText = "Reset Puzzle";
        isPuzzleSolved = true;
    } else {
        document.getElementById('sandbox-container').classList.remove('success');
        document.getElementById('solve-puzzle-btn').innerText = "Solve Puzzle";
        isPuzzleSolved = false;
    }
}

function checkWin() {
    if (puzzleConnections.length !== winningGraph.length) return false;
    for (const winEdge of winningGraph) {
        const found = puzzleConnections.some(conn => 
            (conn[0] === winEdge[0] && conn[1] === winEdge[1])
        );
        if (!found) return false;
    }
    return true;
}

document.addEventListener('mousedown', (e) => {
    if (e.target.closest('.drag-block')) {
        draggedBlock = e.target.closest('.drag-block');
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = parseFloat(getComputedStyle(draggedBlock).left) || 0;
        initialTop = parseFloat(getComputedStyle(draggedBlock).top) || 0;
        document.body.style.cursor = 'grabbing';
        hasMoved = false;
        draggedBlock.classList.add('dragging');
    }
});

document.addEventListener('mousemove', (e) => {
    if (draggedBlock) {
        hasMoved = true;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        draggedBlock.style.left = (initialLeft + dx) + 'px';
        draggedBlock.style.top = (initialTop + dy) + 'px';
        drawPuzzleLines();
    }
});

document.addEventListener('mouseup', () => {
    if (draggedBlock) {
        draggedBlock.classList.remove('dragging');
        if (!hasMoved) {
            // It was a click -> process graph connection
            const clickedId = draggedBlock.getAttribute('data-node');
            if (selectedPuzzleNode === null) {
                selectedPuzzleNode = draggedBlock;
                draggedBlock.classList.add('selected');
            } else {
                if (selectedPuzzleNode === draggedBlock) {
                    selectedPuzzleNode.classList.remove('selected');
                    selectedPuzzleNode = null;
                } else {
                    const n1 = selectedPuzzleNode.getAttribute('data-node');
                    const n2 = clickedId;
                    
                    const existingIdx = puzzleConnections.findIndex(c => (c[0]===n1 && c[1]===n2) || (c[0]===n2 && c[1]===n1));
                    if(existingIdx >= 0) {
                        puzzleConnections.splice(existingIdx, 1);
                    } else {
                        puzzleConnections.push([n1, n2]);
                    }
                    
                    selectedPuzzleNode.classList.remove('selected');
                    selectedPuzzleNode = null;
                    drawPuzzleLines();
                }
            }
        }
        draggedBlock = null;
        document.body.style.cursor = '';
    }
});

function scatterNodes() {
    const puzzleNodes = document.querySelectorAll('.drag-block');
    puzzleConnections = [];
    puzzleNodes.forEach(node => {
        node.classList.add('animating');
        const rx = 5 + Math.random() * 80;
        const ry = 5 + Math.random() * 80;
        node.style.left = rx + '%';
        node.style.top = ry + '%';
    });
    setTimeout(() => {
        puzzleNodes.forEach(n => n.classList.remove('animating'));
        drawPuzzleLines();
    }, 850);
}

/* Puzzle Auto-Solver */
const solverBtn = document.getElementById('solve-puzzle-btn');
if(solverBtn) {
    solverBtn.addEventListener('click', () => {
        const puzzleNodes = document.querySelectorAll('.drag-block');
        
        if (isPuzzleSolved) {
            // Scatter mode
            scatterNodes();
        } else {
            // Solve mode
            puzzleConnections = [...winningGraph];
            const correctPositions = {
                'client': {x: 5, y: 50}, 'ingress': {x: 25, y: 50},
                'auth': {x: 25, y: 20}, 'api': {x: 45, y: 50},
                'redis': {x: 45, y: 20}, 'kafka': {x: 65, y: 50},
                'worker': {x: 85, y: 50}, 'db': {x: 45, y: 80},
                'ml': {x: 85, y: 20}, 's3': {x: 85, y: 80},
                'grafana': {x: 65, y: 80}
            };
            puzzleNodes.forEach(node => {
                const id = node.getAttribute('data-node');
                node.classList.add('animating');
                node.style.left = correctPositions[id].x + '%';
                node.style.top = correctPositions[id].y + '%';
            });
        }
        
        const animDraw = setInterval(drawPuzzleLines, 20);
        setTimeout(() => {
            clearInterval(animDraw);
            puzzleNodes.forEach(n => n.classList.remove('animating'));
            drawPuzzleLines();
        }, 850);
        
        if (selectedPuzzleNode) { selectedPuzzleNode.classList.remove('selected'); selectedPuzzleNode = null; }
    });
}

/* --- Terminal OS Logic --- */
function printTerminal(msg, type = 'terminal-line') {
    const el = document.createElement('div');
    el.className = type;
    el.innerHTML = msg;
    terminalOutput.appendChild(el);
    const wrap = document.getElementById('terminal-wrapper');
    wrap.scrollTop = wrap.scrollHeight;
}

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const val = terminalInput.value.trim();
        if (!val) return;
        
        printTerminal("<span class='prompt'>guest@swagatsahu:~$</span> <span class='terminal-cmd'>" + val + "</span>");
        terminalInput.value = '';
        
        const cmd = val.toLowerCase();
        
        switch(cmd) {
            case 'help':
                printTerminal("Available commands:");
                printTerminal("- <span style='color: var(--accent)'>resume</span>: Opens the resume PDF");
                printTerminal("- <span style='color: var(--accent)'>skills</span>: Displays all technical skills visually");
                printTerminal("- <span style='color: var(--accent)'>readme</span>: Opens readme.md file");
                printTerminal("- <span style='color: var(--accent)'>projects</span>: Opens projects.ts file");
                printTerminal("- <span style='color: var(--accent)'>education</span>: Opens education.js file");
                printTerminal("- <span style='color: var(--accent)'>clear</span>: Clears terminal history");
                break;
            case 'clear':
                terminalOutput.innerHTML = '';
                break;
            case 'resume':
                printTerminal("<span style='color: var(--color-green)'>Opening resume...</span>");
                openFile('resume.pdf');
                break;
            case 'skills':
                printTerminal("<span style='color: var(--color-green)'>Executing skills payload...</span>");
                setTimeout(() => openFile('skills.json'), 300);
                break;
            case 'readme':
                printTerminal("<span style='color: var(--color-green)'>Opening readme.md...</span>");
                openFile('readme.md');
                break;
            case 'projects':
                printTerminal("<span style='color: var(--color-green)'>Opening projects.ts...</span>");
                openFile('projects.ts');
                break;
            case 'education':
                printTerminal("<span style='color: var(--color-green)'>Opening education.js...</span>");
                openFile('education.js');
                break;
            default:
                if (cmd.startsWith("open ")) {
                    const file = cmd.split(" ")[1];
                    if (portfolioData[file]) {
                        printTerminal("<span style='color: var(--color-green)'>Opening " + file + "...</span>");
                        openFile(file);
                    } else if (file === 'resume.pdf') {
                        openFile('resume.pdf');
                    } else {
                        printTerminal("File not found: " + file, "terminal-err");
                    }
                } else if (cmd.startsWith("close ")) {
                    const file = cmd.split(" ")[1];
                    if (openTabs.includes(file)) {
                        printTerminal("Closing " + file + "...");
                        closeFile(file);
                    } else {
                        printTerminal("File not currently open: " + file, "terminal-err");
                    }
                } else {
                    printTerminal("Command not found: '" + cmd + "'. Type 'help' for a list of commands.", "terminal-err");
                }
                break;
        }
    }
});

/* Initialize */
document.addEventListener('DOMContentLoaded', () => {
    openFile('readme.md');
    document.getElementById('mobile-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });

    const explorerLabel = document.querySelector('.sidebar-header span');
    if (explorerLabel) {
        explorerLabel.style.cursor = 'pointer';
        explorerLabel.addEventListener('click', () => openFile('readme.md'));
    }
    const folderTitle = document.querySelector('.folder-title');
    if (folderTitle) {
        folderTitle.style.cursor = 'pointer';
        folderTitle.addEventListener('click', () => openFile('readme.md'));
    }

    // Completely scramble puzzle nodes on initialization so it's ready.
    scatterNodes();
});

/* --- Canvas Particle Background --- */
const canvas = document.getElementById('network-bg');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];
const PARTICLE_COUNT = Math.min(window.innerWidth / 15, 60);

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4; 
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(192, 132, 252, 0.1)"; // faint purple hue
        ctx.fill();
    }
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                ctx.beginPath();
                // Mix cyan and purple lines faintly
                ctx.strokeStyle = "rgba(56, 189, 248, " + (0.07 - distance / 150 * 0.07) + ")";
                ctx.lineWidth = 0.6;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}

animateParticles();
