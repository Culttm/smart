$(function(){

	var testList = [{
            quest: "А ты знаешь, когда начинается первый день цикла?",
            answers: [{
                answ: "В первый день менструации",
                score: "2"
            }, {
                answ: "Во время овуляции",
                score: "0"
            }, {
                answ: "В последний день менструации",
                score: "1"
            }]
        }, {
            quest: "Что такое овуляция?",
            answers: [{
                answ: "Момент зачатия ребенка",
                score: "0"
            }, {
                answ: "Процесс, когда яйцеклетка выходит из яичников",
                score: "2"
            }, {
                answ: "Что-то связанное с яичниками",
                score: "1"
            }]
        }, {
            quest: "Что такое ПМС?",
            answers: [{
                answ: "Месячные",
                score: "0"
            }, {
                answ: "Постменструальный синдром",
                score: "1"
            }, {
                answ: "Предменструальный синдром",
                score: "2"
            }]
        }, {
            quest: "Какой микроэлемент помогает снизить симптомы ПМС?",
            answers: [{
                answ: "Магний",
                score: "1"
            }, {
                answ: "Фосфор",
                score: "0"
            }, {
                answ: "Кальций",
                score: "2"
            }]
        }, {
            quest: "О чем говорят обильные менструации?",
            answers: [{
                answ: "Это сигнал, чтобы обратиться к врачу",
                score: "2"
            }, {
                answ: "Такое часто встречается у девушек. Проходит с первыми родами",
                score: "1"
            }, {
                answ: "Это симптом переизбытка железа в организме",
                score: "0"
            }]
        }, {
            quest: "Как может помочь витамин B9 (фолаты) при ПМС?",
            answers: [{
                answ: "Фолаты активизируют выработку серотонина, гормона, который отвечает за хорошее настроение",
                score: "2"
            }, {
                answ: "Фолаты снимают болевые ощущения во время ПМС",
                score: "1"
            }, {
                answ: "Фолаты уменьшают количество менструальных выделений",
                score: "0"
            }]
        }, {
            quest: "Что ещё ты знаешь про фолаты?",
            answers: [{
                answ: "Их пьют во время беременности",
                score: "1"
            }, {
                answ: "Они помогают сохранить хорошее зрение",
                score: "0"
            }, {
                answ: "Они помогают предотвратить развитие серьёзных пороков у плода",
                score: "2"
            }]
        }, {
            quest: "Как ты думаешь, в какой период цикла у тебя больше шансов забеременеть?",
            answers: [{
                answ: "Во время овуляции",
                score: "2"
            }, {
                answ: "Во время менструации",
                score: "1"
            }, {
                answ: "После менструации",
                score: "0"
            }]
        }, {
            quest: "Назови самый эффективный способ предохранения",
            answers: [{
                answ: "Прерванный половой акт",
                score: "0"
            }, {
                answ: "Презерватив",
                score: "1"
            }, {
                answ: "Противозачаточные таблетки",
                score: "2"
            }]
        }, {
            quest: "Как действуют противозачаточные таблетки?",
            answers: [{
                answ: "Останавливают движение сперматозоидов",
                score: "1"
            }, {
                answ: "Блокируют овуляцию",
                score: "2"
            }, {
                answ: "Уничтожают сперматозоиды",
                score: "0"
            }]
        }, {
            quest: "В каких случаях можно говорить о задержке менструации?",
            answers: [{
                answ: "Когда от первого дня последней менструации прошло более 35 дней",
                score: "2"
            }, {
                answ: "На второй день после того как не пришли месячные",
                score: "0"
            }, {
                answ: "На второй неделе после того как не приходят месячные",
                score: "1"
            }]
        }, {
            quest: "Как принимать оральные контрацептивы?",
            answers: [{
                answ: "Их нужно пить каждый день в одно и то же время, для полной надежности",
                score: "2"
            }, {
                answ: "Сразу после полового акта",
                score: "0"
            }, {
                answ: "От времени к времени, в зависимости от наличия партнера",
                score: "0"
            }]
        }, {
            quest: "Нужно ли делать перерывы в применении оральных контрацептивов?",
            answers: [{
                answ: "Если один препарат оправдал свое действие, то просто нет смысла переходить к другому",
                score: "2"
            }, {
                answ: "Да, потому что организм быстро привыкает к препарату, а значит, он перестает работать",
                score: "0"
            }, {
                answ: "Да, нужно давать организму отдохнуть от гормонов",
                score: "0"
            }]
        }, {
            quest: "Знаете ли Вы, что такое smart-контрацепция?",
            answers: [{
                answ: "Да, это противозачаточные таблетки с фолатами",
                score: "2"
            }, {
                answ: "Да, это предохранение по календарному методу",
                score: "0"
            }, {
                answ: "Да, это противозачаточные таблетки",
                score: "1"
            }, {
                answ: "Нет, не знаю",
                score: "0"
            }]
        }];

    var testResults = [{
            header: "Я – специалист по женской анатомии!",
            text: "Кажется, ты знаешь о женском теле даже больше, чем составители этого теста! Чтобы достичь абсолютного совершенства, посмотри видео из нашей Smart-лаборатории!"
        }, {
            header: "Разбираюсь в женщинах на 4+!",
            text: "Хоть ты и ответила правильно на большинство вопросов, в твоих познаниях о себе есть несколько пробелов. А для хорошего и крепкого здоровья нужно знать абсолютно все! Тебе поможет наша Smart-лаборатория женского здоровья!"
        }, {
            header: "Я уверена, что женщины состоят из конфетти!",
            text: "Женский организм – такой же сложный и запутанный, как и сама женщина. В нем действительно сложно разобраться. Специально для тебя мы запустили проект Smart-лаборатория! Смотри видеоролики!"
        }];



        function TestApp() {
            this.resultScore = 0;
            this.$listContainer = $('#test-list');
            this.$resultContainer = $('#test-result');
            this.$testNum = $('#testNum');
            this.$testAnsw = $('#testAnswer');
            this.$inputlist = $('#inputlist');
            this.$dots = $('.step_box');
            this.$resultCount = $('#resultCount');
            this.$resultHead = $('#resultHead');
            this.$resultText = $('#resultText');
        };

        TestApp.prototype.Init = function(){

            var $this = this;

            $this.createDots()
            $this.createInputs(0);
            $this.setAnswData(0);
            $this.setActiveDot(0);
            $this.setResultScore(0, 0);
        };


		TestApp.prototype.setAnswData = function(index){

			this.$testNum.text(index+1);
            this.$testAnsw.text(testList[index].quest); 

		};

		TestApp.prototype.createDots = function(){
			var items = [];
			
			for (var i = testList.length - 1; i >= 0; i--) {
				items.push('<div data-step="step-'+ (testList.length-i) +'" class="step">o</div>')
			};

			this.$dots.html(items);
			
		};

        TestApp.prototype.setActiveDot = function(index){
            this.$dots.find('.step').eq(index).addClass('active')
        };

		TestApp.prototype.createInputs = function(index){
			var items = [],
				inputs = [];

			for (var i = 0; i < testList[index].answers.length; i++) {
				 items.push(testList[index].answers[i].answ)
			};

			for (var i = 0; i < items.length; i++) {
				inputs.push('<div class="option-group"><input class="inputOption" type="radio" name="option" id="'+i+'"><label data-index="'+i+'" class="label-for-option" for="'+i+'">'+ items[i] +'</label></div>');
			};

			this.$inputlist.html(inputs);

			this.$inputlist.find('.option-group').first().find('input').prop('checked', true)

		};

        TestApp.prototype.setResultScore = function(n, a){

            var $this = this,
                r;

            var set = function(n, a, r){
           
                $this.resultScore = r;
               
                $('body').attr('data-score', r);

            };  

            if (currentQuestion == 1) {
                
                r = parseInt(testList[n].answers[a].score);
                
                $('.inputOption').on('change', function(){

                    a = $(this).attr('id');

                    r = parseInt(testList[n].answers[a].score);
                    
                    set(n, a, r);

                });

                set(n, a, r);
            
            
            }else{
            
                r = $this.resultScore + parseInt(testList[n].answers[a].score);

                set(n, a, r);
            
            };    
        
        };

        TestApp.prototype.getResultState = function(){

            var $this = this,
                n = $this.getResultN();

            $this.$listContainer.removeClass('show').addClass('hide');
            $this.$resultContainer.removeClass('hide').addClass('show');

            $($this.$resultCount).text($this.resultScore);
            $($this.$resultHead).text(testResults[n].header);
            $($this.$resultText).text(testResults[n].text);

        };

        TestApp.prototype.getResultN = function(){

            var $this = this;

            if($this.resultScore >= 24){

                return 0;
            
            }else if( $this.resultScore < 24 && $this.resultScore >= 12){

                return 1;

            }else{

                return 2;
            
            };

        };


        TestApp.prototype.setShareLink = function(){
            var link = defs.siteUrl + '/share/result_' + this.getResultN() + '.html';
                $('#resultShare').attr('data-yasharelink', link).data('yasharelink', link);
        }


        var currentQuestion = 1;
		var TestApp = new TestApp();

        TestApp.Init();

        $('#next').on('click', function(){

            if( currentQuestion < testList.length){

                var ind = parseInt($('.inputOption:checked').attr('id'));
                
                currentQuestion++;

                TestApp.setResultScore(currentQuestion - 1, ind);

                TestApp.setAnswData(currentQuestion - 1);
                TestApp.setActiveDot(currentQuestion - 1);
                TestApp.createInputs(currentQuestion - 1);

            }else{

                TestApp.getResultState();
                TestApp.setShareLink();
            
            };

        });


});