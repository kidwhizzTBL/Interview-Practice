// Interview Practice Assistant JavaScript

class InterviewApp {
    constructor() {
        this.questions = [
            {
                "id": 1,
                "question": "Tell me about yourself.",
                "answer": "I am a [Your Job Role] with [X] years of experience in [industry]. I specialize in [skills], and I have worked on projects involving [key achievements]. I'm passionate about continuous learning and enjoy taking on new challenges. I'm currently looking for an opportunity where I can contribute meaningfully while growing both professionally and personally.",
                "category": "Personal Background"
            },
            {
                "id": 2,
                "question": "Why should we hire you?",
                "answer": "I bring a unique blend of skills, experience, and passion that aligns well with this role. My past work in [industry or skill area] demonstrates my ability to adapt and deliver results. I'm a fast learner, highly collaborative, and motivated to exceed expectations. I also bring a fresh perspective and a deep commitment to team goals.",
                "category": "Strengths & Weaknesses"
            },
            {
                "id": 3,
                "question": "What are your strengths?",
                "answer": "One of my key strengths is adaptability—I can quickly adjust to new environments and challenges. I also have strong communication skills and work well with cross-functional teams. I'm known for my analytical thinking and ability to solve problems under pressure. These qualities help me stay productive and focused on results.",
                "category": "Strengths & Weaknesses"
            },
            {
                "id": 4,
                "question": "What is your biggest weakness?",
                "answer": "Earlier in my career, I had trouble delegating tasks because I wanted everything to be perfect. Over time, I've learned that trusting others and enabling them leads to better outcomes. I've taken steps to improve by mentoring team members and focusing on big-picture goals. This shift has made me a better leader and collaborator.",
                "category": "Strengths & Weaknesses"
            },
            {
                "id": 5,
                "question": "Why do you want to leave your current job?",
                "answer": "I'm looking for new challenges and opportunities to grow professionally. While I've learned a lot in my current role, I feel it's time to expand my skills in a new environment. I'm particularly interested in your company's vision and the impact it's making. I believe this position aligns with my long-term goals.",
                "category": "Career & Goals"
            },
            {
                "id": 6,
                "question": "Tell me about a time you failed.",
                "answer": "In one project, I underestimated the time needed for testing, which delayed the final delivery. I took full responsibility and worked overtime to make up for the delay. This taught me the importance of realistic planning and proactive risk assessment. Since then, I've improved my time management and always build in buffer time for critical tasks.",
                "category": "Behavioral Questions"
            },
            {
                "id": 7,
                "question": "Where do you see yourself in 5 years?",
                "answer": "In five years, I see myself in a leadership position where I can drive strategic initiatives and mentor others. I want to grow within a company that values innovation and continuous improvement. I'm also keen on expanding my technical and managerial skills. This role is a solid step toward that vision.",
                "category": "Career & Goals"
            },
            {
                "id": 8,
                "question": "Describe a conflict at work and how you handled it.",
                "answer": "I once disagreed with a teammate on the approach to a project. Instead of escalating, I suggested we sit down and align on the objectives. By listening to each other and involving a third opinion, we found a middle ground. This experience taught me the value of empathy and clear communication in conflict resolution.",
                "category": "Behavioral Questions"
            },
            {
                "id": 9,
                "question": "Why do you want to work here?",
                "answer": "I've researched your company's culture, mission, and recent achievements, and they resonate with my own values. I'm impressed by your commitment to innovation and team development. I believe I can contribute meaningfully while learning from a talented team. It's a place where I see long-term potential and mutual growth.",
                "category": "Company Specific"
            },
            {
                "id": 10,
                "question": "How do you handle pressure?",
                "answer": "I stay calm under pressure by focusing on priorities and breaking tasks into smaller steps. I also communicate early if delays are expected, so the team is aligned. Over time, I've learned to view pressure as a challenge rather than a setback. It helps me stay focused and often brings out my best performance.",
                "category": "Work Style & Environment"
            },
            {
                "id": 11,
                "question": "What motivates you?",
                "answer": "I'm motivated by problem-solving and achieving goals that create a tangible impact. Whether it's improving a process or launching a new initiative, I thrive when I see progress. I'm also driven by learning and professional growth. Being part of a dynamic team further fuels my motivation.",
                "category": "Work Style & Environment"
            },
            {
                "id": 12,
                "question": "Are you a team player or an individual contributor?",
                "answer": "I'm comfortable in both roles, but I particularly enjoy working in a team. Collaborating allows for diverse perspectives and usually leads to better solutions. At the same time, I can work independently and take ownership of tasks when required. I adapt based on what the project needs.",
                "category": "Work Style & Environment"
            },
            {
                "id": 13,
                "question": "What are your salary expectations?",
                "answer": "I'm open to discussing a compensation package that reflects my skills, experience, and the responsibilities of the role. Based on my research and current market trends, a fair range would be [X–Y], but I'm flexible. More than just salary, I value growth opportunities and company culture. I'm confident we can find a mutually agreeable figure.",
                "category": "Career & Goals"
            },
            {
                "id": 14,
                "question": "What are your career goals?",
                "answer": "My goal is to become a subject matter expert and eventually take on a leadership role. I want to contribute to strategic decisions and mentor newer team members. I'm also interested in expanding my skillset through certifications and cross-functional projects. This role supports those goals well.",
                "category": "Career & Goals"
            },
            {
                "id": 15,
                "question": "How do you take feedback?",
                "answer": "I view feedback as an opportunity for growth. Whether positive or constructive, I listen carefully and apply it to improve. I also ask clarifying questions to fully understand the perspective. Feedback has been essential to my development throughout my career.",
                "category": "Work Style & Environment"
            },
            {
                "id": 16,
                "question": "Describe a time you went above and beyond.",
                "answer": "In one project, a teammate fell sick during a key phase. I volunteered to take on their responsibilities in addition to mine. I worked late and coordinated with stakeholders to keep the project on track. This experience reaffirmed my commitment to team success.",
                "category": "Behavioral Questions"
            },
            {
                "id": 17,
                "question": "What would your manager say about you?",
                "answer": "My manager would describe me as dependable, proactive, and solution-oriented. I consistently meet deadlines and take initiative in solving problems. They've also appreciated my communication skills and ability to lead small teams. I maintain a strong rapport with peers and seniors alike.",
                "category": "Professional Relationships"
            },
            {
                "id": 18,
                "question": "What are you passionate about?",
                "answer": "I'm passionate about continuous improvement—both personal and professional. I enjoy learning new technologies, tools, and best practices. Outside of work, I'm passionate about mentoring and helping others grow. This mindset helps me stay engaged and committed.",
                "category": "Personal Background"
            },
            {
                "id": 19,
                "question": "How do you define success?",
                "answer": "I define success as achieving goals while maintaining integrity and contributing positively to others. It's not just about individual results but also the impact on the team and company. Success also involves growth and learning. If I've added value and improved, I consider it a win.",
                "category": "Professional Relationships"
            },
            {
                "id": 20,
                "question": "Have you ever disagreed with your manager?",
                "answer": "Yes, I once disagreed with a proposed approach to a project. I respectfully presented data and offered an alternative. My manager appreciated the initiative, and we ended up refining the original plan. The experience strengthened our working relationship.",
                "category": "Professional Relationships"
            },
            {
                "id": 21,
                "question": "What do you know about our company?",
                "answer": "I've read about your recent milestones, such as [specific achievement], and your strong emphasis on [core value]. Your commitment to innovation and employee development stands out. I also appreciate your presence in [specific market or product]. I'm excited by your vision and growth trajectory.",
                "category": "Company Specific"
            },
            {
                "id": 22,
                "question": "Describe a time you led a team.",
                "answer": "I led a cross-functional team on a product launch involving marketing, design, and engineering. I coordinated timelines, resolved blockers, and kept everyone aligned on goals. We delivered ahead of schedule and saw a 20% increase in user engagement. It was a great leadership learning experience.",
                "category": "Behavioral Questions"
            },
            {
                "id": 23,
                "question": "How do you handle criticism?",
                "answer": "I try to detach emotion from feedback and focus on the message. I thank the person for their input, evaluate its validity, and apply it where helpful. This helps me grow professionally and avoid repeating mistakes. I've learned to welcome constructive criticism over time.",
                "category": "Work Style & Environment"
            },
            {
                "id": 24,
                "question": "What kind of work environment do you prefer?",
                "answer": "I thrive in collaborative, transparent, and growth-oriented environments. A place where ideas are welcomed, and initiative is encouraged suits me best. I also value flexibility and open communication. These factors help me stay productive and engaged.",
                "category": "Work Style & Environment"
            },
            {
                "id": 25,
                "question": "Tell me about a time you missed a deadline.",
                "answer": "I once underestimated the complexity of a task and missed a deadline by a day. I immediately informed the stakeholders and offered a revised plan. I also analyzed what went wrong to improve my estimation skills. Since then, I've consistently met or exceeded deadlines.",
                "category": "Behavioral Questions"
            },
            {
                "id": 26,
                "question": "Are you open to relocation or travel?",
                "answer": "Yes, I'm open to relocation and travel if it aligns with the role and company objectives. I see it as an opportunity to grow and gain diverse experiences. I've relocated before and adapted quickly. It adds depth to my professional and personal growth.",
                "category": "Company Specific"
            },
            {
                "id": 27,
                "question": "Describe a project you're proud of.",
                "answer": "I worked on automating a manual process that saved the company over 100 hours per month. I initiated the project, collaborated with stakeholders, and led testing. The final solution not only improved efficiency but also reduced human errors. It's rewarding to know I made a lasting impact.",
                "category": "Behavioral Questions"
            },
            {
                "id": 28,
                "question": "What are your hobbies?",
                "answer": "I enjoy reading, especially non-fiction and self-improvement books. I also like working on side projects that enhance my skills. Outside of that, I'm into hiking and spending time outdoors—it helps me reset and stay energized. Hobbies keep me balanced and creative.",
                "category": "Personal Background"
            }
        ];
        
        this.categories = [
            "Personal Background",
            "Strengths & Weaknesses", 
            "Career & Goals",
            "Behavioral Questions",
            "Work Style & Environment",
            "Company Specific",
            "Professional Relationships"
        ];

        this.state = {
            currentScreen: 'landing-page',
            practiceMode: null,
            selectedCategories: [],
            timerDuration: null,
            currentQuestionIndex: 0,
            questionsForSession: [],
            sessionStartTime: null,
            sessionData: {
                answers: {},
                notes: {},
                favorites: new Set(),
                difficulties: {},
                completed: new Set()
            },
            timerInterval: null,
            recordingInterval: null,
            isRecording: false,
            recordingStartTime: null
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderCategories();
        this.showScreen('landing-page');
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Mode selection
        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const mode = e.currentTarget.dataset.mode;
                console.log('Mode selected:', mode);
                this.selectMode(mode);
            });
        });

        // Navigation buttons - use event delegation to ensure they work
        document.addEventListener('click', (e) => {
            if (e.target.id === 'back-to-landing' || e.target.closest('#back-to-landing')) {
                e.preventDefault();
                this.showScreen('landing-page');
            }
            
            if (e.target.id === 'back-to-landing-timer' || e.target.closest('#back-to-landing-timer')) {
                e.preventDefault();
                this.showScreen('landing-page');
            }
            
            if (e.target.id === 'start-category-practice' || e.target.closest('#start-category-practice')) {
                e.preventDefault();
                this.startPractice();
            }
            
            if (e.target.id === 'start-timed-practice' || e.target.closest('#start-timed-practice')) {
                e.preventDefault();
                this.startPractice();
            }
            
            if (e.target.id === 'end-session' || e.target.closest('#end-session')) {
                e.preventDefault();
                console.log('End session clicked');
                this.endSession();
            }
            
            if (e.target.id === 'start-new-session' || e.target.closest('#start-new-session')) {
                e.preventDefault();
                this.resetAndGoHome();
            }
            
            if (e.target.id === 'select-all-categories' || e.target.closest('#select-all-categories')) {
                e.preventDefault();
                this.selectAllCategories();
            }
            
            if (e.target.id === 'prev-btn' || e.target.closest('#prev-btn')) {
                e.preventDefault();
                console.log('Previous question clicked');
                this.previousQuestion();
            }
            
            if (e.target.id === 'next-btn' || e.target.closest('#next-btn')) {
                e.preventDefault();
                console.log('Next question clicked');
                this.nextQuestion();
            }
            
            if (e.target.id === 'skip-btn' || e.target.closest('#skip-btn')) {
                e.preventDefault();
                console.log('Skip question clicked');
                this.nextQuestion();
            }
            
            if (e.target.id === 'favorite-btn' || e.target.closest('#favorite-btn')) {
                e.preventDefault();
                this.toggleFavorite();
            }
            
            if (e.target.id === 'difficulty-btn' || e.target.closest('#difficulty-btn')) {
                e.preventDefault();
                this.showDifficultyModal();
            }
            
            if (e.target.id === 'record-btn' || e.target.closest('#record-btn')) {
                e.preventDefault();
                this.toggleRecording();
            }
            
            if (e.target.id === 'close-difficulty-modal' || e.target.closest('#close-difficulty-modal')) {
                e.preventDefault();
                this.hideDifficultyModal();
            }
            
            if (e.target.id === 'review-session' || e.target.closest('#review-session')) {
                e.preventDefault();
                this.reviewSession();
            }
            
            // Tab buttons
            if (e.target.classList.contains('tab-btn')) {
                e.preventDefault();
                const tab = e.target.dataset.tab;
                console.log('Tab clicked:', tab);
                this.switchTab(tab);
            }
            
            // Star rating
            if (e.target.classList.contains('star')) {
                e.preventDefault();
                const rating = parseInt(e.target.dataset.rating);
                this.setDifficulty(rating);
            }
            
            // Timer cards
            if (e.target.classList.contains('timer-card') || e.target.closest('.timer-card')) {
                e.preventDefault();
                const card = e.target.closest('.timer-card') || e.target;
                const duration = parseInt(card.dataset.time);
                this.selectTimer(duration);
            }
        });

        // Add home navigation to title
        const appTitle = document.querySelector('.app-title');
        if (appTitle) {
            appTitle.style.cursor = 'pointer';
            appTitle.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Home navigation clicked');
                this.resetAndGoHome();
            });
        }

        // Answer and notes input
        const answerInput = document.getElementById('answer-input');
        if (answerInput) {
            answerInput.addEventListener('input', (e) => this.saveAnswer(e.target.value));
        }

        const notesInput = document.getElementById('notes-input');
        if (notesInput) {
            notesInput.addEventListener('input', (e) => this.saveNotes(e.target.value));
        }

        // Modal background click to close
        const modal = document.getElementById('difficulty-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideDifficultyModal();
                }
            });
        }
        
        console.log('Event listeners set up complete');
    }

    selectMode(mode) {
        console.log('Selecting mode:', mode);
        this.state.practiceMode = mode;
        
        // Update UI
        document.querySelectorAll('.mode-card').forEach(card => card.classList.remove('selected'));
        const selectedCard = document.querySelector(`[data-mode="${mode}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }

        // Navigate based on mode
        setTimeout(() => {
            switch(mode) {
                case 'random':
                    this.prepareRandomQuestions();
                    this.startPractice();
                    break;
                case 'category':
                    this.showScreen('category-selection');
                    break;
                case 'mock':
                    this.prepareMockInterview();
                    this.startPractice();
                    break;
                case 'timed':
                    this.showScreen('timer-selection');
                    break;
            }
        }, 200);
    }

    renderCategories() {
        const grid = document.getElementById('category-grid');
        if (!grid) return;
        
        grid.innerHTML = '';

        this.categories.forEach(category => {
            const count = this.questions.filter(q => q.category === category).length;
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.category = category;
            
            card.innerHTML = `
                <div class="category-info">
                    <h4>${category}</h4>
                    <div class="category-count">${count} questions</div>
                </div>
                <div class="category-checkbox">
                    <span style="display: none;">✓</span>
                </div>
            `;

            card.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleCategory(category);
            });
            grid.appendChild(card);
        });
    }

    toggleCategory(category) {
        const card = document.querySelector(`[data-category="${category}"]`);
        if (!card) return;
        
        const checkbox = card.querySelector('.category-checkbox span');
        
        if (this.state.selectedCategories.includes(category)) {
            this.state.selectedCategories = this.state.selectedCategories.filter(c => c !== category);
            card.classList.remove('selected');
            if (checkbox) checkbox.style.display = 'none';
        } else {
            this.state.selectedCategories.push(category);
            card.classList.add('selected');
            if (checkbox) checkbox.style.display = 'block';
        }
    }

    selectAllCategories() {
        this.state.selectedCategories = [...this.categories];
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.add('selected');
            const checkbox = card.querySelector('.category-checkbox span');
            if (checkbox) checkbox.style.display = 'block';
        });
    }

    selectTimer(duration) {
        console.log('Timer selected:', duration);
        this.state.timerDuration = duration;
        document.querySelectorAll('.timer-card').forEach(card => card.classList.remove('selected'));
        const selectedCard = document.querySelector(`[data-time="${duration}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }
    }

    prepareRandomQuestions() {
        this.state.questionsForSession = [...this.questions].sort(() => Math.random() - 0.5);
        console.log('Random questions prepared:', this.state.questionsForSession.length);
    }

    prepareMockInterview() {
        // Select 8-10 questions from different categories for a balanced mock interview
        const questionsPerCategory = Math.ceil(9 / this.categories.length);
        let mockQuestions = [];
        
        this.categories.forEach(category => {
            const categoryQuestions = this.questions.filter(q => q.category === category);
            const selected = categoryQuestions.sort(() => Math.random() - 0.5).slice(0, questionsPerCategory);
            mockQuestions = [...mockQuestions, ...selected];
        });
        
        this.state.questionsForSession = mockQuestions.sort(() => Math.random() - 0.5).slice(0, 9);
        console.log('Mock interview questions prepared:', this.state.questionsForSession.length);
    }

    prepareCategoryQuestions() {
        if (this.state.selectedCategories.length === 0) {
            this.state.questionsForSession = [];
            return;
        }
        
        this.state.questionsForSession = this.questions.filter(q => 
            this.state.selectedCategories.includes(q.category)
        ).sort(() => Math.random() - 0.5);
        console.log('Category questions prepared:', this.state.questionsForSession.length);
    }

    startPractice() {
        console.log('Starting practice...');
        
        if (this.state.practiceMode === 'category') {
            if (this.state.selectedCategories.length === 0) {
                alert('Please select at least one category');
                return;
            }
            this.prepareCategoryQuestions();
        }

        if (this.state.practiceMode === 'timed' && !this.state.timerDuration) {
            alert('Please select a timer duration');
            return;
        }

        if (this.state.questionsForSession.length === 0) {
            alert('No questions available for the selected criteria');
            return;
        }

        this.state.currentQuestionIndex = 0;
        this.state.sessionStartTime = Date.now();
        console.log('Session started with', this.state.questionsForSession.length, 'questions');
        this.showScreen('practice-session');
        this.displayQuestion();
        this.updateSessionHeader();
    }

    displayQuestion() {
        const question = this.state.questionsForSession[this.state.currentQuestionIndex];
        if (!question) return;

        console.log('Displaying question:', this.state.currentQuestionIndex + 1, 'of', this.state.questionsForSession.length);

        // Update question display
        const questionTextEl = document.getElementById('question-text');
        const questionCategoryEl = document.getElementById('question-category');
        
        if (questionTextEl) questionTextEl.textContent = question.question;
        if (questionCategoryEl) questionCategoryEl.textContent = question.category;
        
        // Update sample answer
        const sampleAnswerEl = document.getElementById('sample-answer');
        if (sampleAnswerEl) sampleAnswerEl.textContent = question.answer;
        
        // Update counter and progress
        this.updateProgress();
        
        // Load saved data for this question
        this.loadQuestionData(question.id);
        
        // Update navigation buttons
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        if (prevBtn) prevBtn.disabled = this.state.currentQuestionIndex === 0;
        if (nextBtn) {
            const isLastQuestion = this.state.currentQuestionIndex >= this.state.questionsForSession.length - 1;
            nextBtn.disabled = false;
            nextBtn.textContent = isLastQuestion ? 'Finish' : 'Next →';
        }
        
        // Start timer if in timed mode
        if (this.state.practiceMode === 'timed') {
            this.startQuestionTimer();
        }

        // Make sure we're on the practice tab
        this.switchTab('practice');
    }

    updateProgress() {
        const current = this.state.currentQuestionIndex + 1;
        const total = this.state.questionsForSession.length;
        const percentage = (current / total) * 100;
        
        const counterEl = document.getElementById('question-counter');
        const progressEl = document.getElementById('progress-fill');
        
        if (counterEl) counterEl.textContent = `Question ${current} of ${total}`;
        if (progressEl) progressEl.style.width = `${percentage}%`;
    }

    updateSessionHeader() {
        const modeNames = {
            'random': 'Random Practice',
            'category': 'Category Practice',
            'mock': 'Mock Interview',
            'timed': 'Timed Practice'
        };
        
        const currentModeEl = document.getElementById('current-mode');
        if (currentModeEl) {
            currentModeEl.textContent = modeNames[this.state.practiceMode] || 'Practice Session';
        }
        
        // Show/hide timer
        const timerElement = document.getElementById('session-timer');
        if (timerElement) {
            if (this.state.practiceMode === 'timed') {
                timerElement.style.display = 'block';
            } else {
                timerElement.style.display = 'none';
            }
        }
    }

    startQuestionTimer() {
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
        }
        
        let timeLeft = this.state.timerDuration;
        const display = document.getElementById('timer-display');
        if (!display) return;
        
        const updateTimer = () => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(this.state.timerInterval);
                this.nextQuestion();
                return;
            }
            timeLeft--;
        };
        
        updateTimer();
        this.state.timerInterval = setInterval(updateTimer, 1000);
    }

    previousQuestion() {
        console.log('Going to previous question');
        if (this.state.currentQuestionIndex > 0) {
            this.saveCurrentQuestionData();
            this.state.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        console.log('Going to next question');
        this.saveCurrentQuestionData();
        
        if (this.state.currentQuestionIndex < this.state.questionsForSession.length - 1) {
            this.state.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            console.log('Session complete, ending...');
            this.endSession();
        }
    }

    saveCurrentQuestionData() {
        if (this.state.questionsForSession.length === 0) return;
        
        const question = this.state.questionsForSession[this.state.currentQuestionIndex];
        if (!question) return;
        
        const questionId = question.id;
        
        // Mark as completed
        this.state.sessionData.completed.add(questionId);
        
        // Clear timer if running
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
        }
    }

    loadQuestionData(questionId) {
        // Load saved answer
        const savedAnswer = this.state.sessionData.answers[questionId] || '';
        const answerInput = document.getElementById('answer-input');
        if (answerInput) answerInput.value = savedAnswer;
        
        // Load saved notes
        const savedNotes = this.state.sessionData.notes[questionId] || '';
        const notesInput = document.getElementById('notes-input');
        if (notesInput) notesInput.value = savedNotes;
        
        // Update favorite status
        const favoriteBtn = document.getElementById('favorite-btn');
        const favoriteIcon = favoriteBtn?.querySelector('.action-icon');
        if (favoriteBtn && favoriteIcon) {
            if (this.state.sessionData.favorites.has(questionId)) {
                favoriteBtn.classList.add('active');
                favoriteIcon.textContent = '★';
            } else {
                favoriteBtn.classList.remove('active');
                favoriteIcon.textContent = '☆';
            }
        }
        
        // Update difficulty rating
        const difficulty = this.state.sessionData.difficulties[questionId];
        const difficultyRating = document.getElementById('difficulty-rating');
        if (difficultyRating) {
            if (difficulty) {
                difficultyRating.textContent = '★'.repeat(difficulty);
            } else {
                difficultyRating.textContent = 'Rate';
            }
        }
    }

    toggleFavorite() {
        const question = this.state.questionsForSession[this.state.currentQuestionIndex];
        if (!question) return;
        
        const questionId = question.id;
        const favoriteBtn = document.getElementById('favorite-btn');
        const favoriteIcon = favoriteBtn?.querySelector('.action-icon');
        
        if (!favoriteBtn || !favoriteIcon) return;
        
        if (this.state.sessionData.favorites.has(questionId)) {
            this.state.sessionData.favorites.delete(questionId);
            favoriteBtn.classList.remove('active');
            favoriteIcon.textContent = '☆';
        } else {
            this.state.sessionData.favorites.add(questionId);
            favoriteBtn.classList.add('active');
            favoriteIcon.textContent = '★';
        }
        
        this.updateHeaderStats();
    }

    saveAnswer(value) {
        const question = this.state.questionsForSession[this.state.currentQuestionIndex];
        if (!question) return;
        
        const questionId = question.id;
        this.state.sessionData.answers[questionId] = value;
    }

    saveNotes(value) {
        const question = this.state.questionsForSession[this.state.currentQuestionIndex];
        if (!question) return;
        
        const questionId = question.id;
        this.state.sessionData.notes[questionId] = value;
    }

    switchTab(tabName) {
        console.log('Switching to tab:', tabName);
        
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        const activeTabBtn = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeTabBtn) {
            activeTabBtn.classList.add('active');
        }
        
        // Update tab panes - hide all first
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
            pane.style.display = 'none';
        });
        
        // Show the active pane
        const activePane = document.getElementById(`${tabName}-tab`);
        if (activePane) {
            activePane.classList.add('active');
            activePane.style.display = 'block';
        }
        
        console.log('Tab switched to:', tabName);
    }

    toggleRecording() {
        const recordBtn = document.getElementById('record-btn');
        const recordText = recordBtn?.querySelector('.record-text');
        const recordingTimer = document.getElementById('recording-timer');
        const recordingTime = document.getElementById('recording-time');
        
        if (!recordBtn || !recordText || !recordingTimer || !recordingTime) return;
        
        if (!this.state.isRecording) {
            // Start recording
            this.state.isRecording = true;
            this.state.recordingStartTime = Date.now();
            recordBtn.classList.add('recording');
            recordText.textContent = 'Stop Recording';
            recordingTimer.style.display = 'flex';
            
            this.state.recordingInterval = setInterval(() => {
                const elapsed = Math.floor((Date.now() - this.state.recordingStartTime) / 1000);
                const minutes = Math.floor(elapsed / 60);
                const seconds = elapsed % 60;
                recordingTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }, 1000);
        } else {
            // Stop recording
            this.state.isRecording = false;
            recordBtn.classList.remove('recording');
            recordText.textContent = 'Start Recording';
            recordingTimer.style.display = 'none';
            
            if (this.state.recordingInterval) {
                clearInterval(this.state.recordingInterval);
            }
        }
    }

    showDifficultyModal() {
        const modal = document.getElementById('difficulty-modal');
        if (!modal) return;
        
        modal.classList.remove('hidden');
        
        // Load current rating
        const question = this.state.questionsForSession[this.state.currentQuestionIndex];
        if (!question) return;
        
        const questionId = question.id;
        const currentRating = this.state.sessionData.difficulties[questionId] || 0;
        
        document.querySelectorAll('.star').forEach((star, index) => {
            if (index < currentRating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    hideDifficultyModal() {
        const modal = document.getElementById('difficulty-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    setDifficulty(rating) {
        const question = this.state.questionsForSession[this.state.currentQuestionIndex];
        if (!question) return;
        
        const questionId = question.id;
        this.state.sessionData.difficulties[questionId] = rating;
        
        // Update UI
        const difficultyRating = document.getElementById('difficulty-rating');
        if (difficultyRating) {
            difficultyRating.textContent = '★'.repeat(rating);
        }
        
        // Update modal stars
        document.querySelectorAll('.star').forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
        
        // Close modal after a short delay
        setTimeout(() => this.hideDifficultyModal(), 500);
    }

    endSession() {
        console.log('Ending session...');
        this.saveCurrentQuestionData();
        
        // Clear any running timers
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
        }
        if (this.state.recordingInterval) {
            clearInterval(this.state.recordingInterval);
        }
        
        this.showSessionSummary();
    }

    showSessionSummary() {
        console.log('Showing session summary...');
        
        // Calculate stats
        const totalQuestions = this.state.sessionData.completed.size;
        const sessionTime = this.formatSessionTime(Date.now() - this.state.sessionStartTime);
        const favoritesCount = this.state.sessionData.favorites.size;
        const notesCount = Object.keys(this.state.sessionData.notes).filter(id => 
            this.state.sessionData.notes[id].trim().length > 0
        ).length;
        
        // Update summary display
        const totalQuestionsEl = document.getElementById('total-questions');
        const sessionTimeEl = document.getElementById('session-time');
        const favoritesCountEl = document.getElementById('favorites-count');
        const notesCountEl = document.getElementById('notes-count');
        
        if (totalQuestionsEl) totalQuestionsEl.textContent = totalQuestions;
        if (sessionTimeEl) sessionTimeEl.textContent = sessionTime;
        if (favoritesCountEl) favoritesCountEl.textContent = favoritesCount;
        if (notesCountEl) notesCountEl.textContent = notesCount;
        
        this.showScreen('session-summary');
    }

    formatSessionTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        
        if (minutes === 0) {
            return `${seconds}s`;
        } else {
            return `${minutes}m ${seconds}s`;
        }
    }

    reviewSession() {
        // Go back to practice session but disable navigation and show only completed questions
        this.state.currentQuestionIndex = 0;
        this.showScreen('practice-session');
        this.displayQuestion();
        
        // Disable editing for review mode
        const answerInput = document.getElementById('answer-input');
        const notesInput = document.getElementById('notes-input');
        if (answerInput) answerInput.disabled = true;
        if (notesInput) notesInput.disabled = true;
        
        // Change skip button to back to summary
        const skipBtn = document.getElementById('skip-btn');
        if (skipBtn) {
            skipBtn.textContent = 'Back to Summary';
            skipBtn.onclick = (e) => {
                e.preventDefault();
                this.showSessionSummary();
            };
        }
    }

    resetAndGoHome() {
        console.log('Resetting and going home...');
        
        // Clear any running timers
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
        }
        if (this.state.recordingInterval) {
            clearInterval(this.state.recordingInterval);
        }
        
        // Reset state
        this.state = {
            currentScreen: 'landing-page',
            practiceMode: null,
            selectedCategories: [],
            timerDuration: null,
            currentQuestionIndex: 0,
            questionsForSession: [],
            sessionStartTime: null,
            sessionData: {
                answers: {},
                notes: {},
                favorites: new Set(),
                difficulties: {},
                completed: new Set()
            },
            timerInterval: null,
            recordingInterval: null,
            isRecording: false,
            recordingStartTime: null
        };
        
        // Re-enable inputs if they were disabled in review mode
        const answerInput = document.getElementById('answer-input');
        const notesInput = document.getElementById('notes-input');
        if (answerInput) answerInput.disabled = false;
        if (notesInput) notesInput.disabled = false;
        
        // Clear any mode selections
        document.querySelectorAll('.mode-card').forEach(card => card.classList.remove('selected'));
        document.querySelectorAll('.timer-card').forEach(card => card.classList.remove('selected'));
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.remove('selected');
            const checkbox = card.querySelector('.category-checkbox span');
            if (checkbox) checkbox.style.display = 'none';
        });
        
        this.showScreen('landing-page');
    }

    showScreen(screenId) {
        console.log('Showing screen:', screenId);
        
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
        
        this.state.currentScreen = screenId;
        
        // Update session stats in header if in practice
        if (screenId === 'practice-session') {
            this.updateHeaderStats();
        }
    }

    updateHeaderStats() {
        const completed = this.state.sessionData.completed.size;
        const total = this.state.questionsForSession.length;
        const statsEl = document.getElementById('session-stats');
        
        if (statsEl) {
            statsEl.textContent = 
                `${completed}/${total} completed • ${this.state.sessionData.favorites.size} favorited`;
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    new InterviewApp();
});